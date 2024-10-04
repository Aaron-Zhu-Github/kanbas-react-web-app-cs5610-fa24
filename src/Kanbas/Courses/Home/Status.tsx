import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoHome } from "react-icons/io5";
import { MdOutlineBarChart } from "react-icons/md";
import { ImBullhorn } from "react-icons/im";
import { IoBarChart } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";

export default function CourseStatus() {
    return (
      <div id="wd-course-status" style={{ width: "300px" }}>
          <h2>Course Status</h2>
          <div className="d-flex">
            <div className="w-50 pe-1">
              <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
            </div>
            <div className="w-50">
              <button className="btn btn-lg btn-success w-100">
                <FaCheckCircle className="me-2 fs-5" /> Publish </button>
            </div>
          </div><br />
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <BiImport className="me-2 fs-5" /> Import Existing Content </button>
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
          {/* Complete the rest of the buttons */}
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <IoHome className="me-2 fs-5" /> Choose Home Page </button>
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <MdOutlineBarChart className="me-2 fs-5" /> View Course Screen </button>
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <ImBullhorn className="me-2 fs-5" /> New Accouncement </button>
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <IoBarChart className="me-2 fs-5" /> New Analytics </button>
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <FaBell className="me-2 fs-5" /> View Course Notifications </button>
      </div>
     
     
     
     
     
     
     
     
     
      // <div id="wd-course-status">
      //   <h2>Course Status</h2>
      //   <div>
      //     <button>Unpublish</button>
      //     <button>Publish</button>
      //   </div>
      //   <br />
      //   <div>
      //     <button>Import Existing Content</button>
      //   </div>
      //   <div>
      //     <button>Import from Commons</button>
      //   </div>
      //   <div>
      //     <button>Choose Home Page</button>
      //   </div>
      //   <div>
      //     <button>View Course Stream</button>
      //   </div>
      //   <div>
      //     <button>New Announcement</button>
      //   </div>
      //   <div>
      //     <button>New Analytics</button>
      //   </div>
      //   <div>
      //     <button>View Course Notifications</button>
      //   </div>
      // </div>
    );
  }