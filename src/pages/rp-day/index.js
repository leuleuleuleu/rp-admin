import React from 'react'
import { Form } from 'react-bootstrap';
import NavBars from '../../components/Navbar';
import { SvgIcon } from '@material-ui/core';
import DateRange from '../../components/Datepicker/DatePicker';
import { useState } from 'react';
import SearchIcon from '../../images/search.svg';


function RpDay(props) {
  const [isBarShow,setIsBarShow] = useState(false)

  function handleShowBar() {
    setIsBarShow(!isBarShow)
  }
  return (
    <div className='customer'>
      <div className="row mb-20 report-title">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="mb-0">BÁO CÁO NGÀY</h4>
            <div className='d-flex align-items-center filter-button' onClick={() => handleShowBar()}>
              <img src={SearchIcon} />
              
            </div>
          </div>
        </div>
      </div>
      <NavBars />
      <div className='row report-day'>
        <div className='col-xl-3 d-flex mb-20'>
          <div className='card flex-grow-1 report-day__customer' >
            <div className='card-header'>
              <h4 className="card-title mb-0 flex-grow-1">Khách hàng</h4>
            </div>
            <div className='card-body d-flex flex-column' >
              <div className='d-flex align-items-center justify-content-between'>
                <p>Khách hàng mới:</p>
                <p>16</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Đến tại spa:</p>
                <p>5 khách hàng</p>
              </div>
              <div className='d-flex align-items-center justify-content-between mb-20'>
                <p>Web/App:</p>
                <p>11 khách hàng</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Tổng số khách check in:</p>
                <p>16</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Khách đang check in:</p>
                <p>8</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 d-flex mb-20'>
          <div className='card flex-grow-1 report-day__sell'>
            <div className='card-header'>
              <h4 className="card-title mb-0 flex-grow-1">Bán hàng</h4>
            </div>
            <div className='card-body d-flex flex-column'>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Đơn hàng mới:</p>
                <p>16</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Doanh số:</p>
                <p>22.000.000đ</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Thanh toán:</p>
                <p>12.000.000đ (i)</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Thanh toán nợ:</p>
                <p>7.000.000đ</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 d-flex mb-20'>
          <div className='card flex-grow-1 report-day__service'>
            <div className='card-header'>
              <h4 className="card-title mb-0 flex-grow-1">Dịch vụ</h4>
            </div>
            <div className='card-body d-flex flex-column'>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Đặt lịch:</p>
                <p>10 đặt lịch</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Dịch vụ đang làm:</p>
                <p>15</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Dịch vụ đã xong:</p>
                <p>110</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 d-flex mb-20'>
          <div className='card flex-grow-1 report-day__total'>
            <div className='card-header'>
              <h4 className="card-title mb-0 flex-grow-1">Tổng thu/chi</h4>
            </div>
            <div className='card-body d-flex flex-column'>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Tổng thu:</p>
                <p>50.000đ</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>Tổng chi:</p>
                <p>150.000đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {
        <div>
        <div className={`filter-bar ${isBarShow === true ? "show" : ''}`}>
          <div className='customer-filter'>
            
            <div className='customer-filter__basis d-flex flex-column'>
              <h3>Thời gian</h3>
              <div className='mb-20'>
                <DateRange />
              </div>
            </div>
            <div className='customer-filter__basis d-flex flex-column'>
              <h3>Cơ sở</h3>
              <div className='mb-20'>
                <Form.Select aria-label="Default select example" className='ffdPNq'>
                  <option value="1">Tất cả</option>
                  <option value="1">Hà Nội</option>
                  <option value="2">HCM</option>
                  <option value="3">Đà Nẵng</option>
                </Form.Select>
              </div>
            </div>
            <div className="d-flex align-items-end"><input role="button" tabIndex="0" type="button" className="customer-filter__search mb-20 btn btn-primary" value="Tìm kiếm" /></div>
          </div>
        </div>
        <div className='over-lay' onClick={() => handleShowBar()}>
  
        </div>
        </div>
      }
      
    </div>
  )
}

export default RpDay
