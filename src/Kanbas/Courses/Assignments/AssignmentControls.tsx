import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlus, FaEdit } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";

export default function AssignmentControls() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) => state.assignments.assignments.filter((a: any) => a.course === cid));
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY"; 

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
            to={`/Kanbas/Courses/${cid}/Assignments/123321`}>
          <FaPlus className="me-1" /> Assignment
        </Link>
        <button className="btn btn-secondary d-flex align-items-center">
            <FaPlus className="me-1" />
            Group
          </button>
          </div>
       )} 
      </div>
      <ul>
        {assignments.map((assignment: any) => (
          <li key={assignment._id}>
            {assignment.title}
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}/edit`} className="btn btn-secondary">
              <FaEdit /> Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



