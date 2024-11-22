import axios from 'axios'

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER
export const USERS_API = `${REMOTE_SERVER}/api/users`

export const updateUser = async (userId: string, user: any) => {
  const { data } = await axios.put(
    `${USERS_API}/edit/${userId}`,
    user
  )
  return data
}

export const createUser = async (user: any) => {
  const { data } = await axios.post(`${USERS_API}`, user)
  return data
}

export const deleteUser = async (userId: any) => {
  const { data } = await axios.delete(`${USERS_API}/${userId}`)
  return data
}
