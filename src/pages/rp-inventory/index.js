import React from 'react'
import { useState } from 'react';
import BaseTablesCustom from '../../components/Table/BaseTablesCustom';
import NavBars from '../../components/Navbar';
import { Button, Form } from 'react-bootstrap';
import DateRange from '../../components/Datepicker/DatePicker';
import SearchIcon from '../../images/search.svg';

const data_Table = [
    {
        Code: 'zxc',
        Product: "tay long",
        Inventory: "zzz zzz bbb vvv nnnn",
        Realative: 'cho',
        Date: '22/22/2222',
        ExportImport: 'zvcvzxcvcxzvxz',
        Type: '1',
        Quantity: '909999',
        Note: 'aaaaaa',
    },
    {
        Code: 'bbb',
        Product: "tay long",
        Inventory: "zzz zzz bbb vvv nnnn",
        Realative: 'cho',
        Date: '22/22/2222',
        ExportImport: 'zvcvzxcvcxzvxz',
        Type: '1',
        Quantity: '909999',
        Note: 'aaaaaa',
    }
]

function RpInventory() {
    const [filters, setFilters] = useState({
        Pi: 1,
        Ps: 10
    });
    const [PageTotal, setPageTotal] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isBarShow, setIsBarShow] = useState(false)

    function handleShowBar() {
        setIsBarShow(!isBarShow)
    }
    return (
        <div className='customer' id='customer'>
            <div className="row mb-20 report-title">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0">BÁO CÁO TỒN KHO</h4>
                        <div className='d-flex align-items-center filter-button' onClick={() => handleShowBar()}>
                            <img src={SearchIcon} />
                            
                        </div>
                    </div>
                </div>
            </div>
            <NavBars />
            {/* <div className='row customer-overview'>
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
            </div> */}
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
                                <h3>Cơ sở</h3>
                                <div className='mb-20'>
                                    <Form.Select aria-label="Default select example" className='ffdPNq'>
                                        <option value="1">Tất cả</option>
                                        <option value="1">Hà Nội</option>
                                        <option value="1">HCM</option>
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
                                    dataField: "Code",
                                    text: "MÃ",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "MÃ" },
                                    formatter: (cell, row) => (
                                        <div>{row.Code}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "Product",
                                    text: "SẢN PHẨM",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "SẢN PHẨM" },
                                    formatter: (cell, row) => (
                                        <div>{row.Product}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "Inventory",
                                    text: "TỒN PM",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "TỒN PM" },
                                    formatter: (cell, row) => (
                                        <div>{row.Inventory}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "Realative",
                                    text: "THỰC TẾ",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "THỰC TẾ" },
                                    formatter: (cell, row) => (
                                        <div>{row.Realative}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },


                                {
                                    dataField: "Date",
                                    text: "NGÀY",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "NGÀY" },
                                    formatter: (cell, row) => (
                                        <div>{row.Date}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "ExportImport",
                                    text: "XUẤT / NHẬP",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "XUẤT / NHẬP" },
                                    formatter: (cell, row) => (
                                        <div>{row.ExportImport}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "Quantity",
                                    text: "SL",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "SL" },
                                    formatter: (cell, row) => (
                                        <div>{row.Quantity}</div>
                                    ),
                                    headerStyle: () => {
                                        return { minWidth: "100%", width: "115px" };
                                    },
                                },
                                {
                                    dataField: "Note",
                                    text: "Ghi chú",
                                    //headerAlign: "center",
                                    //style: { textAlign: "center" },
                                    attrs: { "data-title": "Ghi chú" },
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

export default RpInventory
