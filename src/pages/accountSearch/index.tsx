import React, { useEffect, useState } from 'react'
import {Table} from 'antd'
import { useParams } from 'react-router-dom';
import { getAccountsApi } from '../../apis';
import { AccountType } from '../../types/account';

function AccountSearchPage() {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Account',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
    }
  ];

  let { userId } = useParams() as {userId: String};

  const [accounts, setaccounts] = useState<AccountType[]>([])

  const getAccount = async () => {
    const accountRes = await getAccountsApi(userId)
    // @ts-ignore
    const accounts : AccountType[] = accountRes.data.map((item)=>{
      let newItem = {}
      // @ts-ignore
      newItem.id = item.attributes.id
      // @ts-ignore
      newItem.user_id = item.attributes.user_id
      // @ts-ignore
      newItem.name = item.attributes.name
      // @ts-ignore
      newItem.balance = item.attributes.balance
      return newItem
    })
    setaccounts(accounts)
  }
  useEffect(()=>{
    getAccount()
  }
  ,[])

  return (
    <div className="account-search-page">
      <Table dataSource={accounts} columns={columns} />;
    </div>
  )
}

export default AccountSearchPage
