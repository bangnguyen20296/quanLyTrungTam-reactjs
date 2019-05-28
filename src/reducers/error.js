const initialState = {
    dangNhap: "",
    dangKy: true
}

const errorReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "LAY_ERRORS_DANG_NHAP":
            return { ...state, dangNhap: action.errors }

        case "LAY_ERRORS_DANG_KY":
            return { ...state, dangKy: action.errors }

        case "RESET_ERRORS":
            return {}

        default:
            break;
    }
    return state;
}

export default errorReducer;