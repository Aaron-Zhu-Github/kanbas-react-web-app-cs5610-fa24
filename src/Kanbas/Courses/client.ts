import axios from 'axios'

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER
const COURSES_API = `${REMOTE_SERVER}/api/courses`
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API)
  return data
}

export const deleteCourse = async (id: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${id}`)
  return data
}

export const updateCourse = async (course: any) => {
  const { data } = await axios.put(
    `${COURSES_API}/${course._id}`,
    course
  )
  return data
}

export const createModuleForCourse = async (
  courseId: string,
  module: any
) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  )
  return response.data
}

export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(
    `${COURSES_API}/${courseId}/modules`
  )
  return response.data
}

// Assignment
export const fetchAssignments = async (courseId: string) => {
  const response = await axios.get(
    `${COURSES_API}/${courseId}/assignments`
  )
  return response.data
}

export const createAssignment = async (
  courseId: string,
  assignment: any
) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  )
  return response.data
}

export const updateAssignment = async (assignment: any) => {
  console.log(assignment)
  const { data } = await axios.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  )
  return data
}

export const deleteAssignment = async (assignmentId: any) => {
  const { data } = await axios.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  )
  return data
}
