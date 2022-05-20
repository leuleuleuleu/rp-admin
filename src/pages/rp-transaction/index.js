import React from 'react'
import { useState } from 'react';
import BaseTablesCustom from '../../components/Table/BaseTablesCustom';
import NavBars from '../../components/Navbar';
import { Button, Form } from 'react-bootstrap';
import DateRange from '../../components/Datepicker/DatePicker';
import SearchIcon from '../../images/search.svg';

const data_Table = [
    {
        ID: 1,
        Point: "10",
        Money: "123,123,123",
        Method: 'cho',
        StaffCreate: 'Nguyễn Hoàng Hà',
        Type: '1',
        When: '22/22/2222',
        Order: 'aaaaaa',
        OrderDesc: 'gmkld dflkgm ;lkdsmg;lkdsf kldfsmg;ldsfm ;lkgmfds;lk mfds;lkmg;lkdsfm ;lkdsfm;lkgmdsflkgmfsd klmg;l',
        StaffRevice: 'Nguyễn Hoàng Hà',
        Note: 'xzzzzzzz',
    },
    {
        ID: 2,
        Point: "10",
        Money: "123,123,123",
        Method: 'cho',
        StaffCreate: 'Nguyễn Hoàng Hà',
        Type: '1',
        When: '22/22/2222',
        Order: 'aaaaaa',
        OrderDesc: 'nnnnn',
        StaffRevice: 'Nguyễn Hoàng Hà',
        Note: 'xzzzzzzz',
    }
]

function RpTransaction() {
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
                        <h4 className="mb-0">THU CHI</h4>
                        <div className='d-flex align-items-center filter-button' onClick={() => handleShowBar()}>
                            <img src={SearchIcon} />
                            
                        </div>
                    </div>
                </div>
            </div>
            <NavBars />
            <div className='row customer-overview'>
                <div className='col-md-6 col-xl-4 mb-20'>
                    <div className='card'>
                        <div className='card-body'>
                            <div>
                                <h4 className="mb-1 mt-1"><span data-plugin="counterup">50,000</span> </h4>
                                <p className="text-muted mb-0">Đầu kì</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-xl-4 mb-20'>
                    <div className='card'>
                        <div className='card-body'>
                            <div>
                                <h4 className="mb-1 mt-1"><span data-plugin="counterup">250,000</span> </h4>
                                <p className="text-muted mb-0">Trong kì</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-xl-4 mb-20'>
                    <div className='card'>
                        <div className='card-body'>
                            <div>
                                <h4 className="mb-1 mt-1"><span data-plugin="counterup">1,000,000,000</span> </h4>
                                <p className="text-muted mb-0">Cuối kì</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='customer-detail row mb-20'>
                <div className=' m-0 col-xl-12'>
                    <div className='row m-0  customer-statistical'>
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
                                <h3>Nhân viên tạo</h3>
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
                                <h3>Loại</h3>
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
                                <h3>Khách hàng</h3>
                                <div className='mb-20'>
                                    <Form.Select aria-label="Default select example" className='ffdPNq'>
                                        <option value="1">Tất cả</option>
                                        <option value="1">Nguyễn Hoàng Hà</option>
                                        <option value="1">Nguyễn Hoàng Hà1</option>
                                        <option value="2">Nguyễn Hoàng Hà2</option>
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
                                    dataField: "Point",
                                    text: "ĐIỂM",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "ĐIỂM" },
                                    formatter: (cell, row) => (
                                        <div>{row.Point}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "Money",
                                    text: "SỐ TIỀN",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "SỐ TIỀN" },
                                    formatter: (cell, row) => (
                                        <div>{row.Money}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "Method",
                                    text: "Phương thức",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "Phương thức" },
                                    formatter: (cell, row) => (
                                        <div>{row.Method}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },


                                {
                                    dataField: "StaffCreate",
                                    text: "NHÂN VIÊN TẠO",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "NHÂN VIÊN TẠO" },
                                    formatter: (cell, row) => (
                                        <div>{row.StaffCreate}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "Type",
                                    text: "LOẠI",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "LOẠI" },
                                    formatter: (cell, row) => (
                                        <div>{row.Type}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "When",
                                    text: "KHI NÀO",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "KHI NÀO" },
                                    formatter: (cell, row) => (
                                        <div>{row.When}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "Order",
                                    text: "ĐH NÀO",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "THANH TOÁN" },
                                    formatter: (cell, row) => (
                                        <div>{row.Order}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "OrderDesc",
                                    text: "NỘI DUNG ĐH",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "NỘI DUNG ĐH" },
                                    formatter: (cell, row) => (
                                        <div>{row.OrderDesc}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "StaffRevice",
                                    text: "NHÂN VIÊN NHẬN",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "NHÂN VIÊN NHẬN" },
                                    formatter: (cell, row) => (
                                        <div>{row.StaffRevice}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "Note",
                                    text: "GHI CHÚ",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "GHI CHÚ" },
                                    formatter: (cell, row) => (
                                        <div>{row.Note}</div>
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

export default RpTransaction
