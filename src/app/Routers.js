import React from 'react'
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom"
import RpDay from '../pages/rp-day'
import RpCustomer from '../pages/rp-customer'
import RpSell from '../pages/rp-sell'
import RpService from '../pages/rp-service'
import RpTransaction from '../pages/rp-transaction'
import RpInventory from '../pages/rp-inventory'
import RpStaff from'../pages/rp-staff'
import RpFund from'../pages/rp-fund'
import RpDebt from'../pages/rp-debt'
import RpCusCare from'../pages/rp-customer_care'
import RpDifferent from'../pages/rp-another'

export default function Routers() {
    return (
        <Routes>
            <Route index element={<RpDay />} />
            <Route path='/bao-cao-ngay' element={<RpDay />} />
            <Route path='/bao-cao-khach-hang' element={<RpCustomer />} />
            <Route path='/ban-hang' element={<RpSell />} />
            <Route path='/dich-vu' element={<RpService />} />
            <Route path='/thu-chi' element={<RpTransaction />} />
            <Route path='/ton-kho' element={<RpInventory />} />
            <Route path='/nhan-vien' element={<RpStaff />} />
            <Route path='/so-quy' element={<RpFund />} />
            <Route path='/cong-no' element={<RpDebt />} />
            <Route path='/cham-soc-khach-hang' element={<RpCusCare />} />
            <Route path='/bao-cao-khac' element={<RpDifferent />} />
            <Route path='/app23/index.html' element={<Navigate to="/bao-cao-ngay" replace />} />
        </Routes>
    )
}
