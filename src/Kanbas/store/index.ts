import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import accountReducer from "../Account/reducer";
import assignmentsReducer from "../Courses/Assignments/reducer"
import enrollmentsReducer from "../Dashboard/reducer";
import coursesReducer from './coursesReducer'
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer,
    coursesReducer
  }
})
export default store;