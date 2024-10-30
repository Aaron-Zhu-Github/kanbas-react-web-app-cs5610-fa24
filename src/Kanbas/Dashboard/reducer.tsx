import { createSlice } from "@reduxjs/toolkit";
import enrollmentsData from "../Database/enrollments.json"; 

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState: enrollmentsData,
  reducers: {
    enrollCourse: (state, action) => {
      const newEnrollment = {
        _id: String(Date.now()), 
        user: action.payload.userId,
        course: action.payload.courseId,
      };
      state.push(newEnrollment);
    },
    unenrollCourse: (state, action) => {
      const index = state.findIndex(
        (enrollment) =>
          enrollment.user === action.payload.userId &&
          enrollment.course === action.payload.courseId
      );
      if (index !== -1) state.splice(index, 1);
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
