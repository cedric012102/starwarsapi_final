import React from 'react';

const CardBody = (props) => {
    return (
        <div className='card-body'>
            <p className='card-text'>Which Side Are You On? {props.count} </p>
            <button className='btn btn-primary' onClick={props.handleClickRed}>First Order</button>{' '}
            <button className='btn btn-danger'  onClick={props.handleClickBlue}>Resistance</button>
        </div>
    );
}

export default CardBody;