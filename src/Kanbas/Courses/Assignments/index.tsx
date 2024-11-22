import { BsGripVertical } from 'react-icons/bs'
import { IoEllipsisVertical } from 'react-icons/io5'
import { FaTrash } from 'react-icons/fa'

import { PiNotebookBold } from 'react-icons/pi'
import { FaPlus } from 'react-icons/fa6'
import { SlMagnifier } from 'react-icons/sl'
import { GoTriangleDown } from 'react-icons/go'

import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import GreenCheckmark from './GreenCheckmark'
import { useSelector, useDispatch } from 'react-redux'
import { deleteAssignment, setAssignments } from './reducer'
import * as client from '../client'
// import HomeworkControlButtons from './HomeworkControlButtons'

export default function Assignments() {
  const { cid } = useParams()
  const dispatch = useDispatch()

  const { assignments } = useSelector(
    (state: any) => state.assignmentsReducer
  )
  const getAssignments = useCallback(async () => {
    const assignments = await client.fetchAssignments(cid as string)
    dispatch(setAssignments(assignments))
  }, [cid, dispatch])

  useEffect(() => {
    getAssignments()
  }, [getAssignments])

  const [deleteId, setDeleteId] = useState(null)
  

  const { currentUser } = useSelector(
    (state: any) => state.accountReducer
  )

  const isFaculty = currentUser?.role === 'FACULTY'
  const courseAssignments = useSelector((state: any) =>
    assignments.filter((a: any) => a.course === cid)
  )
  const toDeleteAssignment = async () => {
    if (deleteId) {
      console.log(deleteId)
      await client.deleteAssignment(deleteId)
      dispatch(deleteAssignment(deleteId))
      setDeleteId(null)
    }
  }

  return (
    <div>
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
              Are sure you want to remove the assignment?
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => setDeleteId(null)}
                data-bs-dismiss='modal'
              >
                NO
              </button>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-dismiss='modal'
                onClick={toDeleteAssignment}
              >
                YES
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id='wd-assignments-controls'
        className='d-flex justify-content-between mb-3'
      >
        <div className='input-group w-50'>
          <span className='input-group-text bg-white border-end-0'>
            <SlMagnifier />
          </span>
          <input
            id='wd-search-assignment'
            className='form-control border-start-0'
            placeholder='Search'
          />
        </div>
        {isFaculty && (
          <div className='d-flex'>
            <Link
              className='btn btn-danger me-2 d-flex align-items-center'
              to={`/Kanbas/Courses/${cid}/Assignments/new`}
            >
              <FaPlus className='me-1' />
              Assignment
            </Link>
            <button className='btn btn-secondary d-flex align-items-center'>
              <FaPlus className='me-1' />
              Group
            </button>
          </div>
        )}
      </div>

      <br />

      <ul className='list-group rounded-0'>
        <li className='list-group-item p-0 mb-5'>
          <div className='p-3 d-flex justify-content-between align-items-center bg-light'>
            <div className='d-flex align-items-center'>
              <BsGripVertical className='me-2 fs-3' />
              <GoTriangleDown />
              <strong>ASSIGNMENTS</strong>
            </div>
            <div className='d-flex align-items-center'>
              <div
                style={{
                  border: '1px solid gray',
                  borderRadius: '50px',
                  padding: '5px 15px'
                }}
                className='me-2'
              >
                40% of Total
              </div>
              {isFaculty && <FaPlus className='fs-4' />}
              <IoEllipsisVertical className='fs-4 ms-2' />
            </div>
          </div>

          <ul className='list-group rounded-0'>
            {courseAssignments.map((assignment: any) => (
              <li
                key={assignment._id}
                className='list-group-item wd-assignment p-3 d-flex justify-content-between align-items-center'
                style={{ borderLeft: '5px solid #28a745' }}
              >
                <div className='d-flex align-items-center'>
                  <BsGripVertical className='me-2 fs-3' />
                  <PiNotebookBold className='me-2 fs-3 text-success' />
                  <div>
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      <h6>
                        <strong>{assignment.title}</strong>
                      </h6>
                    </Link>
                    <span className='text-danger'>
                      Multiple Modules
                    </span>{' '}
                    |<strong> Not available until </strong>{' '}
                    {assignment.available} | <br />
                    <strong> Due </strong> {assignment.due} |{' '}
                    {assignment.point} pts
                  </div>
                </div>
                <div className='float-end'>
                  {isFaculty && (
                    <FaTrash
                      className='text-danger me-2'
                      data-bs-toggle='modal'
                      data-bs-target='#modal'
                      onClick={() => setDeleteId(assignment._id)}
                    />
                  )}

                  <GreenCheckmark />
                  <IoEllipsisVertical className='fs-4' />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}
