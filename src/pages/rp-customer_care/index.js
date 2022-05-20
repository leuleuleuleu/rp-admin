import React, { useState } from 'react'
import SearchIcon from '../../images/search.svg';
import NavBars from '../../components/Navbar';
import { Form } from 'react-bootstrap';
import DateRange from '../../components/Datepicker/DatePicker';

function RpCusCare(props) {
  const [isBarShow,setIsBarShow] = useState(false)

  function handleShowBar() {
    setIsBarShow(!isBarShow)
  }
  return (
    <div className='customer'> 
     <div className="row mb-20 report-title">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="mb-0">CSKH</h4>
            <div className='d-flex align-items-center filter-button' onClick={() => handleShowBar()}>
              <img src={SearchIcon} />
              
            </div>
          </div>
        </div>
      </div>
      <NavBars />
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

export default RpCusCare
