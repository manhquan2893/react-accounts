import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAction } from '../../redux/actions/auth'
import './style.scss'

function Layout({children}:{children: React.ReactNode}) {
  const [isShowProfileMenu, setisShowProfileMenu] = useState(false)
  return (
    <div className="layout">
      <div className="page-header">
        <div>Account management</div>
        <div className="user-profile-wrap">
          <div className="user-profile" onClick={() => setisShowProfileMenu(!isShowProfileMenu)}>
            <div className="avatar">Q</div>
            <div className="text">Hello, Quan</div>
            <div className="icon"><i className="fas fa-chevron-down"></i></div>
          </div>
          {
            isShowProfileMenu && (
              <UserProfileMenu onCancel={() => setisShowProfileMenu(false)} />
            )
          }
        </div>
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

function UserProfileMenu(
  { onCancel }: { 
    onCancel: () => void
  }) {
  const clickEvent = (e: any) => {
    const selectMenuEl = document.getElementById('user-profile-menu')
    if (selectMenuEl && !selectMenuEl.contains(e.target)) {
      onCancel();
    }
  }
  useEffect(() => {
    document.addEventListener('click', clickEvent)
    return () => {
      document.removeEventListener('click', clickEvent)
    }
  }, [])

  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(logoutAction())
  }
  return (
    <div className="user-profile-menu" id="user-profile-menu">
      <div className="logout" onClick={onLogout}>
      Logout
      </div>
    </div>
  )
}

export default Layout

