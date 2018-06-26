import React from 'react';

const Cinema = (props) => {
    return (
        <div className="cinema-container">
            <img src={props.image}/>
            <h3>props.address</h3>
            <h3>props.workTime</h3>
            <a href={props.link}>link</a>
        </div>
    )
};

export default Cinema;