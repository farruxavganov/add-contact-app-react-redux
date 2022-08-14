export function redu(state,action){
    if(action.type === "SUBMIT"){
        state = [...state, action.payload];
        return state;
    }else if(action.type === "UPDATE_SUBMIT"){
        let data = state.map(contact => contact.id === action.payload.id? action.payload : contact);
        state = data;
        return state;
    }else if(action.type === "DELETE"){
        let result = state.filter(contact => contact.id !== action.payload && contact);
        state = result;
        return state;
    }else {
        return state;
    }
}