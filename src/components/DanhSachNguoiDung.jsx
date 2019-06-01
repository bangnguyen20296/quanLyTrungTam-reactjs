import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container, Table, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';

class DanhSachNguoiDung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dsnd: [],
            dskh: [],
            modal: false,

            maKhoaHoc: "",
            taiKhoan: ""
        }
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        axios.get('http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung')
            .then(res => {
                this.setState({
                    dsnd: res.data
                })
            })
            .catch(console.log)

        axios.get('http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc')
            .then(res => {
                this.setState({
                    dskh: res.data
                })
            })
            .catch(console.log)
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    layTaiKhoan = (taiKhoan) => {
        this.setState({ taiKhoan });
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://svcy.myclass.vn/api/QuanLyTrungTam/GhiDanhKhoaHoc', {
            TaiKhoan: this.state.taiKhoan,
            MaKhoaHoc: this.state.maKhoaHoc
        })
            .then(console.log)
            .catch(console.log)
    }

    render() {
        const dsnd = this.state.dsnd.map((nd, index) => {
            return <tr key={index} >
                <td>{index + 1}</td>
                <td>{nd.TaiKhoan}</td>
                <td>{nd.MaLoaiNguoiDung}</td>
                <td>
                    <Button color="info" onClick={() => { this.toggle(); this.layTaiKhoan(nd.TaiKhoan) }}>Ghi Danh</Button>
                    <Button color="warning" className="mx-2">Edit</Button>
                    <Button color="danger">Delete</Button>
                </td>
            </tr>
        })
        const dskh = this.state.dskh.map((kh, index) => {
            return <option key={index} value={kh.MaKhoaHoc}>
                {kh.TenKhoaHoc}
            </option>
        })

        return (
            <Container>
                <Table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tai Khoan</th>
                            <th>MaLoaiNguoiDung</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dsnd}
                    </tbody>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <Form onSubmit={this.onSubmit}>
                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                            <ModalBody>
                                <Input type="select" name="maKhoaHoc" onChange={this.onChange}>
                                    {dskh}
                                </Input>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary">Submit</Button>
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Form>
                    </Modal>
                </Table>
            </Container>
        );
    }
}

export default DanhSachNguoiDung;