import { createStore } from 'redux';

//Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count
});

//Reducers
//1. Reducers are pure functions
//2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
            count: state.count - action.decrementBy
        };
        case 'SET':
        return {
            count: action.count
        }
        case 'RESET':
        return {
            //count: state.count - state.count
            count: 0
        }
        default:
        return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


//Actions - than an object that gets sent to the store

//I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());
// I'd like to reset the count to zero
store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -101 }));
