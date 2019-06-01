import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import DanhSachKhoaHoc from './components/DanhSachKhoaHoc';
import DangNhap from './components/DangNhap';
import NotFound from './components/NotFound'
import DangKy from './components/DangKy';
import Header from './components/Header';
import ThongTinNguoiDung from './components/ThongTinNguoiDung';
import DanhSachNguoiDung from './components/DanhSachNguoiDung';

class App extends Component {
  render() {
    const { nguoiDung, daDangNhap } = this.props.nguoiDung
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            {/* Public */}
            <Route path="/" exact component={DangNhap} />
            <Route path="/dang-nhap" exact render={({ history }) => <DangNhap history={history} />} />
            <Route path="/dang-ky" exact component={DangKy} />

            {/* Private */}
            <Route path="/dskh" exact component={daDangNhap ? DanhSachKhoaHoc : NotFound} />
            <Route path="/nguoi-dung" exact component={daDangNhap ? ThongTinNguoiDung : NotFound} />

            <Route path="/dsnd" exact component={daDangNhap && nguoiDung.MaLoaiNguoiDung === 'GV' ? DanhSachNguoiDung : NotFound} />

            <Route path="/" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDung: state.nguoiDung
  }
}

export default connect(mapStateToProps)(App);
