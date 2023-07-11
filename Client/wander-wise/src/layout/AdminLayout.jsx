import React from 'react'
import AdminNav from '../components/AdminNav'

export default function AdminLayout({ children }) {
    return (
        <div>
            <AdminNav />
            <div className='body-page'>{children}</div>
        </div>
    )
}
