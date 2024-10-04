import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControlButtons() {
  return (
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
  );
}
