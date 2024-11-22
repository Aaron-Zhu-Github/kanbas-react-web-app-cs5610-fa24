import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  enrollments: []
}

const enrollmentsSlice = createSlice({
  name: 'enrollments',
  initialState: initialState,
  reducers: {
    setEnrollment: (state, action) => {
      state.enrollments = action.payload
    },
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
        (enrollment: any) =>
          enrollment.user !== action.payload.userId ||
          enrollment.course !== action.payload.courseId
      )
    }
  }
})

export const { setEnrollment, enrollCourse, unenrollCourse } =
  enrollmentsSlice.actions
export default enrollmentsSlice.reducer
