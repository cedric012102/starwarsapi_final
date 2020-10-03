import React from 'react'
import { Provider } from 'react-redux';
import Counter from './Counter';
import { store } from '../redux/store';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';






function Planets() {
    return (
        <Provider store={store}>
            <div>
                <Counter />
            </div>
        </Provider>



    );
}

export default Planets;
