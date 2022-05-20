import React from 'react'
import { useState } from 'react';
import BaseTablesCustom from '../../components/Table/BaseTablesCustom';
import img_user from '../../images/total-user.svg'
import NavBars from '../../components/Navbar';
import SearchIcon from '../../images/search.svg';

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  registerables as registerablesJS
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Button, Form } from 'react-bootstrap';
import DateRange from '../../components/Datepicker/DatePicker';
ChartJS.register(...registerablesJS);

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
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
    Title: "Nguyễn Tài Tuấn",
    Phone: "0971021196",
    CreateDate: '22/2/2222',
    Level: 'master',
    Basis: 'HN',
    ActuallySpent: '20.000.000',
    Debt: '10.000.000',
    Wallet: '1.000.000.000.000',
    Card: '2',
    ServiceRest: '3',
    ServiceRestNoGift: '4',
    InsuranceCard: 'Oi doi oi',
    Staff: 'Nguyễn Hoàng Hà'
  },
  {
    ID: 2,
    Title: "Nguyễn Tài Tuấn",
    Phone: "0971021196",
    CreateDate: '22/2/2222',
    Level: 'master',
    Basis: 'HN',
    ActuallySpent: '20.000.000',
    Debt: '10.000.000',
    Wallet: '1.000.000.000.000',
    Card: '2',
    ServiceRest: '3',
    ServiceRestNoGift: '4',
    InsuranceCard: 'Oi doi oi',
    Staff: 'Nguyễn Hoàng Hà'
  }
]

function RpCustomer() {
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
    <div className='customer' id='customer'>
      <div className="row mb-20 report-title">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="mb-0">KHÁCH HÀNG</h4>
            <div className='d-flex align-items-center filter-button' onClick={() => handleShowBar()}>
              <img src={SearchIcon} />
              
            </div>
          </div>
        </div>
      </div>
      <NavBars />
      <div className='row customer-overview'>
        <div className='col-md-6 col-xl-3 mb-20'>
          <div className='card'>
            <div className='card-body'>
              <div className="float-end mt-2" style={{ position: "relative" }}>
                <div id="orders-chart" style={{ minHeight: 46 + "px" }}>
                  <div id="apexcharts17cy5e4k" className="apexcharts-canvas apexcharts17cy5e4k apexcharts-theme-light" style={{ width: 45 + "px", height: 46 + "px" }}>
                  </div>
                </div>
                <div className="resize-triggers">
                  <div className="expand-trigger">
                    <div style={{ width: 46 + "px", height: 47 + "px" }}>

                    </div>
                  </div>
                  <div className="contract-trigger">
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-1 mt-1"><span data-plugin="counterup">50,000</span> </h4>
                <p className="text-muted mb-0">Total customers</p>
              </div>
              <p className="text-muted mt-3 mb-0">Từ online: <span className="text-success me-1">58</span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-xl-3 mb-20'>
          <div className='card'>
            <div className='card-body'>
              <div>
                <h4 className="mb-1 mt-1"><span data-plugin="counterup">250 </span> </h4>
                <p className="text-muted mb-0">Customers on day</p>
              </div>
              <p className="text-muted mt-3 mb-0">Từ online: <span className="text-success me-1">58</span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-xl-3 mb-20'>
          <div className='card'>
            <div className='card-body'>
              <div>
                <h4 className="mb-1 mt-1"><span data-plugin="counterup">1,500  </span> </h4>
                <p className="text-muted mb-0">Customers on week</p>
              </div>
              <p className="text-muted mt-3 mb-0">Từ online: <span className="text-success me-1">58</span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-xl-3 mb-20'>
          <div className='card'>
            <div className='card-body'>
              <div>
                <h4 className="mb-1 mt-1"><span data-plugin="counterup">3,800  </span> </h4>
                <p className="text-muted mb-0">Customers on month</p>
              </div>
              <p className="text-muted mt-3 mb-0">Từ online: <span className="text-success me-1">58</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='customer-detail row mb-20'>
        <div className=' m-0 col-xl-12'>
          <div className='row m-0  customer-statistical'>
            <div className='col-xl-3'>
              <div className='d-flex flex-column'>
                <p className='customer-title'>Tổng số khách hàng:</p>
                <p className='customer-number'>50.000</p>
              </div>
            </div>
            <Chart type='bar' data={data} />
          </div>

        </div>
        {/* <div className='col-xl-4'>
          <div className='card mb-20'>
            <div className='card-body'>

            </div>
          </div>
          <div className='card'>
            <div className='card-body'>

            </div>
          </div> */}
        {/* </div> */}
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
                dataField: "Title",
                text: "Tên",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Tên" },
                formatter: (cell, row) => (
                  <div>{row.Title}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Phone",
                text: "Điện thoại",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Điện thoại" },
                formatter: (cell, row) => (
                  <div>{row.Phone}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "CreateDate",
                text: "Ngày tạo",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Ngày tạo" },
                formatter: (cell, row) => (
                  <div>{row.CreateDate}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Level",
                text: "Cấp bậc hiện tại",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Cấp bậc hiện tại" },
                formatter: (cell, row) => (
                  <div>{row.Level}</div>
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
                dataField: "ActuallySpent",
                text: "Tổng tiền thực chi",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Tổng tiền thực chi" },
                formatter: (cell, row) => (
                  <div>{row.ActuallySpent}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Debt",
                text: "Công nợ",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Công nợ" },
                formatter: (cell, row) => (
                  <div>{row.Debt}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Wallet",
                text: "Ví",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Ví" },
                formatter: (cell, row) => (
                  <div>{row.Wallet}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Card",
                text: "Thẻ tiền",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Thẻ tiền" },
                formatter: (cell, row) => (
                  <div>{row.Card}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "ServiceRest",
                text: "Số buổi DV còn lại/ Giá trị",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Số buổi DV còn lại/ Giá trị" },
                formatter: (cell, row) => (
                  <div>{row.ServiceRest}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "ServiceRestNoGift",
                text: "Số buổi DV còn lại/ Giá trị / ( Ko tính tặng )",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Số buổi DV còn lại/ Giá trị \A ( Ko tính tặng )" },
                formatter: (cell, row) => (
                  <div>{row.ServiceRestNoGift}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "InsuranceCard",
                text: "Thẻ bảo hành",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Thẻ bảo hành" },
                formatter: (cell, row) => (
                  <div>{row.InsuranceCard}</div>
                ),
                headerStyle: () => {
                  return { minWidth: "100%", width: "115px" };
                },
              },
              {
                dataField: "Staff",
                text: "Nhân viên phụ trách",
                //headerAlign: "center",
                //style: { textAlign: "center" },
                attrs: { "data-title": "Nhân viên phụ trách" },
                formatter: (cell, row) => (
                  <div>{row.Staff}</div>
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

export default RpCustomer
