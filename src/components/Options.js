import React from 'react';
import '../styles/Options.scss';

const Options = props => {
    return (
        <select className='Option' onChange={props.onHandleChange}>
            {props.list &&
                props.list.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
    );
};

export default Options;