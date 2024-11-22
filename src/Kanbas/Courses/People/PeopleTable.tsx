import React, { useEffect, useState, useCallback } from 'react'
import { FaEdit, FaPlus, FaTrash, FaUserCircle } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

import * as userClient from '../../Account/client'
import * as enrollmentClient from '../../Dashboard/client'
// import { enrollCourse, unenrollCourse } from '../../Dashboard/reducer'
import { useSelector } from 'react-redux'

import * as client from './client'

export default function PeopleTable() {
  const { cid } = useParams()
  console.log({ cid })
  const { currentUser } = useSelector(
    (state: any) => state.accountReducer
  )
  const isFaculty = currentUser?.role === 'FACULTY'

  const [users, setUsers] = useState([])

  // const dispatch = useDispatch()

  const getCourseUsers = useCallback(async () => {
    const list = await userClient.findCourseUser(cid as string)
    setUsers(list)
  }, [cid])

  useEffect(() => {
    getCourseUsers()
  }, [cid, getCourseUsers])

  const [operationId, setOperationId] = useState<string | undefined>()

  const [user, setUser] = useState({
    firstName: '',
    lastName: ' ',
    section: '',
    role: '',
    loginId: ''
  })

  const toDeleteUser = async () => {
    if (operationId) {
      await client.deleteUser(operationId)
      setOperationId(undefined)
      getCourseUsers()
    }
  }
  const close = () => {
    setUser({
      firstName: '',
      lastName: ' ',
      section: '',
      role: '',
      loginId: ''
    })
    setOperationId(undefined)
  }
  const save = async () => {
    if (operationId) {
      await client.updateUser(operationId as string, user)
    } else {
      const newUser = await client.createUser(user)
      console.log({ newUser })
      await enrollmentClient.addEnrollment(
        newUser._id as string,
        cid as string
      )
    }
    close()
    getCourseUsers()
  }

  return (
    <div id='wd-people-table'>
      {isFaculty && (
        <div
          id='wd-modules-controls'
          className='text-nowrap'
        >
          <button
            id='wd-add-module-btn'
            className='btn btn-lg btn-danger me-1 float-end'
            data-bs-toggle='modal'
            data-bs-target='#wd-add-module-dialog'
            onClick={close}
          >
            <FaPlus
              className='position-relative me-2'
              style={{ bottom: '1px' }}
            />
            User
          </button>

          <div
            id='wd-add-module-dialog'
            className='modal fade'
            data-bs-backdrop='static'
            data-bs-keyboard='false'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h1
                    className='modal-title fs-5'
                    id='staticBackdropLabel'
                  >
                    {operationId ? 'Update ' : 'Add '}User
                  </h1>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    onClick={() => {
                      setOperationId(undefined)
                      setUser({
                        firstName: '',
                        lastName: ' ',
                        section: '',
                        role: '',
                        loginId: ''
                      })
                    }}
                  ></button>
                </div>
                <div className='modal-body'>
                  <div className='mb-3 d-flex align-items-center'>
                    <label
                      htmlFor='firstName'
                      className='me-2'
                    >
                      firstName
                    </label>
                    <input
                      id='firstName'
                      name='firstName'
                      type='text'
                      disabled={!isFaculty}
                      className='form-control w-auto'
                      value={user.firstName}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          firstName: e.target.value
                        })
                      }
                    />
                  </div>
                  <div className='mb-3 d-flex align-items-center'>
                    <label
                      htmlFor='lastName'
                      className='me-2'
                    >
                      lastName
                    </label>
                    <input
                      id='lastName'
                      name='lastName'
                      type='text'
                      disabled={!isFaculty}
                      className='form-control w-auto'
                      value={user.lastName}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          lastName: e.target.value
                        })
                      }
                    />
                  </div>
                  <div className='mb-3 d-flex align-items-center'>
                    <label
                      htmlFor='loginID'
                      className='me-2'
                    >
                      loginID
                    </label>
                    <input
                      id='loginID'
                      name='loginID'
                      type='text'
                      disabled={!isFaculty}
                      className='form-control w-auto'
                      value={user.loginId}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          loginId: e.target.value
                        })
                      }
                    />
                  </div>
                  <div className='mb-3 d-flex align-items-center'>
                    <label
                      htmlFor='section'
                      className='me-2'
                    >
                      Section
                    </label>
                    <input
                      id='section'
                      name='section'
                      type='text'
                      disabled={!isFaculty}
                      className='form-control w-auto'
                      value={user.section}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          section: e.target.value
                        })
                      }
                    />
                  </div>
                  <div className='mb-3 d-flex align-items-center'>
                    <label
                      htmlFor='role'
                      className='me-2'
                    >
                      Role
                    </label>
                    <select
                      value={user.role}
                      onChange={(e) =>
                        setUser({ ...user, role: e.target.value })
                      }
                      className='form-control mb-2'
                      id='role'
                    >
                      <option
                        selected
                        value='USER'
                      >
                        USER
                      </option>
                      <option value='TA'>TA</option>
                      <option value='ADMIN'>ADMIN</option>
                      <option value='FACULTY'>FACULTY</option>
                      <option value='STUDENT'>STUDENT</option>
                    </select>
                  </div>
                </div>

                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                    onClick={() => {
                      setOperationId(undefined)
                      setUser({
                        firstName: '',
                        lastName: ' ',
                        section: '',
                        role: '',
                        loginId: ''
                      })
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type='button'
                    data-bs-dismiss='modal'
                    className='btn btn-danger'
                    onClick={save}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
            {isFaculty && <th>Operation</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className='wd-full-name text-nowrap'>
                <FaUserCircle className='me-2 fs-1 text-secondary' />
                <span className='wd-first-name text-danger'>
                  {user.firstName}
                </span>
                <span className='wd-last-name text-danger'>
                  {user.lastName}
                </span>
              </td>
              <td className='wd-login-id'>{user.loginId}</td>
              <td className='wd-section'>{user.section}</td>
              <td className='wd-role'>{user.role}</td>
              <td className='wd-last-activity'>
                {user.lastActivity}
              </td>
              <td className='wd-total-activity'>
                {user.totalActivity}
              </td>
              {isFaculty && (
                <td>
                  <FaTrash
                    className='text-danger me-2'
                    data-bs-toggle='modal'
                    data-bs-target='#modal'
                    onClick={() => setOperationId(user._id)}
                  />
                  <FaEdit
                    className='text-danger me-2'
                    data-bs-toggle='modal'
                    data-bs-target='#wd-add-module-dialog'
                    onClick={() => {
                      setOperationId(user._id)
                      setUser(user)
                    }}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className='modal fade '
        id='modal'
        tabIndex={-1}
        aria-labelledby='modal'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1
                className='modal-title fs-5'
                id='modalLabel'
              >
                Alert
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              Are sure you want to remove this one?
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => setOperationId(undefined)}
                data-bs-dismiss='modal'
              >
                NO
              </button>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-dismiss='modal'
                onClick={toDeleteUser}
              >
                YES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
