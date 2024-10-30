// All images in this assignment are from internet
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as db from "../Database";

export default function Dashboard(
{   courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
    {
      const { currentUser } = useSelector((state: any) => state.accountReducer);
      const { enrollments } = db;
      const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isFaculty && (
        <div>
          <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5><br />
          <input value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          <textarea value={course.description} className="form-control"
                    onChange={(e) => setCourse({ ...course, description: e.target.value }) } />      <hr />
      </div>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
                  ))
            .map((course) => ( 
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src={course.image} width="100%" height={160} alt={course.name} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                    {course.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>

                    {isFaculty && (
                      <>
                        <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>

                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>
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
);}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { enrollCourse, unenrollCourse } from "../redux/enrollmentsSlice";

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
//   const enrollments = useSelector((state: any) => state.enrollments);  
//   const [showAllCourses, setShowAllCourses] = useState(false);

//   const isFaculty = currentUser?.role === "FACULTY";
//   const toggleEnrollment = (courseId: string) => {
//     const isEnrolled = enrollments.some(
//       (enrollment: any) =>
//         enrollment.user === currentUser._id && enrollment.course === courseId
//     );
//     if (isEnrolled) {
//       dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
//     } else {
//       dispatch(enrollCourse({ userId: currentUser._id, courseId }));
//     }
//   };

//   const filteredCourses = showAllCourses ? courses : courses.filter((course) =>
//     enrollments.some(
//       (enrollment: any) =>
//         enrollment.user === currentUser._id && enrollment.course === course._id
//     )
//   );

//   return (
//     <div className="p-4" id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       {!isFaculty && (
//         <button
//           className="btn btn-primary float-end"
//           onClick={() => setShowAllCourses(!showAllCourses)}
//         >
//           {showAllCourses ? "My Enrollments" : "All Courses"}
//         </button>
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
