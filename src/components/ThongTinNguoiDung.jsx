import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { capNhatThongTin } from '../actions/nguoiDung';

class ThongTinCaNhan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: ""
        }
    }

    componentDidMount(){
        const { nguoiDung } = this.props.nguoiDung;
        const { TaiKhoan, HoTen, Email, SoDT, MaLoaiNguoiDung } = nguoiDung
        this.setState({
            TaiKhoan, HoTen, Email, SoDT, MaLoaiNguoiDung
        })
    }    

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)

        this.props.capNhatThongTin(this.state)
    }

    render() {
        const { errors } = this.props
        console.log(this.props.nguoiDung)

        const formInput = [
            { name: "TaiKhoan", type: "text", label: "Tai Khoan", disabled: false },
            { name: "MatKhau", type: "password", label: "Mat Khau", disabled: false },
            { name: "HoTen", type: "text", label: "Ho Ten", disabled: false },
            { name: "Email", type: "text", label: "Email", disabled: false },
            { name: "SoDT", type: "text", label: "So Dien Thoai", disabled: false },
            { name: "MaLoaiNguoiDung", type: "text", label: "Ma Loai Nguoi Dung", disabled: true }
        ]
        const inputElm = formInput.map((input, index) => {
            return <FormGroup key={index}>
                <Label for="taikhoan">{input.label}:</Label>
                <Input
                    type={input.type}
                    name={input.name}
                    id={input.name}
                    placeholder={`Nhap ${input.label}`}
                    onChange={this.onChange}
                    value={this.state[input.name]}
                    disabled={input.disabled}
                />
            </FormGroup>
        })

        return (
            <div>
                <h1>Thong Tin Nguoi Dung</h1>
                {/* {
                    // Object.keys(errors).length !== 0 ?
                    errors.dangNhap ?
                        <Alert color="danger">
                            {errors.dangNhap}
                        </Alert> : null
                } */}

                <Container className="text-left">
                    <Form onSubmit={this.onSubmit}>
                        {inputElm}
                        <Button>Cap Nhat</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nguoiDung: state.nguoiDung
    }
}

export default connect(mapStateToProps, { capNhatThongTin })(ThongTinCaNhan);