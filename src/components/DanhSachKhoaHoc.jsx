import React, { Component } from 'react';
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';
// components
import KhoaHoc from './KhoaHoc';

class DanhSachKhoaHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dskh: []
        }
    }

    componentDidMount() {
        axios
            .get('http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc')
            .then(res => {
                console.log(res.data);
                this.setState({
                    dskh: res.data
                })
            })
            .catch(console.log)
    }
    render() {
        const khoaHoc = this.state.dskh.map((khoa, index) => {
            return <KhoaHoc
                key={index}
                khoa={khoa}
            />
        })
        return (
            <div>
                <h1>Danh sach khoa hoc</h1>
                <Container>
                    <Row>
                        {khoaHoc}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DanhSachKhoaHoc;