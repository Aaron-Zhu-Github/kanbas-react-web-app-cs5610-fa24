// import { createSlice } from "@reduxjs/toolkit";
// import { assignments as initialAssignments } from "../../Database";

// const initialState = {
//   assignments: initialAssignments,
// };

// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload }) => {
//       const newAssignment = {
//         _id: new Date().getTime().toString(),
//         ...payload,
//       };
//       state.assignments.push(newAssignment);
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (assignment) => assignment._id !== assignmentId
//       );
//     },
//     editAssignment: (state, { payload }) => {
//       const index = state.assignments.findIndex((a) => a._id === payload._id);
//       if (index >= 0) state.assignments[index] = payload;
//     },
//   },
// });

// export const { addAssignment, deleteAssignment, editAssignment } = assignmentsSlice.actions;
// export default assignmentsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'
import { assignments } from '../../Database'

const initialState = {
  assignments: assignments
}

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
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
        (assignment) => assignment._id !== assignmentId
      )
    },
    updateAssignment: (state, { payload: assignment }) => {
      console.log('save', {
        assignment
      })
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      )
    }
  }
})

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions
export default assignmentsSlice.reducer
