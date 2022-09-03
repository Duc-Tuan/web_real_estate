import classNames from 'classnames/bind';
import style from './Footer.module.scss';

const ctx = classNames.bind(style);

function Footer() {
  return (
    <div className={ctx('footer')}>
      <div className={ctx('footer__content')}>
        <p>
          Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố
          Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
        </p>
        <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
        <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</p>
        <p>© 2015 - Bản quyền thuộc về Food</p>
      </div>
    </div>
  );
}

export default Footer;
