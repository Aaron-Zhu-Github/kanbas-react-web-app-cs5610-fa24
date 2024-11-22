// Part of the code of this assignment come from Professor Jose Annunziato's lecture code

import Dashboard from './Dashboard'
import KanbasNavigation from './Navigation'
// import { useState } from "react";
import { Route, Routes, Navigate } from 'react-router'
import Courses from './Courses'
import Account from './Account'
// import Calendar from "./Calendar";
// import Inbox from "./Inbox";
import './styles.css'
import * as userClient from './Account/client'


// import store from './store'
// import { Provider } from 'react-redux'
import ProtectedRoute from './Account/ProtectedRoute'
import Session from './Account/Session'
// import * as db from "./Database";

export default function Kanbas() {

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
