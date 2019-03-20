import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getVillage } from "../actions/apiActions";
import {
  setSelectedProfession,
  setSelectedHair,
  setSelectedGenre,
  setFilteredHabitants
} from "../actions/filterActions";

import Options from "./Options";
import ErrorMessage from "./ErrorMessage";
import "../styles/App.scss";

class App extends Component {
  componentWillMount() {
    this.props.getData();
  }

  //when selected option job
  onProfessionChange = e => {
    const profession = e.target.value;

    this.props.setSelectedProfession(profession);
  };

  //when selected option hair
  onHairChange = e => {
    const hair = e.target.value;

    this.props.setSelectedHair(hair);
  };

  //when selected option genre
  onGenreChange = e => {
    const genre = e.target.value;

    this.props.setSelectedGenre(genre);
  };

  //do filter
  handleSubmit = e => {
    e.preventDefault();

    this.props.setFilteredHabitants(
      this.props.apiInfo.village,
      this.props.filterInfo
    );

    //go to PeopleList component
    this.props.history.push("/searched");
  };

  render() {
    const { apiInfo, filterInfo } = this.props;
    let disableButton = true;
    if (filterInfo && filterInfo.profession && filterInfo.hair && filterInfo.genre) {
      disableButton = false;
    }

    return (
      <AppView
        apiInfo={apiInfo}
        filterInfo={filterInfo}
        disableButton={disableButton}
        that={this}
      />
      
    );
  }
}

const AppView = ({ apiInfo, filterInfo, disableButton, that }) => (
  <Fragment>
    {apiInfo.error && <ErrorMessage error={apiInfo.error} />}

    {!apiInfo.error && (
      <div className="App">
        <h1>Meet people in Brastlewark</h1>

        <form onSubmit={that.handleSubmit}>
          <div>
            <Options
              onHandleChange={that.onProfessionChange}
              list={apiInfo.professions}
            />

            <Options
              onHandleChange={that.onHairChange}
              list={apiInfo.hair_colors}
            />

            <Options
              onHandleChange={that.onGenreChange}
              list={["Male", "Female"]}
            />
          </div>
          <button disabled={disableButton}>Search</button>
        </form>

        {filterInfo && (
          <div>
            <p>(Remember you must select job, hair color and genre)</p>
            <ul>
              <li>
                Job:{" "}
                {filterInfo.profession
                  ? filterInfo.profession
                  : "You must select a profession"}
              </li>
              <li>
                Hair:{" "}
                {filterInfo.hair ? filterInfo.hair : "You must select a hair"}
              </li>
              <li>
                Genre:{" "}
                {filterInfo.genre
                  ? filterInfo.genre
                  : "You must select a genre"}
              </li>
            </ul>
          </div>
        )}
      </div>
    )}
  </Fragment>
);

const mapStateToProps = state => {
  return {
    apiInfo: state.apiReducer,
    filterInfo: state.filterReducer.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => { dispatch(getVillage()); },
    setSelectedProfession: prof => { dispatch(setSelectedProfession(prof)); },
    setSelectedHair: hair => { dispatch(setSelectedHair(hair)); },
    setSelectedGenre: genre => { dispatch(setSelectedGenre(genre)); },
    setFilteredHabitants: (village, selected) => { dispatch(setFilteredHabitants(village, selected)); }
  };
};

export const __AppView = AppView;
export default connect(mapStateToProps, mapDispatchToProps)(App);
