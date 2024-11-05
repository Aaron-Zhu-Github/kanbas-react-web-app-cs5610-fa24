import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from '../Database'

const initialState = { enrollments }

const enrollmentsSlice = createSlice({
  name: 'enrollments',
  initialState: initialState,
  reducers: {
    enrollCourse: (state, action) => {
      const newEnrollment = {
        _id: String(Date.now()),
        user: action.payload.userId,
        course: action.payload.courseId
      }
      state.enrollments = [...state.enrollments, newEnrollment]
    },
    unenrollCourse: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          enrollment.user !== action.payload.userId ||
          enrollment.course !== action.payload.courseId
      )
    }
  }
})

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
