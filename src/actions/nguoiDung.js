import axios from 'axios';

export const dangNhap = (data, history) => {
    //data: {taikhoan, matkhau}
    return (dispatch) => {
        axios
            .get('http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap', {
                params: {
                    taikhoan: data.taiKhoan,
                    matkhau: data.matKhau
                }
            })
            .then(res => {
                if (typeof res.data === 'string') {
                    // console.log(res.data)
                    return Promise.reject(res.data)
                } else {
                    dispatch({
                        type: "DANG_NHAP",
                        nguoiDung: res.data[0]
                    })
                    localStorage.setItem('nguoiDung', JSON.stringify(res.data[0]))
                    history.push("/dskh")
                }
            })
            .catch(err => {
                dispatch(layErrors("LAY_ERRORS_DANG_NHAP", err))
            })
    }
}

export const dangKy = (data, history) => {
    return (dispatch) => {
        axios
            .post('http://svcy.myclass.vn/api/QuanLyTrungTam/DangKy', data)
            .then(res => {
                if (res.data) {
                    history.push('dang-nhap')
                } else {
                    return Promise.reject(res.data)
                }
            })
            .catch(err => {
                dispatch(layErrors("LAY_ERRORS_DANG_KY", err))
            })
    }
}

export const dangXuat = () => {
    return (dispatch) => {
        dispatch({
            type: "DANG_XUAT",
            nguoiDung: {}
        })
        dispatch(resetErrors())
    }
}

export const layErrors = (type, errors) => {
    return {
        type: type,
        errors
    }
}

export const resetErrors = () => {
    return {
        type: "RESET_ERRORS",
    }
}

export const capNhatThongTin = (data) => {
    return (dispatch) => {
        axios
            .put("http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung", data)
            .then(res => {
                if (!res.data) {
                    return Promise.reject({errors: "FAIL TO UPDATE"})
                }
                dispatch({
                    type: "CAP_NHAT",
                    nguoiDung: res.data
                })
            })
            .catch(err => {
                dispatch(layErrors("LAY_ERRORS_CAP_NHAT_THONG_TIN", err))
            })
    }
}