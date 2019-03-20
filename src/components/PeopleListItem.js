import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PeopleListItem.scss'

const PeopleListItem = props => (
        <Link to={`/selected/${props.habitant.id}`} className='PeopleListItem'>
            <p>{props.habitant.name}</p>
            <p>{props.habitant.age} years old</p>
        </Link>
);

export default PeopleListItem;