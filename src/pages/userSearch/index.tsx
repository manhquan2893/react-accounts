import React from 'react'
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import './style.scss'
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const { Search } = Input;


function UserSearchPage() {
  const history = useHistory()
  const { t } = useTranslation()
  const onSearch = (userId: String) => {
    if(!userId){
      toast.warn('Please enter userId')
      return
    }
    history.push(`/accounts/${userId}`);
  }
  return (
    <div className="user-search-page">
      <Search
      placeholder={t("Enter user id")}
      enterButton={t("Search")}
      size="large"
      onSearch={onSearch}
    />
    </div>
  )
}

export default UserSearchPage
