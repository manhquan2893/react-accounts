import React from 'react'
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import './style.scss'
import { toast } from 'react-toastify';

const { Search } = Input;


function UserSearchPage() {
  const history = useHistory()
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
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    </div>
  )
}

export default UserSearchPage
