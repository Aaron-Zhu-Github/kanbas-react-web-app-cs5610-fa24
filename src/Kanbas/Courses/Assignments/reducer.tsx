import { createSlice } from '@reduxjs/toolkit'
const initialState: any = {
  assignments: []
}

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    setAssignments: (state, { payload: assignments }) => {
      state.assignments = assignments
    },
    addAssignment: (state, { payload: assignment }) => {
      console.log('add', {
        assignment
      })
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        available: assignment.available,
        due: assignment.due,
        until: assignment.until,
        point: assignment.point
      }
      state.assignments = [...state.assignments, newAssignment]
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId
      )
    },
    updateAssignment: (state, { payload: assignment }) => {
      console.log('save', {
        assignment
      })
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      )
    }
  }
})

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment
} = assignmentsSlice.actions
export default assignmentsSlice.reducer
