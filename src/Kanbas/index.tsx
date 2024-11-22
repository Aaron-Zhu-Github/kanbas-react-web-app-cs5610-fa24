// Part of the code of this assignment come from Professor Jose Annunziato's lecture code

import Dashboard from './Dashboard'
import KanbasNavigation from './Navigation'
import { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router'
import Courses from './Courses'
import Account from './Account'
// import Calendar from "./Calendar";
// import Inbox from "./Inbox";
import './styles.css'
// import * as userClient from './Account/client'

// import store from './store'
// import { Provider } from 'react-redux'
import ProtectedRoute from './Account/ProtectedRoute'
import Session from './Account/Session'
import { useDispatch, useSelector } from 'react-redux'
import * as courseClient from './Courses/client'
import { setCourses } from './store/coursesReducer'
import * as enrollmentClient from './Dashboard/client'
import { setEnrollment } from './Dashboard/reducer'

export default function Kanbas() {
  const { currentUser } = useSelector(
    (state: any) => state.accountReducer
  )
  const dispatch = useDispatch()
  const fetchCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses()
      dispatch(setCourses(courses))
    } catch (error) {
      console.error(error)
    }
  }
  const getUserEnrollments = async () => {
    const enrollments = await enrollmentClient.getUserEnrollment(
      currentUser?._id
    )
    dispatch(setEnrollment(enrollments))
  }
  useEffect(() => {
    fetchCourses()
    getUserEnrollments()
  }, [fetchCourses, getUserEnrollments])

  return (
    // <Provider store={store}>
    <Session>
      <div id='wd-kanbas'>
        <KanbasNavigation />
        <div className='wd-main-content-offset p-3'>
          <Routes>
            <Route
              path='/'
              element={<Navigate to='Account' />}
            />
            <Route
              path='/Account/*'
              element={<Account />}
            />
            <Route
              path='/Dashboard'
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path='/Courses/:cid/*'
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              }
            />
            <Route
              path='/Calendar'
              element={<h1>Calendar</h1>}
            />
            <Route
              path='/Inbox'
              element={<h1>Inbox</h1>}
            />
          </Routes>
        </div>
      </div>
    </Session>
    // </Provider>
  )
}
