import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAction } from '../../redux/actions/auth'
import './style.scss'

function Layout({children}:{children: React.ReactNode}) {
  const [isShowProfileMenu, setisShowProfileMenu] = useState(false)
  const { t } = useTranslation()
  return (
    <div className="layout">
      <div className="page-header">
        <div className="head">{t("Account management")}</div>
        <div className="user-profile-wrap">
          <div className="user-profile" onClick={() => setisShowProfileMenu(!isShowProfileMenu)}>
            <div className="avatar">R</div>
            <div className="text">{t("Hello")}, Roman</div>
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
          <Link to="/">{t("users")}</Link>
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

  const { t, i18n } = useTranslation()
  const changeLanguageEn = () => {
    i18n.changeLanguage("en")
  }
  const changeLanguageZh = () => {
    i18n.changeLanguage("zh")
  }
  return (
    <div className="user-profile-menu" id="user-profile-menu">
      <div className="item" onClick={changeLanguageEn}>
        {t("English")}
      </div>
      <div className="item" onClick={changeLanguageZh}>
        {t("Chinese")}
      </div>
      <div className="item" onClick={onLogout}>
        {t("Logout")}
      </div>
    </div>
  )
}

export default Layout

