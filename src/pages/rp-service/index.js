import React, { useState } from 'react'
import BaseTablesCustom from '../../components/Table/BaseTablesCustom';
import NavBars from '../../components/Navbar';
import { Button, Form } from 'react-bootstrap';
import DateRange from '../../components/Datepicker/DatePicker';
import SearchIcon from '../../images/search.svg';

const data_Table = [
  {
    ID: 1,
    Date: '22/2/2222',
    Point: '9,5',
    ServiceOrigin: 'aaaaaa',
    CardService: 'ccccc',
    Insurance: 'xbcvx',
    Session: 'ghj',
    Value: '23',
    ValueNoGift: "8386",
    TotalSalary: '1,000,000,000',
    Status: 'red',
    Voucher: "0971021196",
    Evaluation: "abcxyz",
    EvaluationDesc: 'ooooooooooo',
  },
  {
    ID: 2,
    Date: '22/2/2222',
    Point: '9,5',
    ServiceOrigin: 'aaaaaa',
    CardService: 'ccccc',
    Insurance: 'xcv',
    Session: 'ưqe',
    Value: '12',
    ValueNoGift: "8386",
    TotalSalary: '1,000,000,000',
    Status: 'red',
    Voucher: "0971021196",
    Evaluation: "abcxyz",
    EvaluationDesc: 'ooooooooooo',
  }
]

function RpService() {
  const [filters, setFilters] = useState({
    Pi: 1,
    Ps: 10
  });
  const [PageTotal, setPageTotal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isBarShow,setIsBarShow] = useState(false)

  function handleShowBar() {
    setIsBarShow(!isBarShow)
  }
  return (
    <div className='customer'>
      <div className="row mb-20 report-title">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="mb-0">DỊCH VỤ</h4>
            <div className='d-flex align-items-center filter-button' onClick={() => handleShowBar()}>
              <img src={SearchIcon} />
              
            </div>
          </div>
        </div>
      </div>
      <NavBars />
      <div className='card mb-20'>
        <div className='card-body'>
          <div className='customer-filter d-flex'>
            <div className='customer-filter__basis d-flex flex-column'>
              <h3>Điểm</h3>
              <div className='mb-20'>
                <Form.Select aria-label="Default select example" className='ffdPNq'>
                  <option value="1">Tất cả</option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                </Form.Select>
              </div>
            </div>
            <div className='customer-filter__basis d-flex flex-column'>
              <h3>Thời gian</h3>
              <div className='mb-20'>
                <DateRange />
              </div>
            </div>
            <div className='customer-filter__basis d-flex flex-column'>
              <h3>Nhân viên</h3>
              <div className='mb-20'>
                <Form.Select aria-label="Default select example" className='ffdPNq'>
                  <option value="1">Tất cả</option>
                  <option value="1">Nguyễn Hoàng Hà</option>
                  <option value="1">Nguyễn Hoàng Hà1</option>
                  <option value="2">Nguyễn Hoàng Hà2</option>
                </Form.Select>
              </div>
            </div>
            <div className='customer-filter__basis d-flex flex-column'>
              <h3>Dịch vụ gốc</h3>
              <div className='mb-20'>
                <Form.Select aria-label="Default select example" className='ffdPNq'>
                  <option value="1">Tất cả</option>
                  <option value="1">Rửa mặt</option>
                  <option value="1">Cắt mí</option>
                  <option value="2">Hút mỡ</option>
                </Form.Select>
              </div>
            </div>
            <div className='customer-filter__basis d-flex flex-column'>
              <h3>Sao</h3>
              <div className='mb-20'>
                <Form.Select aria-label="Default select example" className='ffdPNq'>
                  <option value="1">Tất cả</option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="2">4</option>
                  <option value="2">5</option>
                </Form.Select>
              </div>
            </div>
            <div className='customer-filter__basis d-flex flex-column'>
              <h3>Trạng Thái</h3>
              <div className='mb-20'>
                <Form.Select aria-label="Default select example" className='ffdPNq'>
                  <option value="1">Tất cả</option>
                  <option value="1">online</option>
                  <option value="1">offline</option>
                </Form.Select>
              </div>
            </div>
            <div className='customer-filter__basis d-flex flex-column'>
              <h3>Bảo hành</h3>
              <div className='mb-20'>
                <Form.Select aria-label="Default select example" className='ffdPNq'>
                  <option value="1">Tất cả</option>
                  <option value="1">Có bảo hành</option>
                  <option value="1">Không bảo hành</option>
                </Form.Select>
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
            <div className='d-flex align-items-end'>
              <Button className='customer-filter__search mb-20' as="input" type="button" value="Tìm kiếm" />
            </div>
          </div>
          <BaseTablesCustom
            data={data_Table}
            textDataNull="Không có dữ liệu."
            options={{
              custom: true,
              totalSize: PageTotal,
              page: filters._pi,
              sizePerPage: filters._ps,
              alwaysShowAllBtns: true,
              onSizePerPageChange: (sizePerPage) => {
                // setListTools([]);
                // const Ps = sizePerPage;
                // setFilters({ ...filters, _ps: Ps });
              },
              onPageChange: (page) => {
                // setListTools([]);
                // const Pi = page;
                // setFilters({ ...filters, _pi: Pi });
              },
            }}
            columns={[
              {
                dataField: "",
                text: "STT",
                formatter: (cell, row, rowIndex) => {
                  const rowNumber =
                    filters.Ps * (filters.Pi - 1) + (rowIndex + 1);
                  return rowNumber;
                },
                headerStyle: () => {
                  return { width: "60px", fontWeight: "800" };
                },
                headerAlign: "center",
                style: { textAlign: "center" },
                attrs: { "data-title": "STT", "className": "table-id" },
              },
              {
                dataField: "ID",
                text: "ID",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "ID" },
                formatter: (cell, row) => (
                  <div>{row.ID}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Date",
                text: "Ngày",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Ngày" },
                formatter: (cell, row) => (
                  <div>{row.Date}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Point",
                text: "Điểm",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Điểm" },
                formatter: (cell, row) => (
                  <div>{row.Point}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "ServiceOrigin",
                text: "Dịch vụ gốc",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Dịch vụ gốc" },
                formatter: (cell, row) => (
                  <div>{row.ServiceOrigin}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },

              {
                dataField: "CardService",
                text: "Thẻ liệu trình",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Thẻ liệu trình" },
                formatter: (cell, row) => (
                  <div>{row.CardService}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Insurance",
                text: "Bảo hành",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Bảo hành" },
                formatter: (cell, row) => (
                  <div>{row.Insurance}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Session",
                text: "Buổi",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Buổi" },
                formatter: (cell, row) => (
                  <div>{row.Session}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Value",
                text: "Giá trị",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Giá trị" },
                formatter: (cell, row) => (
                  <div>{row.Value}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "ValueNoGift",
                text: "Giá trị(không gồm buổi tặng)",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Giá trị(không gồm buổi tặng)" },
                formatter: (cell, row) => (
                  <div>{row.ValueNoGift}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "TotalSalary",
                text: "Tổng lương",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Tổng lương" },
                formatter: (cell, row) => (
                  <div>{row.TotalSalary}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Status",
                text: "Trạng thái",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Trạng thái" },
                formatter: (cell, row) => (
                  <div>{row.Status}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Evaluation",
                text: "Đánh giá",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Đánh giá" },
                formatter: (cell, row) => (
                  <div>{row.Evaluation}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "EvaluationDesc",
                text: "Nội dung  đánh giá",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Nội dung  đánh giá" },
                formatter: (cell, row) => (
                  <div>{row.EvaluationDesc}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
            ]}
            loading={loading}
            keyField="ID"
            className="table-responsive-attr"
            classes="table table-bordered"
          />
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

export default RpService