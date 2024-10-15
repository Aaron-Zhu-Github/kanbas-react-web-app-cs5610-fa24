import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotebookBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { GoTriangleDown } from "react-icons/go";

import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as db from "../../Database";
import GreenCheckmark from "./GreenCheckmark";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);
  return (
    <div>
      <div id="wd-assignments-controls" className="d-flex justify-content-between mb-3">
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <SlMagnifier />
          </span>
          <input id="wd-search-assignment" className="form-control border-start-0" placeholder="Search" />
        </div>
        <div className="d-flex">
          <button className="btn btn-danger me-2 d-flex align-items-center">
            <FaPlus className="me-1" />
            Assignment
          </button>
          <button className="btn btn-secondary d-flex align-items-center">
            <FaPlus className="me-1" />
            Group
          </button>
        </div>
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
              <FaPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4 ms-2" />
            </div>
          </div>

          <ul className="list-group rounded-0">
            {courseAssignments.map((assignment) => (
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
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}