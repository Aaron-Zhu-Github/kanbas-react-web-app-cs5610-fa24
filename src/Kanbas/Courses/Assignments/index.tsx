// import { BsGripVertical } from "react-icons/bs";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { PiNotebookBold } from "react-icons/pi";
// import { FaPlus } from "react-icons/fa6";
// import { SlMagnifier } from "react-icons/sl";
// import { GoTriangleDown } from "react-icons/go";

// import React, {useState} from 'react';
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import * as db from "../../Database";
// import GreenCheckmark from "./GreenCheckmark";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteAssignment } from "./reducer";
// import HomeworkControlButtons from "./HomeworkControlButtons";

// export default function Assignments() {
//   const { cid } = useParams();
//   const [assignments, setAssignments] = useState<any[]>(db.assignments);
//   const dispatch = useDispatch();
//   // const assignments = db.assignments;
//   // console.log(assignments)
  
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   // const courseAssignments = assignments.filter(assignment => assignment.course === cid);
//   const isFaculty = currentUser?.role === "FACULTY"; 
//   const courseAssignments = useSelector((state: any) =>
//     assignments.filter((a: any) => a.course === cid)
//   );
//   // console.log(courseAssignments)
  
//   const handleDelete = (id: any) => {
//     if (window.confirm("Are you sure you want to delete this assignment?")) {
//       dispatch(deleteAssignment(id));
//     }
//   };
  
//   return (
//     <div>
//       <div id="wd-assignments-controls" className="d-flex justify-content-between mb-3">
//         <div className="input-group w-50">
//           <span className="input-group-text bg-white border-end-0">
//             <SlMagnifier />
//           </span>
//           <input id="wd-search-assignment" className="form-control border-start-0" placeholder="Search" />
//         </div>
//         {isFaculty && (
//         <div className="d-flex">
//            <Link className="btn btn-danger me-2 d-flex align-items-center"
//                 to ={ `/Kanbas/Courses/${cid}/Assignments/527`}>
//                 <FaPlus className="me-1" />
//                 Assignment
//           </Link>
//           <button className="btn btn-secondary d-flex align-items-center">
//             <FaPlus className="me-1" />
//             Group
//           </button>
//         </div>
//         )}
//       </div>

//       <br />

//       <ul className="list-group rounded-0">
//         <li className="list-group-item p-0 mb-5">
//           <div className="p-3 d-flex justify-content-between align-items-center bg-light">
//             <div className="d-flex align-items-center">
//               <BsGripVertical className="me-2 fs-3" />
//               <GoTriangleDown />
//               <strong>ASSIGNMENTS</strong>
//             </div>
//             <div className="d-flex align-items-center">
//               <div
//                 style={{
//                   border: "1px solid gray",
//                   borderRadius: "50px",
//                   padding: "5px 15px",
//                 }}
//                 className="me-2"
//               >
//                 40% of Total
//               </div>
//               {isFaculty && <FaPlus className="fs-4" />}
//               <IoEllipsisVertical className="fs-4 ms-2" />
//             </div>
//           </div>

//           <ul className="list-group rounded-0">
//             {courseAssignments.map((assignment: any) => (
//               <li key={assignment._id} className="list-group-item wd-assignment p-3 d-flex justify-content-between align-items-center" style={{ borderLeft: "5px solid #28a745" }}>
//                 <div className="d-flex align-items-center">
//                   <PiNotebookBold className="me-2 fs-3 text-success" />
//                   <BsGripVertical className="me-2 fs-3" />
//                   <div>
//                     <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
//                       <h6><strong>{assignment.title}</strong></h6>
//                     </Link>
//                     <span className="text-danger">Multiple Modules</span> |
//                       <strong> Not available until </strong> {assignment.available} | <br />
//                       <strong> Due </strong> {assignment.due} | {assignment.point} pts
//                   </div>
//                 </div>
//                 <div className="float-end">
//                 <HomeworkControlButtons 
//                                 assignmentId={assignment._id}
//                                 deleteAssignment={(assignmentId) => { dispatch(deleteAssignment(assignmentId));
//                                 }}
//                                  /* editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))} */ />
                  
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }



import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotebookBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { GoTriangleDown } from "react-icons/go";

import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as db from "../../Database";
import GreenCheckmark from "./GreenCheckmark";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, editAssignment } from "./reducer";
import HomeworkControlButtons from "./HomeworkControlButtons";
import reducer from "./reducer";
// import AssignmentEditor from "./AssignmentEditor";

export default function Assignments() {
  
  const { cid } = useParams();
  const [assignments, setAssignments] = useState<any[]>(db.assignments);
  

  const dispatch = useDispatch();
  // const assignments = db.assignments;
  // console.log(assignments)
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const courseAssignments = assignments.filter(assignment => assignment.course === cid);
  const isFaculty = currentUser?.role === "FACULTY"; 
  const courseAssignments = useSelector((state: any) =>
    assignments.filter((a: any) => a.course === cid)
  );
  // console.log(courseAssignments)
  
 
  
  return (
    <div>
      <div id="wd-assignments-controls" className="d-flex justify-content-between mb-3">
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <SlMagnifier />
          </span>
          <input id="wd-search-assignment" className="form-control border-start-0" placeholder="Search" />
        </div>
        {isFaculty && (
        <div className="d-flex">
           <Link className="btn btn-danger me-2 d-flex align-items-center"
                to ={ `/Kanbas/Courses/${cid}/Assignments/527`}>
                <FaPlus className="me-1" />
                Assignment
          </Link>
          <button className="btn btn-secondary d-flex align-items-center">
            <FaPlus className="me-1" />
            Group
          </button>
        </div>
        )}
      </div>

      <br />

      <ul className="list-group rounded-0">
        <li className="list-group-item p-0 mb-5">
          <div className="p-3 d-flex justify-content-between align-items-center bg-light">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <GoTriangleDown />
              <strong>ASSIGNMENTS</strong>
            </div>
            <div className="d-flex align-items-center">
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: "50px",
                  padding: "5px 15px",
                }}
                className="me-2"
              >
                40% of Total
              </div>
              {isFaculty && <FaPlus className="fs-4" />}
              <IoEllipsisVertical className="fs-4 ms-2" />
            </div>
          </div>

          <ul className="list-group rounded-0">
            {courseAssignments.map((assignment: any) => (
              <li key={assignment._id} className="list-group-item wd-assignment p-3 d-flex justify-content-between align-items-center" style={{ borderLeft: "5px solid #28a745" }}>
                <div className="d-flex align-items-center">
                  <PiNotebookBold className="me-2 fs-3 text-success" />
                  <BsGripVertical className="me-2 fs-3" />
                  <div>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                      <h6><strong>{assignment.title}</strong></h6>
                    </Link>
                    <span className="text-danger">Multiple Modules</span> |
                      <strong> Not available until </strong> {assignment.available} | <br />
                      <strong> Due </strong> {assignment.due} | {assignment.point} pts
                  </div>
                </div>
                <div className="float-end">
                <HomeworkControlButtons 
                                assignmentId={assignment._id}
                                deleteAssignment={(assignmentId) => { dispatch(deleteAssignment(assignmentId))
                                }}
                                 editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))}  />
                  
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}



