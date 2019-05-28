import React, { Component } from 'react';
import { Container, Form, Label, Input, Button, FormGroup, Alert } from 'reactstrap';
import axios from 'axios';
import { dangKy } from '../actions/nguoiDung';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class DangKy extends Component {
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

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        console.log(this.state)
        this.props.dangKy(this.state, this.props.history)
    }

    render() {
        const { errors } = this.props
        const formInput = [
            { name: "taiKhoan", type: "text", label: "Tai Khoan" },
            { name: "matKhau", type: "password", label: "Mat Khau" },
            { name: "hoTen", type: "text", label: "Ho Ten" },
            { name: "email", type: "text", label: "Email" },
            { name: "soDT", type: "text", label: "So Dien Thoai" },
            { name: "maLoaiNguoiDung", type: "text", label: "Ma Loai Nguoi Dung" }
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
                />
            </FormGroup>
        })
        return (
            <div>
                <h1>Dang Ky</h1>
                {
                    // Object.keys(errors).length !== 0 ?
                    errors.dangKy === false ?
                        <Alert color="danger">
                            exist account
                        </Alert> : null
                }

                <Container className="text-left">
                    <Form onSubmit={this.onSubmit}>
                        {inputElm}
                        <Button>Dang Ky</Button>
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

export default withRouter(connect(mapStateToProps, { dangKy })(DangKy));