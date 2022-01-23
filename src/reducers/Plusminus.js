const initialState = 0

const changeNumber = (state = initialState , action) => {
    switch(action.type){
        case "PLUS" : return state + action.payload ;

        case "MINUS" : return state - action.payload;

        default : return state

    }
        

}

export default changeNumber