const initialState={
    accInfo:{},
}

export const accinfoReducer=(state=initialState,action)=>{
    if(action.type==="accInfo"){
        return{
            ...state,accInfo:action.payload
        }
    }
    return state;
}