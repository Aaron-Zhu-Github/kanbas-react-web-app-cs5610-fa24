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
                              enroll
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

// All images in this assignment are from internet
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import * as db from "../Database";
// import { addEnrollment, deleteEnrollment } from "./reducer";

// export default function Dashboard(
// {   courses, course, setCourse, addNewCourse,
//     deleteCourse, updateCourse }: {
//     courses: any[]; course: any; setCourse: (course: any) => void;
//     addNewCourse: () => void; deleteCourse: (course: any) => void;
//     updateCourse: () => void; })
//     {
//       const { currentUser } = useSelector((state: any) => state.accountReducer);
//       const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
//       // const isFaculty = currentUser?.role === "FACULTY";
//       // console.log(courses)
//       const [showAllCourses, setShowAllCourses] = useState(false);
//       const handleButtonClick = () => {
//         setShowAllCourses(!showAllCourses);

//       }

//   return (
//     <div className="p-4" id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       {isFaculty && (
//         <div>
//           <h5>New Course
//             <button className="btn btn-primary float-end"
//                     id="wd-add-new-course-click"
//                     onClick={addNewCourse} > Add </button>
//             <button className="btn btn-warning float-end me-2"
//                     onClick={updateCourse} id="wd-update-course-click">
//               Update
//             </button>
//           </h5><br />
//           <input value={course.name} className="form-control mb-2"
//                 onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
//           <textarea value={course.description} className="form-control"
//                     onChange={(e) => setCourse({ ...course, description: e.target.value }) } />      <hr />
//       </div>
//       )}
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {courses
//             .filter((course) =>
//               enrollments.some(
//                 (enrollment) =>
//                   enrollment.user === currentUser._id &&
//                   enrollment.course === course._id
//                   ))
//             .map((course) => (
//             <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
//               <div className="card rounded-3 overflow-hidden">
//                 <Link to={`/Kanbas/Courses/${course._id}/Home`}
//                       className="wd-dashboard-course-link text-decoration-none text-dark" >
//                   <img src={course.image || "/images/reactjs.jpg"} width="100%" height={160} alt={course.name} />
//                   <div className="card-body">
//                     <h5 className="wd-dashboard-course-title card-title">
//                       {course.name}
//                     </h5>
//                     <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
//                     {course.description}
//                     </p>
//                     <button className="btn btn-primary"> Go </button>

//                     {isFaculty && (
//                       <>
//                         <button onClick={(event) => {
//                             event.preventDefault();
//                             deleteCourse(course._id);
//                           }} className="btn btn-danger float-end"
//                           id="wd-delete-course-click">
//                           Delete
//                         </button>

//                         <button id="wd-edit-course-click"
//                           onClick={(event) => {
//                             event.preventDefault();
//                             setCourse(course);
//                           }}
//                           className="btn btn-warning me-2 float-end" >
//                           Edit
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//           </div>
//       </div>
//     </div>
// );}

// import React, { useState, useEffect } from "react";
// import * as db from "../Database";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { Provider } from "react-redux";
// import store from "../store";
// import { addEnrollment, deleteEnrollment } from "./reducer";
// import { add } from "../../Labs/Lab3/Math";

// export default function Dashboard({
//   courses, course, setCourse, addNewCourse,
//   deleteCourse, updateCourse
// }: {
//   courses: any[]; course: any; setCourse: (course: any) => void;
//   addNewCourse: () => void; deleteCourse: (course: any) => void;
//   updateCourse: () => void;
// }) {
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
//   const [showAllCourses, setShowAllCourses] = useState(false);

//   // const isFaculty = currentUser?.role === "FACULTY";
//   // const toggleEnrollment = (courseId: string) => {
//     const [showCourse, setShowCourse] = useState(courses.filter((course) =>
//       enrollments.some(
//         (enrollment: any) =>
//           enrollment.user === currentUser._id && enrollment.course === course._id)
//     ));

//     // if (isEnrolled) {
//     //   dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
//     // } else {
//     //   dispatch(enrollCourse({ userId: currentUser._id, courseId }));
//     // }

//     const filteredCourses = courses.filter((course) =>
//       enrollments.some(
//         (enrollment: any) =>
//           enrollment.user === currentUser._id && enrollment.course === course._id)
//     )

//     const updateButton = () => {
//       updateCourse();
//       setShowCourse(courses.filter((course) =>
//         enrollments.some(
//           (enrollment: any) =>
//             enrollment.user === currentUser._id && enrollment.course === course._id)
//         ));
//     }

//     const addButton = (event: React.FormEvent) => {
//       dispatch(addEnrollment({
//         "_id": new Date().getTime().toString(), "user": currentUser._id, "course": course._id
//         }
//       ))

//     addNewCourse();

//     setShowCourse(courses.filter((course) =>
//       enrollments.some(
//         (enrollment: any) =>
//           enrollment.user === currentUser._id && enrollment.course === course._id)
//     ));
//   }

//     const deleteCourseButton = (e: any, cid: any) => {
//       e.preventDefualt();
//       deleteCourse(cid);

//       dispatch(deleteEnrollment({ userId: currentUser._id, cid: cid}));

//       setShowCourse(courses.filter((course) =>
//         enrollments.some(
//           (enrollment: any) =>
//             enrollment.user === currentUser._id && enrollment.course === course._id)
//       ));
//     }

//     const setEnrollment = () => {
//       setShowAllCourses((showAll) => {
//         const showallcourse = !showAll;
//         if(showallcourse)
//         {
//           setShowCourse(courses);
//         }
//         else
//         {
//           setShowCourse(filteredCourses);
//         }
//         return showAllCourses;
//       });
//     };

//     useEffect(() => {
//       setShowCourse(courses.filter(course =>
//         enrollments.some(
//           (enrollment: any) =>
//             enrollment.user === currentUser._id && enrollment.course === course._id)
//       ));
//     }, [courses, db.enrollments]);

//   return (
//     <div className="p-4" id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       { currentUser.role === "FACULTY" && <><h5>New Course
//         <button
//           className="btn btn-primary float-end rounded-1"
//           id="wd-add-new-course"
//           type="button"
//           onClick={(e) => {addButton(e)}} > Add </button>
//         <button
//           className="btn btn-warning float-end me-2 rounded-1"
//           onClick={updateButton} id="wd-update-course">
//             Update
//           </button>
//           </h5><hr />

//       )}
//       {isFaculty && (
//         // ...Faculty buttons remain unchanged
//       )}
//       <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2> <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {filteredCourses.map((course) => {
//             const isEnrolled = enrollments.some(
//               (enrollment: any) =>
//                 enrollment.user === currentUser._id && enrollment.course === course._id
//             );
//             return (
//               <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
//                 <div className="card rounded-3 overflow-hidden">
//                   <Link
//                     to={isEnrolled ? `/Kanbas/Courses/${course._id}/Home` : "#"}
//                     className="wd-dashboard-course-link text-decoration-none text-dark"
//                   >
//                     <img
//                       src={`/images/${course._id}.png` || course.image}
//                       width="100%" height={160} alt={course.name}
//                     />
//                     <div className="card-body">
//                       <h5 className="wd-dashboard-course-title card-title">
//                         {course.name}
//                       </h5>
//                       <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
//                         {course.description}
//                       </p>
//                       {!isFaculty && (
//                         <button
//                           className={`btn ${isEnrolled ? "btn-danger" : "btn-success"}`}
//                           onClick={(event) => {
//                             event.preventDefault();
//                             toggleEnrollment(course._id);
//                           }}
//                         >
//                           {isEnrolled ? "Unenroll" : "Enroll"}
//                         </button>
//                       )}
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
