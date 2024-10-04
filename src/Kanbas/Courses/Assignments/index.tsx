import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotebookBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";


export default function Assignments() {
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
            <li className="list-group-item wd-assignment p-3 d-flex justify-content-between align-items-center" style={{ borderLeft: "5px solid #28a745" }}>
              <div className="d-flex align-items-center">
                <PiNotebookBold className="me-2 fs-3 text-success" />
                <BsGripVertical className="me-2 fs-3" />
                <div>
                  <a href="#/Kanbas/Courses/1234/Assignments/1">
                    <h6><strong>A1 - ENV + HTML</strong></h6>
                  </a>
                  <h6>
                    <span className="text-danger">Multiple Modules</span> | 
                    <strong>Not available until</strong> May 6 at 12:00am |
                  </h6>
                  <h6>
                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </h6>
                </div>
              </div>
              <div className="float-end">
                <IoEllipsisVertical className="fs-4" />
              </div>
            </li>

            <li className="list-group-item wd-assignment p-3 d-flex justify-content-between align-items-center" style={{ borderLeft: "5px solid #28a745" }}>
              <div className="d-flex align-items-center">
                <PiNotebookBold className="me-2 fs-3 text-success" /> 
                <BsGripVertical className="me-2 fs-3" />
                <div>
                  <a href="#/Kanbas/Courses/1234/Assignments/2">
                    <h6><strong>A2 - CSS + BOOTSTRAP</strong></h6>
                  </a>
                  <h6>
                    <span className="text-danger">Multiple Modules</span> | 
                    <strong>Not available until</strong> May 13 at 12:00am |
                  </h6>
                  <h6>
                    <strong>Due</strong> May 20 at 11:59pm | 100 pts
                  </h6>
                </div>
              </div>
              <div className="float-end">
                <IoEllipsisVertical className="fs-4" />
              </div>
            </li>

            <li className="list-group-item wd-assignment p-3 d-flex justify-content-between align-items-center" style={{ borderLeft: "5px solid #28a745" }}>
              <div className="d-flex align-items-center">
                <PiNotebookBold className="me-2 fs-3 text-success" />
                <BsGripVertical className="me-2 fs-3" />
                <div>
                  <a href="#/Kanbas/Courses/1234/Assignments/3">
                    <h6><strong>A3 - JAVASCRIPT + REACT</strong></h6>
                  </a>
                  <h6>
                    <span className="text-danger">Multiple Modules</span> | 
                    <strong>Not available until</strong> May 20 at 12:00am |
                  </h6>
                  <h6>
                    <strong>Due</strong> May 27 at 11:59pm | 100 pts
                  </h6>
                </div>
              </div>
              <div className="float-end">
                <IoEllipsisVertical className="fs-4" />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}