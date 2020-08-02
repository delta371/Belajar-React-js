const redux = require('redux');
const createStore = redux.createStore //membuat store

const initialState = { //membuat state global
    value: 0,
    age: 17
}

// Reducer
const rootReducer = (state = initialState, action) => { //state global
    // console.log(action);
    // if (action.type === 'ADD_AGE') {
    //     return {
    //         ...state, // harus di awli ini dulu
    //         age: state.age + 1
    //     }
    // }
    // if (action.type === 'CHANGE_VALUE') {
    //     return {
    //         ...state,
    //         value: state.value + action.newValue
    //     }
    // }

    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state, // harus di awli ini dulu
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }

}

// Store 
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('store change :', store.getState());
})

// Dispatch
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 });
console.log(store.getState());
