import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

class KhoaHoc extends Component {
    render() {
        const { khoa } = this.props
        return (
            <Col md={4}>
                <Card>
                    <CardImg top width="100%" src={khoa.HinhAnh} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{khoa.TenKhoaHoc}</CardTitle>
                        <CardText>{khoa.NguoiTao}</CardText>
                        <CardText>{khoa.LuotXem}</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default KhoaHoc;