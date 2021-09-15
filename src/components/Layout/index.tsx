import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from 'antd'
import './style.scss'

function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className="layout">
      <div className="page-header">
        Account management
      </div>
      <div className="main">
        <div className="sidebar">
          <div className="link-to-user">
          <Link to="/">users</Link>
          </div>
        </div>
        <div className="main-content">
        {children}
        </div>
      </div>
    </div>
  )
}

export default Layout

