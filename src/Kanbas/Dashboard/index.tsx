// All images in this assignment are from internet
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { enrollCourse, unenrollCourse } from './reducer'
import { addCourse, updateCourse } from '../store/coursesReducer'

export default function Dashboard() {
  const { currentUser } = useSelector(
    (state: any) => state.accountReducer
  )
  const { courses } = useSelector(
    (state: any) => state.coursesReducer
  )
  const { enrollments } = useSelector(
    (state: any) => state.enrollmentsReducer
  )

  const dispatch = useDispatch()

  const isFaculty = currentUser?.role === 'FACULTY'
  const isStudent = currentUser?.role === 'STUDENT'

  const [showAllCourses, setShowAllCourses] = useState(isFaculty)

  const userEnrollments = enrollments.filter(
    (enrollment: any) => enrollment.user === currentUser._id
  )
  const isEnrolledCourse = (course: any) =>
    userEnrollments.some(
      (enrollment: any) => enrollment.course === course._id
    )
  const userCourses = courses.filter((course: any) =>
    isEnrolledCourse(course)
  )
  const enrollCourseHandle = (courseId: any) => {
    dispatch(
      enrollCourse({
        userId: currentUser._id,
        courseId: courseId
      })
    )
  }
  const unenrollCourseHandle = (courseId: any) => {
    dispatch(
      unenrollCourse({
        userId: currentUser._id,
        courseId: courseId
      })
    )
  }
  const [course, setCourse] = useState({
    name: '',
    description: '',
    updateId: null
  })

  const addCourseHandle = () => {
    const _id = new Date().getTime().toString()
    dispatch(
      addCourse({
        _id,
        name: course.name,
        description: course.description
      })
    )
    dispatch(
      enrollCourse({
        userId: currentUser._id,
        courseId: _id
      })
    )
    setCourse({
      updateId: null,
      name: '',
      description: ''
    })
  }
  const updateCourseHandle = () => {
    dispatch(
      updateCourse({
        _id: course.updateId,
        name: course.name,
        description: course.description
      })
    )
    setCourse({
      updateId: null,
      name: '',
      description: ''
    })
  }

  const courseList =
    (isFaculty && userCourses) ||
    (showAllCourses ? courses : userCourses)

  return (
    <div
      className='p-4'
      id='wd-dashboard'
    >
      <h1 id='wd-dashboard-title'>
        Dashboard
        {isStudent && (
          <button
            className='btn btn-primary float-end'
            onClick={() => setShowAllCourses((show) => !show)}
          >
            {showAllCourses ? 'Show Enrollments' : 'Show All Courses'}
          </button>
        )}
      </h1>
      <hr />

      <h2 id='wd-dashboard-published'>
        {showAllCourses ? 'Published Courses' : 'Enrolled Courses'} (
        {courseList.length})
      </h2>
      <hr />
      {isFaculty && (
        <div>
          <h5>
            New Course
            <button
              className='btn btn-primary float-end'
              id='wd-add-new-course-click'
              onClick={addCourseHandle}
            >
              Add
            </button>
            <button
              className='btn btn-warning float-end me-2'
              onClick={updateCourseHandle}
              id='wd-update-course-click'
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            placeholder='New Course'
            className='form-control mb-2'
            onChange={(e) => {
              setCourse((c) => ({ ...c, name: e.target.value }))
            }}
          />
          <textarea
            value={course.description}
            placeholder='New Description:please describe what the course provides to the students.What students can learn and what they need to do if they want to complete this course'
            className='form-control'
            onChange={(e) => {
              setCourse((c) => ({
                ...c,
                description: e.target.value
              }))
            }}
          />
          <hr />
        </div>
      )}
      <div
        id='wd-dashboard-courses'
        className='row'
      >
        <div className='row row-cols-1 row-cols-md-5 g-4'>
          {courseList.map((course: any) => (
            <div
              key={course._id}
              className='wd-dashboard-course col'
              style={{ width: '300px' }}
            >
              <div className='card rounded-3 overflow-hidden'>
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className='wd-dashboard-course-link text-decoration-none text-dark'
                >
                  <img
                    src={course.image || '/images/reactjs.jpg'}
                    width='100%'
                    height={160}
                    alt={course.name}
                  />
                  <div className='card-body'>
                    <h5
                      title={course.name}
                      style={{ height: '90px' }}
                      className='wd-dashboard-course-title card-title line-clamp'
                    >
                      {course.name}
                    </h5>
                    <p
                      className='wd-dashboard-course-title card-text line-clamp'
                      style={{ height: '90px' }}
                      title={course.description}
                    >
                      {course.description}
                    </p>
                    <button className='btn btn-primary'>Go</button>

                    {isFaculty && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault()
                          }}
                          className='btn btn-danger float-end'
                          id='wd-delete-course-click'
                        >
                          Delete
                        </button>

                        <button
                          id='wd-edit-course-click'
                          onClick={(event) => {
                            event.preventDefault()
                            setCourse({
                              updateId: course._id,
                              name: course.name,
                              description: course.description
                            })
                          }}
                          className='btn btn-warning me-2 float-end'
                        >
                          Edit
                        </button>
                      </>
                    )}
                    {isStudent && (
                      <>
                        {(!showAllCourses ||
                          isEnrolledCourse(course)) && (
                          <button
                            onClick={(event) => {
                              event.preventDefault()
                              unenrollCourseHandle(course._id)
                            }}
                            className='btn btn-danger float-end'
                            id='wd-delete-course-click'
                          >
                            Unenroll
                          </button>
                        )}
                        {showAllCourses &&
                          !isEnrolledCourse(course) && (
                            <button
                              id='wd-edit-course-click'
                              onClick={(event) => {
                                event.preventDefault()
                                console.log(123)
                                enrollCourseHandle(course._id)
                              }}
                              className='btn btn-success me-2 float-end'
                            >
                              Enroll
                            </button>
                          )}
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}