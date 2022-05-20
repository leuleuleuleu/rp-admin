import React, { useState } from 'react'
import BaseTablesCustom from '../../components/Table/BaseTablesCustom';
import { Pie } from 'react-chartjs-2';
import SearchIcon from '../../images/search.svg';
import NavBars from '../../components/Navbar';

import {
  Chart as ChartJS,
  LinearScale,
  ArcElement,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import DateRange from '../../components/Datepicker/DatePicker';
import { Button, Form } from 'react-bootstrap';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ArcElement
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data_Pie = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const data_Vertical = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [467, 238, 908, 794, 600, 463, 783, 666, 333, 444, 999, 888],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [467, 238, 908, 794, 600, 463, 783, 666, 333, 444, 999, 888],
      borderColor: 'white',
      borderWidth: 2,
      width: 2,
    },

  ],
};

const data_Table = [
  {
    ID: 1,
    CodeDH: "8386",
    Basis: 'HN',
    Date: '22/2/2222',
    Money: '50,000,000',
    Voucher: "0971021196",
    Sale: "10%",
    TotalMoney: '123,123,123',
    Pay: '123,123',
    Debt: '888,888',
    Customer: '213',
    NewOld: 'aaa/bbb',
    Detail: 'ban hang 123',
  },
  {
    ID: 2,
    CodeDH: "8386",
    Basis: 'HN',
    Date: '22/2/2222',
    Money: '50,000,000',
    Voucher: "0971021196",
    Sale: "10%",
    TotalMoney: '123,123,123',
    Pay: '123,123',
    Debt: '888,888',
    Customer: '213',
    NewOld: 'aaa/bbb',
    Detail: 'ban hang 123',
  }
]

function RpSell() {
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
    <div>
      <div className='customer sell' id='sell'>
        <div className="row mb-20 report-title">
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="mb-0">BÁO CÁO DOANH SỐ</h4>
              <div className='d-flex align-items-center filter-button' onClick={() => handleShowBar()}>
                <img src={SearchIcon} />
                
              </div>
            </div>
          </div>
        </div>
        <NavBars />
        <div className="row customer-overview mb-20">
          <div className='d-flex sell-top__box'>
            <div className=" d-flex flex-grow-1">
              <div className="card flex-grow-1"><div className="card-body">
                <div>
                  <h4 className="mb-1 mt-1"><span data-plugin="counterup">50,000,000</span> </h4>
                  <p className="text-muted mb-0">BÁN HÀNG TRONG NGÀY</p>
                </div>
              </div>
              </div>
            </div>
            <div className=" d-flex flex-grow-1">
              <div className="card flex-grow-1"><div className="card-body">
                <div>
                  <h4 className="mb-1 mt-1"><span data-plugin="counterup">18,000,000</span> </h4>
                  <p className="text-muted mb-0">Thanh toán TM / CK / QT</p>
                </div>
                <p className="text-muted mt-3 mb-0">10,000,000 / 5,000,000 / 3,000,000</p>
              </div>
              </div>
            </div>
            <div className=" d-flex flex-grow-1">
              <div className="card flex-grow-1"><div className="card-body">
                <div><h4 className="mb-1 mt-1"><span data-plugin="counterup">1,000,000 </span> </h4>
                  <p className="text-muted mb-0">Thanh toán từ ví</p></div>
              </div>
              </div>
            </div>
            <div className=" d-flex flex-grow-1">
              <div className="card flex-grow-1"><div className="card-body">
                <div><h4 className="mb-1 mt-1"><span data-plugin="counterup">2,000,000</span> </h4>
                  <p className="text-muted mb-0">Thanh toán từ thẻ tiền</p></div>
              </div>
              </div>
            </div>
            <div className=" d-flex flex-grow-1">
              <div className="card flex-grow-1"><div className="card-body">
                <div>
                  <h4 className="mb-1 mt-1"><span data-plugin="counterup">15,000,000</span> </h4>
                  <p className="text-muted mb-0">Nợ phát sinh trong ngày</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className='col-xl-7'>
            <div className='card'>
              <div className='card-body'>
                <Chart type='bar' data={data_Vertical} height={500} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
          <div className='col-xl-5'>
            <div className='card'>
              <div className='card-body'>
                <Pie data={data_Pie} height={500} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
        </div>
        <div className='card mb-20'>
          <div className='card-body'>
            <div className='customer-filter d-flex'>
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
                  dataField: "CodeDH",
                  text: "MÃ ĐH",
                  //headerAlign: "center",
                  //style: { textAlign: "center" },
                  attrs: { "data-title": "MÃ ĐH" },
                  formatter: (cell, row) => (
                    <div>{row.CodeDH}</div>
                  ),
                  headerStyle: () => {
                    return { minWidth: "100%", width: "115px" };
                  },
                },
                {
                  dataField: "Basis",
                  text: "Cơ sở",
                  //headerAlign: "center",
                  //style: { textAlign: "center" },
                  attrs: { "data-title": "Cơ sở" },
                  formatter: (cell, row) => (
                    <div>{row.Basis}</div>
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
                  dataField: "Money",
                  text: "THÀNH TIỀN",
                  //headerAlign: "center",
                  //style: { textAlign: "center" },
                  attrs: { "data-title": "THÀNH TIỀN" },
                  formatter: (cell, row) => (
                    <div>{row.Money}</div>
                  ),
                  headerStyle: () => {
                    return { minWidth: "100%", width: "115px" };
                  },
                },

                {
                  dataField: "Voucher",
                  text: "VOUCHER",
                  //headerAlign: "center",
                  //style: { textAlign: "center" },
                  attrs: { "data-title": "VOUCHER" },
                  formatter: (cell, row) => (
                    <div>{row.Voucher}</div>
                  ),
                  headerStyle: () => {
                    return { minWidth: "100%", width: "115px" };
                  },
                },
                {
                  dataField: "Sale",
                  text: "GIẢM GIÁ",
                  //headerAlign: "center",
                  //style: { textAlign: "center" },
                  attrs: { "data-title": "GIẢM GIÁ" },
                  formatter: (cell, row) => (
                    <div>{row.Sale}</div>
                  ),
                  headerStyle: () => {
                    return { minWidth: "100%", width: "115px" };
                  },
                },
                {
                  dataField: "TotalMoney",
                  text: "TỔNG TIỀN",
                  //headerAlign: "center",
                  //style: { textAlign: "center" },
                  attrs: { "data-title": "TỔNG TIỀN" },
                  formatter: (cell, row) => (
                    <div>{row.TotalMoney}</div>
                  ),
                  headerStyle: () => {
                    return { minWidth: "100%", width: "115px" };
                  },
                },
                {
                  dataField: "Pay",
                  text: "THANH TOÁN",
                  //headerAlign: "center",
                  //style: { textAlign: "center" },
                  attrs: { "data-title": "THANH TOÁN" },
                  formatter: (cell, row) => (
                    <div>{row.Pay}</div>
                  ),
                  headerStyle: () => {
                    return { minWidth: "100%", width: "115px" };
                  },
                },
                {
                  dataField: "Debt",
                  text: "CÒN NỢ",
                  //headerAlign: "center",
                  //style: { textAlign: "center" },
                  attrs: { "data-title": "CÒN NỢ" },
                  formatter: (cell, row) => (
                    <div>{row.Debt}</div>
                  ),
                  headerStyle: () => {
                    return { minWidth: "100%", width: "115px" };
                  },
                },
                {
                  dataField: "Customer",
                  text: "KHÁCH HÀNG",
                  //headerAlign: "center",
                  //style: { textAlign: "center" },
                  attrs: { "data-title": "KHÁCH HÀNG" },
                  formatter: (cell, row) => (
                    <div>{row.Customer}</div>
                  ),
                  headerStyle: () => {
                    return { minWidth: "100%", width: "115px" };
                  },
                },
                {
                  dataField: "NewOld",
                  text: "MỚI/CŨ",
                  //headerAlign: "center",
                  //style: { textAlign: "center" },
                  attrs: { "data-title": "MỚI/CŨ" },
                  formatter: (cell, row) => (
                    <div>{row.NewOld}</div>
                  ),
                  headerStyle: () => {
                    return { minWidth: "100%", width: "115px" };
                  },
                },
                {
                  dataField: "Detail",
                  text: "CHI TIẾT",
                  //headerAlign: "center",
                  //style: { textAlign: "center" },
                  attrs: { "data-title": "CHI TIẾT" },
                  formatter: (cell, row) => (
                    <div>{row.Detail}</div>
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
        <div className='row'>
          <div className='col-xl-4 mb-20'>
            <div className='card'>
              <div className='card-body'>
                <h4 className="card-title mb-4">Sản phẩm / NVL</h4>
                <div className='mb-20'>
                  <div className='d-flex'>
                    <p>Kem dưỡng da</p>
                    <span className='sell-dot'></span>
                    <p>25</p>
                  </div>
                  <div className='d-flex'>
                    <p>Serum dưỡng da</p>
                    <span className='sell-dot'></span>
                    <p>1</p>
                  </div>
                </div>
                <div className='mb-20'>
                  <div className='d-flex'>
                    <p>NVL</p>
                    <span className='sell-dot'></span>
                    <p>1</p>
                  </div>
                  <div className='d-flex'>
                    <p>NVL1</p>
                    <span className='sell-dot'></span>
                    <p>1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-4 mb-20'>
            <div className='card'>
              <div className='card-body'>
                <h4 className="card-title mb-4">Dịch vụ / phụ phí</h4>
                <div className='mb-20'>
                  <div className='d-flex'>
                    <p>Thẻ 10 buổi chăm sóc da</p>
                    <span className='sell-dot'></span>
                    <p>1</p>
                  </div>
                  <div className='d-flex'>
                    <p>Serum dưỡng da</p>
                    <span className='sell-dot'></span>
                    <p>1</p>
                  </div>
                </div>
                <div className='mb-20'>
                  <div className='d-flex'>
                    <p>Phụ phí</p>
                    <span className='sell-dot'></span>
                    <p>1</p>
                  </div>
                  <div className='d-flex'>
                    <p>Phụ phí</p>
                    <span className='sell-dot'></span>
                    <p>1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-4'>
            <div className='card'>
              <div className='card-body'>
                <h4 className="card-title mb-4">Thẻ tiền</h4>
                <div className='mb-20'>
                  <div className='d-flex'>
                    <p>Thẻ 10 buổi chăm sóc da</p>
                    <span className='sell-dot'></span>
                    <p>1</p>
                  </div>
                  <div className='d-flex'>
                    <p>Serum dưỡng da</p>
                    <span className='sell-dot'></span>
                    <p>1</p>
                  </div>
                </div>
                <div className='mb-20'>
                  <div className='d-flex'>
                    <p>NVL</p>
                    <span className='sell-dot'></span>
                    <p>1</p>
                  </div>
                  <div className='d-flex'>
                    <p>NVL1</p>
                    <span className='sell-dot'></span>
                    <p>1</p>
                  </div>
                </div>
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

export default RpSell
