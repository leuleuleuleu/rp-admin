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
              B??o c??o ng??y
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
              Kh??ch h??ng</div>
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
              B??n h??ng
            </div>
            {
              width < 992 && <ul className={`navbar-sub__menu hide ${isShow === 1 ? isActive : ''}`}>
                <li><Link to="#">Doanh s???</Link></li>
                <li><Link to="#">Chi ti???t SP/DV b??n ra</Link></li>
                <li><Link to="#">Thanh to??n tr??? n???</Link></li>
                <li><Link to="#">Tr??? h??ng</Link></li>
              </ul>
            }
            {
              width >= 992 && <ul className='navbar-sub__menu d-block'>
                <li><Link to="google.com">Doanh s???</Link></li>
                <li><Link to="#">Chi ti???t SP/DV b??n ra</Link></li>
                <li><Link to="#">Thanh to??n tr??? n???</Link></li>
                <li><Link to="#">Tr??? h??ng</Link></li>
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
              D???ch v???
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
              S??? qu???
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
              T???n kho
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
              Nh??n vi??n
            </div>
            {
              width < 992 && <ul className={`navbar-sub__menu hide ${isShow === 2 ? isActive : ''}`}>
                <li><Link to="#">Hoa h???ng</Link></li>
                <li><Link to="#">Doanh s???</Link></li>
                <li><Link to="#">B???ng l????ng</Link></li>
              </ul>
            }
            {
              width >= 992 && <ul className='navbar-sub__menu'>
                <li><Link to="#">Hoa h???ng</Link></li>
                <li><Link to="#">Doanh s???</Link></li>
                <li><Link to="#">B???ng l????ng</Link></li>
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
              C??ng n???
            </div>
            {
              width < 992 && <ul className={`navbar-sub__menu hide ${isShow === 3 ? isActive : ''}`}>
                <li><Link to="#">C??ng n???</Link></li>
                <li><Link to="#">B??o c??o kh??a n???</Link></li>
              </ul>
            }
            {
              width >= 992 && <ul className='navbar-sub__menu'>
                <li><Link to="#">C??ng n???</Link></li>
                <li><Link to="#">B??o c??o kh??a n???</Link></li>
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
                <li><Link to="#">Kh??ch h??ng s??? d???ng APP</Link></li>
                <li><Link to="#">Kh??ch h??ng sinh nh???t</Link></li>
                <li><Link to="#">Kh??ch h??ng s???p l??n c???p</Link></li>
                <li><Link to="#">Kh??ch h??ng h???t s???n ph???m</Link></li>
                <li><Link to="#">Kh??ch l??u kh??ng s??? d???ng</Link></li>
                <li><Link to="#">Kh??ch h???t th??? trong ng??y</Link></li>
                <li><Link to="#">Th???i gian nghe smart call</Link></li>
                <li><Link to="#">????nh gi?? d???ch v???</Link></li>
              </ul>
            }
            {
              width >= 992 && <ul className='navbar-sub__menu'>
                <li><Link to="#">Kh??ch h??ng s??? d???ng APP</Link></li>
                <li><Link to="#">Kh??ch h??ng sinh nh???t</Link></li>
                <li><Link to="#">Kh??ch h??ng s???p l??n c???p</Link></li>
                <li><Link to="#">Kh??ch h??ng h???t s???n ph???m</Link></li>
                <li><Link to="#">Kh??ch l??u kh??ng s??? d???ng</Link></li>
                <li><Link to="#">Kh??ch h???t th??? trong ng??y</Link></li>
                <li><Link to="#">Th???i gian nghe smart call</Link></li>
                <li><Link to="#">????nh gi?? d???ch v???</Link></li>
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
              Kh??c
            </div>
            {
              width < 992 && <ul className={`navbar-sub__menu hide ${isShow === 5 ? isActive : ''}`}>
                <li><Link to="#">Top b??n h??ng</Link></li>
                <li><Link to="#">Top doanh s???</Link></li>
                <li><Link to="#">D???ch v??? ???? b??n nh??ng ch??a th???c hi???n</Link></li>
                <li><Link to="#">T???ng ti???n v?? c???a kh??ch h??ng ??ang c??</Link></li>
                <li><Link to="#">T???ng ti???n th??? ti???n c???a kh??ch h??ng ??ang c??</Link></li>
                <li><Link to="#">L???i nhu???n</Link></li>
              </ul>
            }
            {
              width >= 992 && <ul className='navbar-sub__menu'>
                <li><Link to="#">Top b??n h??ng</Link></li>
                <li><Link to="#">Top doanh s???</Link></li>
                <li><Link to="#">D???ch v??? ???? b??n nh??ng ch??a th???c hi???n</Link></li>
                <li><Link to="#">T???ng ti???n v?? c???a kh??ch h??ng ??ang c??</Link></li>
                <li><Link to="#">T???ng ti???n th??? ti???n c???a kh??ch h??ng ??ang c??</Link></li>
                <li><Link to="#">L???i nhu???n</Link></li>
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
