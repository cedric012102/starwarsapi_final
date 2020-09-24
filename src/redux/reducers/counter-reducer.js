import { IncreaseOne, IncreaseTwo } from '../actions';

const initialState = {
    count: 0
};

const resistanceQuote = "You don't know the power of the dark side!";
const firstOrderQuote = "May the force be with you!";

export default (state = initialState, action) => {
    switch (action.type) {
        case IncreaseOne:
            return {
                count: state.count + 1 + firstOrderQuote
            };

        case IncreaseTwo:
            return {
                count: state.count + 1 + resistanceQuote
            };
           
    
        default:
            return state;
    }
}
