import { bindActionCreators } from "redux"

export const plusnumber = (num) => {
    return{
        type:"PLUS",
        payload : num

    }

}
export const minusnumber = (num) => {
    return{
        type:"MINUS",
        payload : num


    }

}