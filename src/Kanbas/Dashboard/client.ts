import axios from 'axios'

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER
export const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollments`

export const getUserEnrollment = async (userId: String) => {
  const { data } = await axios.get(`${ENROLLMENT_API}/${userId}`)
  console.log(data)
  return data
}

export const addEnrollment = async (
  userId: string,
  courseId: string
) => {
  await axios.post(`${ENROLLMENT_API}/${userId}/${courseId}`)
}

export const deleteEnrollment = async (
  userId: string,
  courseId: string
) => {
  await axios.delete(`${ENROLLMENT_API}/${userId}/${courseId}`)
}
