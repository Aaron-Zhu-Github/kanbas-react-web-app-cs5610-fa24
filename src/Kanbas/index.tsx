// Part of the code of this assignment come from Professor Jose Annunziato's lecture code

import Dashboard from './Dashboard'
import KanbasNavigation from './Navigation'
import { Route, Routes, Navigate } from 'react-router'
import Courses from './Courses'
import Account from './Account'
// import Calendar from "./Calendar";
// import Inbox from "./Inbox";
import './styles.css'

import store from './store'
import { Provider } from 'react-redux'
import ProtectedRoute from './Account/ProtectedRoute'

export default function Kanbas() {
  // const { courses } = useSelector(
  //   (state: any) => state.coursesReducer
  // )
  return (
    <Provider store={store}>
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
            {/* <Route path="/Dashboard" element={<ProtectedRoute>
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}/> </ProtectedRoute>
                    } /> */}
            <Route
              path='/Dashboard'
              element={
                <ProtectedRoute>
                  <Dashboard />{' '}
                </ProtectedRoute>
              }
            />
            <Route
              path='/Courses/:cid/*'
              element={
                <ProtectedRoute>
                  <Courses courses={[]} />
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
    </Provider>
  )
}
