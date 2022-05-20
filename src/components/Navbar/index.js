import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SvgIcon } from '@material-ui/core';

function useWindowDimensions() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return {
    width
  }
}

function NavBars(props) {
  const { width } = useWindowDimensions()
  const [isShow, setIsShow] = useState("");
  const [isMenuShow, setIsMenuShow] = useState(true);
  const [isActive, setIsActive] = useState('');

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 992 && isMenuShow === true) {
        setIsMenuShow(false)
      } else if (window.innerWidth > 992) {
        setIsMenuShow(true)
      }
    }

    window.addEventListener('resize', handleResize)
  })

  const handleMenuShow = () => {
    setIsMenuShow(!isMenuShow)
    setIsShow("");
  }
  const handleDropDown = (index) => {
    if (window.innerWidth <= 992) {
      if (Number(isShow) === index) {
        setIsShow("");
        setIsActive('')
      }
      else {
        setIsShow(index);
        setIsActive('show')
      }
    } else {
      setIsShow(index);
    }
  }
  useEffect(() => {
    if (window.innerWidth <= 992) {
      setIsMenuShow(false)
    }
  }, [])

  return (
    <div className='menu'>
      <div className='menu-icon__menu-mb' onClick={() => handleMenuShow()}>
        <SvgIcon xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384.97 384.97">
          <g id="Menu">
            <path d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03    C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z" />
            <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03    S379.58,180.455,372.939,180.455z" />
            <path d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909    c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z" />
          </g>
        </SvgIcon>
      </div>
      {<div className={`navbar ${isMenuShow === true ? '' : 'hide'}`}>
        <div className=' d-flex align-items-center item-has-child'>
          <NavLink className='navbar-item d-flex align-items-center flex-column' to="/bao-cao-ngay">
            <div className='d-flex align-items-center'>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" className='d-lg-none d-block' width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
              </SvgIcon>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home d-lg-block d-none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></SvgIcon>
              Báo cáo ngày
            </div>
          </NavLink>
        </div>
        <div className=' d-flex align-items-center item-has-child'>
          <NavLink className='navbar-item d-flex align-items-center flex-column' to="/bao-cao-khach-hang">
            <div className='d-flex align-items-center'>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" className='d-lg-none d-block' width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
              </SvgIcon>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather d-none d-lg-block feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></SvgIcon>
              Khách hàng</div>
          </NavLink>
        </div>
        <div className=' d-flex align-items-center item-has-child'>
          <NavLink className='navbar-item d-flex align-items-center flex-column' to={`${width <= 992 ? "" : '/ban-hang'}`} onClick={() => handleDropDown(1)}>
            <div className='d-flex align-items-center'>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" className={`d-lg-none d-block ${isShow === 1 ? 'rotate-90' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
              </SvgIcon>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather d-none d-lg-block feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></SvgIcon>
              Bán hàng
            </div>
            {
              width < 992 && <ul className={`navbar-sub__menu hide ${isShow === 1 ? isActive : ''}`}>
                <li><Link to="#">Doanh số</Link></li>
                <li><Link to="#">Chi tiết SP/DV bán ra</Link></li>
                <li><Link to="#">Thanh toán trả nợ</Link></li>
                <li><Link to="#">Trả hàng</Link></li>
              </ul>
            }
            {
              width >= 992 && <ul className='navbar-sub__menu d-block'>
                <li><Link to="google.com">Doanh số</Link></li>
                <li><Link to="#">Chi tiết SP/DV bán ra</Link></li>
                <li><Link to="#">Thanh toán trả nợ</Link></li>
                <li><Link to="#">Trả hàng</Link></li>
              </ul>
            }
          </NavLink>
          <span className={`arrow-down ${isShow === 1 ? 'rotate-0' : ''}`} onClick={() => handleDropDown(1)}></span>
        </div>
        <div className=' d-flex align-items-center item-has-child'>
          <NavLink className='navbar-item d-flex align-items-center flex-column' to="/dich-vu">
            <div className='d-flex align-items-center'>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" className='d-lg-none d-block' width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
              </SvgIcon>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather d-none d-lg-block feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></SvgIcon>
              Dịch vụ
            </div>
          </NavLink>
        </div>
        <div className=' d-flex align-items-center item-has-child'>
          <NavLink className='navbar-item d-flex align-items-center flex-column' to="/thu-chi">
            <div className='d-flex align-items-center'>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" className='d-lg-none d-block' width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
              </SvgIcon>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather d-none d-lg-block feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></SvgIcon>
              Thu chi
            </div>
          </NavLink>
        </div>
        <div className=' d-flex align-items-center item-has-child'>
          <NavLink className='navbar-item d-flex align-items-center flex-column' to="/so-quy">
            <div className='d-flex align-items-center'>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" className='d-lg-none d-block' width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
              </SvgIcon>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather d-none d-lg-block feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></SvgIcon>
              Số quỹ
            </div>
          </NavLink>
        </div>
        <div className=' d-flex align-items-center item-has-child'>
          <NavLink className='navbar-item d-flex align-items-center flex-column' to="/ton-kho">
            <div className='d-flex align-items-center'>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" className='d-lg-none d-block' width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
              </SvgIcon>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather d-none d-lg-block feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></SvgIcon>
              Tồn kho
            </div>
          </NavLink>
        </div>
        <div className=' d-flex align-items-center item-has-child'>
          <NavLink className='navbar-item d-flex align-items-center flex-column' to={`${width <= 992 ? "" : '/nhan-vien'}`} onClick={() => handleDropDown(2)}>
            <div className='d-flex align-items-center' >
              <SvgIcon xmlns="http://www.w3.org/2000/svg" className={`d-lg-none d-block ${isShow === 2 ? 'rotate-90' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
              </SvgIcon>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather d-none d-lg-block feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></SvgIcon>
              Nhân viên
            </div>
            {
              width < 992 && <ul className={`navbar-sub__menu hide ${isShow === 2 ? isActive : ''}`}>
                <li><Link to="#">Hoa hồng</Link></li>
                <li><Link to="#">Doanh số</Link></li>
                <li><Link to="#">Bảng lương</Link></li>
              </ul>
            }
            {
              width >= 992 && <ul className='navbar-sub__menu'>
                <li><Link to="#">Hoa hồng</Link></li>
                <li><Link to="#">Doanh số</Link></li>
                <li><Link to="#">Bảng lương</Link></li>
              </ul>
            }
          </NavLink>
          <span className={`arrow-down ${isShow === 2 ? 'rotate-0' : ''}`} onClick={() => handleDropDown(2)}></span>
        </div>
        <div className=' d-flex align-items-center item-has-child'>
          <NavLink className='navbar-item d-flex align-items-center flex-column' to={`${width <= 992 ? "" : '/cong-no'}`} onClick={() => handleDropDown(3)}>
            <div className='d-flex align-items-center' >
              <SvgIcon xmlns="http://www.w3.org/2000/svg" className={`d-lg-none d-block ${isShow === 3 ? 'rotate-90' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
              </SvgIcon>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather d-none d-lg-block feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></SvgIcon>
              Công nợ
            </div>
            {
              width < 992 && <ul className={`navbar-sub__menu hide ${isShow === 3 ? isActive : ''}`}>
                <li><Link to="#">Công nợ</Link></li>
                <li><Link to="#">Báo cáo khóa nợ</Link></li>
              </ul>
            }
            {
              width >= 992 && <ul className='navbar-sub__menu'>
                <li><Link to="#">Công nợ</Link></li>
                <li><Link to="#">Báo cáo khóa nợ</Link></li>
              </ul>
            }
          </NavLink>
          <span className={`arrow-down ${isShow === 3 ? 'rotate-0' : ''}`} onClick={() => handleDropDown(3)}></span>
        </div>
        <div className=' d-flex align-items-center item-has-child'>
          <NavLink className='navbar-item d-flex align-items-center flex-column' to={`${width <= 992 ? "" : '/cham-soc-khach-hang'}`} onClick={() => handleDropDown(4)}>
            <div className='d-flex align-items-center'>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" className={`d-lg-none d-block ${isShow === 4 ? 'rotate-90' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
              </SvgIcon>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather d-none d-lg-block feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></SvgIcon>
              CSKH
            </div>
            {
              width < 992 && <ul className={`navbar-sub__menu hide ${isShow === 4 ? isActive : ''}`}>
                <li><Link to="#">Khách hàng sử dụng APP</Link></li>
                <li><Link to="#">Khách hàng sinh nhật</Link></li>
                <li><Link to="#">Khách hàng sắp lên cấp</Link></li>
                <li><Link to="#">Khách hàng hết sản phẩm</Link></li>
                <li><Link to="#">Khách lâu không sử dụng</Link></li>
                <li><Link to="#">Khách hết thẻ trong ngày</Link></li>
                <li><Link to="#">Thời gian nghe smart call</Link></li>
                <li><Link to="#">Đánh giá dịch vụ</Link></li>
              </ul>
            }
            {
              width >= 992 && <ul className='navbar-sub__menu'>
                <li><Link to="#">Khách hàng sử dụng APP</Link></li>
                <li><Link to="#">Khách hàng sinh nhật</Link></li>
                <li><Link to="#">Khách hàng sắp lên cấp</Link></li>
                <li><Link to="#">Khách hàng hết sản phẩm</Link></li>
                <li><Link to="#">Khách lâu không sử dụng</Link></li>
                <li><Link to="#">Khách hết thẻ trong ngày</Link></li>
                <li><Link to="#">Thời gian nghe smart call</Link></li>
                <li><Link to="#">Đánh giá dịch vụ</Link></li>
              </ul>
            }
          </NavLink>
          <span className={`arrow-down ${isShow === 4 ? 'rotate-0' : ''}`} onClick={() => handleDropDown(4)}></span>
        </div>
        <div className=' d-flex align-items-center item-has-child'>
          <NavLink className='navbar-item d-flex align-items-center flex-column' to={`${width <= 992 ? "" : '/bao-cao-khac'}`} onClick={() => handleDropDown(5)}>
            <div className='d-flex align-items-center' >
              <SvgIcon xmlns="http://www.w3.org/2000/svg" className={`d-lg-none d-block ${isShow === 5 ? 'rotate-90' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"></path>
                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"></path>
              </SvgIcon>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather d-none d-lg-block feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></SvgIcon>
              Khác
            </div>
            {
              width < 992 && <ul className={`navbar-sub__menu hide ${isShow === 5 ? isActive : ''}`}>
                <li><Link to="#">Top bán hàng</Link></li>
                <li><Link to="#">Top doanh số</Link></li>
                <li><Link to="#">Dịch vụ đã bán nhưng chưa thực hiện</Link></li>
                <li><Link to="#">Tổng tiền ví của khách hàng đang có</Link></li>
                <li><Link to="#">Tổng tiền thẻ tiền của khách hàng đang có</Link></li>
                <li><Link to="#">Lợi nhuận</Link></li>
              </ul>
            }
            {
              width >= 992 && <ul className='navbar-sub__menu'>
                <li><Link to="#">Top bán hàng</Link></li>
                <li><Link to="#">Top doanh số</Link></li>
                <li><Link to="#">Dịch vụ đã bán nhưng chưa thực hiện</Link></li>
                <li><Link to="#">Tổng tiền ví của khách hàng đang có</Link></li>
                <li><Link to="#">Tổng tiền thẻ tiền của khách hàng đang có</Link></li>
                <li><Link to="#">Lợi nhuận</Link></li>
              </ul>
            }
          </NavLink>
          <span className={`arrow-down ${isShow === 5 ? 'rotate-0' : ''}`} onClick={() => handleDropDown(5)}></span>
        </div>

      </div>}
      <div className='overlay' onClick={() => handleMenuShow()}>
      </div>
    </div>

  )
}

export default NavBars
