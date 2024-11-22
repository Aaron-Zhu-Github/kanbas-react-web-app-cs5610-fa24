import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  addAssignment,
  setAssignments,
  updateAssignment
} from './reducer'
import * as coursesClient from '../client'

export default function AssignmentEditor() {
  const { cid, aid } = useParams()
  const navigator = useNavigate()
  const isNewAssignment = aid === 'new'

  const { assignments } = useSelector(
    (state: any) => state.assignmentsReducer
  )
  const getAssignments = async () => {
    const assignments = await coursesClient.fetchAssignments(
      cid as string
    )
    console.log(assignments)
    dispatch(setAssignments(assignments))
  }
  useEffect(() => {
    getAssignments()
  }, [cid])
  useEffect(() => {
    setAssignment(
      !isNewAssignment
        ? assignments.find(
            (assignment: any) => assignment._id === aid
          )
        : {
            title: '',
            course: cid,
            description: '',
            available: '',
            due: '',
            until: '',
            point: ''
          }
    )
  }, [assignments])
  const [assignment, setAssignment] = useState<any>(
    !isNewAssignment
      ? assignments.find((assignment: any) => assignment._id === aid)
      : {
          title: '',
          course: cid,
          description: '',
          available: '',
          due: '',
          until: '',
          point: ''
        }
  )

  const { currentUser } = useSelector(
    (state: any) => state.accountReducer
  )

  const isFaculty = currentUser?.role === 'FACULTY'

  const dispatch = useDispatch()

  const save = async () => {
    console.log(assignment)

    if (isNewAssignment) {
      await coursesClient.createAssignment(cid as string, assignment)
    } else {
      await coursesClient.updateAssignment(assignment)
    }
    const action = isNewAssignment ? addAssignment : updateAssignment
    dispatch(action(assignment))
    navigator(`/Kanbas/Courses/${cid}/Assignments`)
  }

  if (!isNewAssignment && !assignment) {
    return (
      <div>
        Assignment is not found
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className='btn btn-secondary me-2'
        >
          Cancel
        </Link>
      </div>
    )
  }

  return (
    <div
      id='wd-assignments-editor'
      className='p-4 border rounded'
    >
      <label htmlFor='wd-name'>Assignment Name</label>
      <input
        id='wd-name'
        className='form-control mb-4'
        value={assignment.title}
        disabled={!isFaculty}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />

      <label
        htmlFor='wd-description'
        className='mb-2'
      >
        Assignment Description
      </label>
      <textarea
        id='wd-description'
        name='description'
        className='form-control mb-3'
        rows={6}
        disabled={!isFaculty}
        value={assignment.description}
        // onChange={handleChange}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            description: e.target.value
          })
        }
      />

      <div className='mb-3 d-flex align-items-center'>
        <label
          htmlFor='wd-points'
          className='me-2'
        >
          Points
        </label>
        <input
          id='wd-points'
          name='point'
          type='number'
          disabled={!isFaculty}
          className='form-control w-auto'
          value={assignment.point}
          // onChange={handleChange}
          onChange={(e) =>
            setAssignment({ ...assignment, point: e.target.value })
          }
        />
      </div>

      <div className='mb-3 d-flex align-items-center'>
        <label
          htmlFor='wd-assignment-group'
          className='me-2'
        >
          Assignment Group
        </label>
        <select
          id='wd-assignment-group'
          className='form-select w-auto'
          disabled={!isFaculty}
        >
          <option
            selected
            value='Assignments'
          >
            ASSIGNMENTS
          </option>
          <option value='Quizzes'>QUIZZES</option>
          <option value='Exams'>EXAMS</option>
          <option value='Project'>PROJECT</option>
        </select>
      </div>

      <div className='mb-3 d-flex align-items-center'>
        <label
          htmlFor='wd-display-grade-as'
          className='me-2'
        >
          Display Grade as
        </label>
        <select
          id='wd-display-grade-as'
          className='form-select w-auto'
          disabled={!isFaculty}
        >
          <option
            selected
            value='percentage'
          >
            Percentage
          </option>
          <option value='points'>Points</option>
          <option value='letter-grade'>Letter Grade</option>
        </select>
      </div>

      <div className='mb-3 d-flex align-items-start'>
        <label
          htmlFor='wd-submission-type'
          className='me-2'
        >
          Submission Type
        </label>
        <div className='border p-3 flex-grow-1'>
          <select
            id='wd-submission-type'
            className='form-select mb-3'
            disabled={!isFaculty}
          >
            <option
              selected
              value='online'
            >
              Online
            </option>
            <option value='paper'>Paper</option>
            <option value='no-submission'>No Submission</option>
          </select>

          <label>
            <strong>Online Entry Options</strong>
          </label>
          <br />
          <div className='mb-2'>
            <input
              type='checkbox'
              id='wd-text-entry'
              className='me-1'
              disabled={!isFaculty}
            />
            <label htmlFor='wd-text-entry'>Text Entry</label>
            <br />
            <input
              type='checkbox'
              id='wd-website-url'
              className='me-1'
              checked
            />
            <label htmlFor='wd-website-url'>Website URL</label>
            <br />
            <input
              type='checkbox'
              id='wd-media-recordings'
              className='me-1'
              disabled={!isFaculty}
            />
            <label htmlFor='wd-media-recordings'>
              Media Recordings
            </label>
            <br />
            <input
              type='checkbox'
              id='wd-student-annotation'
              className='me-1'
              disabled={!isFaculty}
            />
            <label htmlFor='wd-student-annotation'>
              Student Annotation
            </label>
            <br />
            <input
              type='checkbox'
              id='wd-file-uploads'
              className='me-1'
              disabled={!isFaculty}
            />
            <label htmlFor='wd-file-uploads'>File Uploads</label>
          </div>
        </div>
      </div>

      <div className='mb-3 d-flex align-items-start'>
        <label
          htmlFor='wd-assign-to'
          className='me-2'
        >
          Assign
        </label>
        <div className='border p-3 flex-grow-1'>
          <label>
            <strong>Assign to</strong>
          </label>
          <br />
          <input
            id='wd-assign-to'
            className='form-control mb-3'
            value=''
            disabled={!isFaculty}
          />

          <div className='col'>
            <label
              htmlFor='wd-due-date'
              className='me-2'
            >
              <strong>Due</strong>
            </label>
            <div className='input-group'>
              <input
                id='wd-due-date'
                name='due'
                type='datetime-local'
                className='form-control'
                disabled={!isFaculty}
                value={assignment.due}
                // onChange={handleChange}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    due: e.target.value
                  })
                }
              />
            </div>
          </div>

          <div className='row mb-2'>
            <div className='col'>
              <label
                htmlFor='wd-available-from'
                className='me-2'
              >
                <strong>Available from</strong>
              </label>
              <div className='input-group'>
                <input
                  id='wd-available-from'
                  name='available'
                  type='datetime-local'
                  className='form-control'
                  value={assignment.available}
                  disabled={!isFaculty}
                  // onChange={handleChange}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      available: e.target.value
                    })
                  }
                />
              </div>
            </div>

            <div className='col'>
              <label
                htmlFor='wd-available-until'
                className='me-2'
              >
                <strong>Until</strong>
              </label>
              <div className='input-group'>
                <input
                  id='wd-available-until'
                  type='datetime-local'
                  className='form-control'
                  value={assignment.until}
                  disabled={!isFaculty}
                  // onChange={handleChange}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      until: e.target.value
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mb-3 d-flex align-items-start">
        <label htmlFor="wd-due-date" className="me-2"><strong>Due</strong></label>
        <input
          id="wd-due-date"
          name="due"
          type="datetime-local"
          className="form-control"
          value={formData.due}
          onChange={handleChange}
        />
      </div> */}
      {isFaculty && (
        <div className='d-flex justify-content-end mt-4'>
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            className='btn btn-secondary me-2'
          >
            Cancel
          </Link>
          <button
            className='btn btn-danger float-end'
            id='wd-add-new-assignment-click'
            onClick={save}
          >
            Save
          </button>
        </div>
      )}
    </div>
  )
}
