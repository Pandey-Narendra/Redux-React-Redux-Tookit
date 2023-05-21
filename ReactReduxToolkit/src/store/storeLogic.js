
// import { createStore } from 'redux'

//reudcer functions to execute the actions
// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) =>{
//     if(action.type === 'increment'){
//         return {
//             counter : state.counter + 1,
//             showCounter : state.showCounter
//         }
//     }

//     if(action.type === 'incrementby5'){
//         return {
//             counter : state.counter + action.amount,
//             showCounter : state.showCounter
//         }
//     }

//     if(action.type === 'decrement'){
//         return {
//             counter : state.counter - 1,
//             showCounter : state.showCounter
//         }
//     }

//     if(action.type === 'toggle'){
//         return {
//             showCounter : !state.showCounter,
//             counter : state.counter
//         }
//     }

//     return state;
// }



// creating the store and after that pointing to the reducer function
// const store = createStore(counterReducer);
// export default store;



//toolkit
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name : 'counter',
    initialState : initialCounterState,

    reducers : {
        increment(state) {
            state.counter++;
        },

        decrement(state) {
            state.counter--;
        },

        
        increment5(state, action) {
           state.counter = state.counter + action.payload;
        },

        toggle(state){
            state.showCounter = !state.showCounter;
        }
    }
});


const initialAuthState = { isAuthenticated : false }

const authSlice = createSlice({
    name : 'auth',
    initialState : initialAuthState,

    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },

        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    //single reducer
    // reducer: counterSlice.reducer

    //multiple reducer
    reducer : { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;