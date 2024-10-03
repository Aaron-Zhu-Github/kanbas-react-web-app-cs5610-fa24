import { Routes, Route, Navigate } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./CourseNavigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          Course 1234</h2> <hr />
      {/* <table>
        <tbody>
          <tr>
            <td valign="top"> */}
      <div className="d-flex">
        <div className="d-none d-md-block">
              <CoursesNavigation />
            {/* </td>
            <td valign="top"> */}
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="People" element={<h2>People</h2>} />
          </Routes>
        </div>
      </div>
            {/* </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}