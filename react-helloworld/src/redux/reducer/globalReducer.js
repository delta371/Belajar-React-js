import ActionType from './globalActionType';

// Const global store
const globalState = {
    totalOrder: 0 //setelah kita buat global state lalu kita mendefine fi reducernya
}

// Reducer
const rootReducer = (state = globalState, action) => {
    if (action.type === ActionType.PLUS_ORDER) {
        return {
            ...state,
            totalOrder: state.totalOrder + 1
        }
    }
    if (action.type === ActionType.MINUS_ORDER) {
        let totalOrder = 0;
        if (state.totalOrder > 0) {
            totalOrder = state.totalOrder - 1
        }
        return {
            ...state,
            totalOrder: totalOrder
        }
    }


    return state; //hasilnya akan kosong/undefined jika tidak memiliki state global
}


export default rootReducer;