import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import '../styles/PeopleInfoItem.scss';

const PeopleInfoItem = (props) => {
    const id = parseInt(props.match.params.id);
    const habitants = props.filteredHabitants;
    const habitant = habitants.filter((habitant) => {
        return habitant.id === id;
    })[0];

    return <PeopleInfoItemView habitant={habitant} />;
};

const PeopleInfoItemView = ({ habitant }) => (
    <Fragment>
        <Header className='PeopleInfoItem'/>
        <div className='PeopleInfoItem'>
            <h1>My name is {habitant.name}</h1>
            <img src={habitant.thumbnail} width="200" height="200" />
            <div>
                <p>I am {habitant.age} years old. My hair's color is: {habitant.hair_color}</p>
                <p>My height is: {habitant.height}, my weight: {habitant.weight}.</p>
            </div>

            {habitant.friends.length === 0 ?
                (<p>This person has no friends</p>) :
                (<div>
                    <p>My beloved friends are:</p>
                    <ul>
                        {habitant.friends.map((friend) => (
                            <li key={habitant.id + friend}>{friend}</li>
                        ))}
                    </ul>
                </div>)
            }

            <div>
                <p>I work as: </p>
                <ul>
                    {habitant.professions.map((prof) => (
                        <li key={habitant.id + prof}>{prof}</li>
                    ))}
                </ul>
            </div>
        </div>
    </Fragment>
);

const mapStateToProps = state => {
    return {
        filteredHabitants: state.filterReducer.filteredHabitants
    }
};

export const __PeopleInfoItemView = PeopleInfoItemView;
export default connect(mapStateToProps)(PeopleInfoItem);