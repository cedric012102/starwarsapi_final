import { IncreaseOne, IncreaseTwo } from '../actions';

const initialState = {
    count: 0
};

const resistanceQuote = "YOU DON'T KNOW THE POWER OF THE DARKSIDE!";
const firstOrderQuote = "MAY THE FORCE BE WITH YOU!";

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
