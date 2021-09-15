import axios from "axios"
const BASE_URL = 'https://sample-accounts-api.herokuapp.com'

export const getAccountsApi = (userId: String) => {
  return axios.get(`${BASE_URL}/users/${userId}/accounts`)
}