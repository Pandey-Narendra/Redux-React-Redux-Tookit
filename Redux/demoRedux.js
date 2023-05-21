// importing redux
const redux = require('redux');

// reducer function to maniputate the store state (recives state + action) (returns new state)
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return{
            counter : state.counter + 1
        };
    }

    if (action.type === 'decrement') {
        return{
            counter : state.counter - 1
        };
    }

    return state;
   
};

// creating store and letting him know which reducers to use
const store = redux.createStore(counterReducer);

// 
// console.log(store.getState());

// getting the latested state from the store 
const CounterSubscriber = () => {
    const latestedState =store.getState();
    console.log(latestedState);
};

// creating the subscription for the component
store.subscribe(CounterSubscriber);


// creating dispatch action
store.dispatch( { type: 'currentState' } );
store.dispatch( { type: 'increment' } );
store.dispatch( { type: 'decrement' } );