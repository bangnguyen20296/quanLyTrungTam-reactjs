import React, { Component } from 'react';
import { Container, Form, Label, Input, Button, FormGroup, Alert } from 'reactstrap';
import axios from 'axios';
import { dangNhap } from '../actions/nguoiDung';
import { connect } from 'react-redux';

class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        // axios
        //     .get(`http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${this.state.taiKhoan}&matkhau=${this.state.matKhau}`)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
        console.log(this.state)

        this.props.dangNhap(this.state, this.props.history)
    }

    render() {
        const { errors } = this.props
        // console.log(errors)
        return (
            <div>
                <h1>Dang Nhap</h1>
                {
                    // Object.keys(errors).length !== 0 ?
                    errors.dangNhap ?
                        <Alert color="danger">
                            {errors.dangNhap}
                        </Alert> : null
                }

                <Container className="text-left">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="taikhoan">Tai Khoan:</Label>
                            <Input
                                autoComplete="username"
                                type="text"
                                name="taiKhoan"
                                id="taikhoan"
                                placeholder="Nhap Tai Khoan"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="matkhau">Mat Khau:</Label>
                            <Input
                                autoComplete="current-password"
                                type="password"
                                name="matKhau"
                                id="matkhau"
                                placeholder="Nhap Mat Khau"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                        <Button>Dang Nhap</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, { dangNhap }) (DangNhap); 