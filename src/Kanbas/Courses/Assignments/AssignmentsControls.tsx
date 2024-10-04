import { FaPlus } from "react-icons/fa6";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="d-flex justify-content-between mb-3">
      <div className="input-group w-50">
        <span className="input-group-text bg-white border-end-0">
          <FaPlus />
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
  );
}
