import React, { Fragment } from "react";
import { connect } from "react-redux";
import PeopleListItem from "./PeopleListItem";
import Header from "./Header";
import "../styles/PeopleList.scss";

const PeopleList = props => {
  const { filteredHabitants } = props;

  return <PeopleListView filteredHabitants={filteredHabitants} />;
};

const PeopleListView = ({ filteredHabitants }) => (
  <Fragment>
    <Header />
    <div className="PeopleList">
      <p>Your search have {filteredHabitants.length} results</p>
      <p>Click the name to see more info about him or her</p>

      {filteredHabitants &&
        filteredHabitants.map(habitant => (
          <PeopleListItem key={habitant.id} habitant={habitant} />
        ))}
    </div>
  </Fragment>
);

const mapStateToProps = state => {
  return {
    filteredHabitants: state.filterReducer.filteredHabitants
  };
};

export const __PeopleListView = PeopleListView;
export default connect(mapStateToProps)(PeopleList);
