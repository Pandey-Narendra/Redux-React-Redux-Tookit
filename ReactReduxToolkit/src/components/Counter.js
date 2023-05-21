
//toolkit
import { counterActions } from '../store/storeLogic';
//

import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch();

  // in storeLogic.js uses counter name to store reducer and inside it counter state value
  const counterValue = useSelector( (state) => state.counter.counter );
  const show = useSelector( (state) => state.counter.showCounter );

  const incrementHandler = () => {
    // redux
    // dispatch({type : 'increment'});

    //toolkit
    dispatch(counterActions.increment());
  };

  const increment5Handler = () => {
    // redux
    // dispatch({type : 'incrementby5', amount: 5});

    //toolkit
    dispatch(counterActions.increment5(5)); //{type: Some_Unique_Identifier, payload: 10}
  };

  const decrementHandler = () => {
    // redux
    // dispatch({type : 'decrement'});

    //toolkit
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // redux
    // dispatch({type : 'toogle'});

    //toolkit
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{ counterValue }</div>}
      
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increment5Handler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// Class Based Components

// import { Component } from 'react';
// import { Connect } from 'react-redux';


// class classCounter extends Component{
//   incrementHandler () {
//     this.props.increment();
//   }

//   decrementHandler () {
//     this.props.decrement();
//   }

//   toggleCounterHandler () {
    
//   }

//   render() {

//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{ this.props.counter }</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );

//   }

// }

// receives the redux states and return the object where keys will be 
//  available in the as props in the receive compoment and then the value fetch from the 
//  this is equivalnet to useSelecter()

// const mapStateToProps = (state) => {
//   return{
//     counter: state.counter
//   };
// }

// this is equivalnet to useDispatch()
// const mapDispatchToProps = (dispatch) => {
//   return{
//     increment: () => dispatch( { type: 'increment' } ),
//     decrement: () => dispatch( { type: 'decrement' } ),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(classCounter);