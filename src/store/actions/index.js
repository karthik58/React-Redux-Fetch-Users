import { GET_USERS, USERS_ERROR } from '../types'

import axios from 'axios'

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://reqres.in/api/users`)
    dispatch({
      type: GET_USERS,
      payload: res.data.data,
    })
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    })
  }
}
