import React from 'react';
import { connect } from 'react-redux';
import { increaseOneCounter, increaseTwoCounter } from '../redux/actions';
import CardBody from './CardBody';

const Counter = ({ count, increaseOne, increaseTwo }) => {
    return (
        <div className='card text-center'>
            <div className='card-header bg-primary text-white'>
                Pick A Side!
            </div>
        <CardBody 
        count={count}
        handleClickBlue={increaseOne}
        handleClickRed={increaseTwo}/>
        </div>

    );
}

const mapDispatchToProps = dispatch => {
    return{
        increaseOne: () => dispatch(increaseOneCounter()),
        increaseTwo: () => dispatch(increaseTwoCounter())
    }; 
};

const mapStateToProps = state => ({
    count: state.count
});

// const connectCounter = connect();
// const ReduxCounter = connectCounter(Counter);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);