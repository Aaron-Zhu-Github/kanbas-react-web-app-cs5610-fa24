import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }} 
         className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" rel="noreferrer" 
         href="https://www.northeastern.edu/" 
         className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" width="75px" alt=""/></a>
      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-white
                  bg-black text-center border-0">
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account </Link>
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0
                   bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </Link>
      <Link to="/Kanbas/Dashboard" id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </Link>
      {/* complete styling the rest of the links */}
      <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar </Link>
      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
      className="list-group-item text-white
                  bg-black text-center border-0">
      <FaInbox className="fs-1 text-danger" /><br />
      Inbox </Link>
      <Link to="/Labs/LandingPage" id="wd-labs-link"
      className="list-group-item text-white
                  bg-black text-center border-0">
      <LiaCogSolid className="fs-1 text-danger" /><br />
      Labs </Link>
    </div>


    //   <a id="wd-account-link" href="#/Kanbas/Account">Account</a></li>
    //   <a id="wd-dashboard-link" href="#/Kanbas/Dashboard">Dashboard</a></li>
    //   <a id="wd-course-link" href="#/Kanbas/Courses/Home">Courses</a></li>
    //   <a id="wd-calendar-link" href="#/Kanbas/Calendar">Calendar</a></li>
    //   <a id="wd-inbox-link" href="#/Kanbas/Inbox">Inbox</a></li>
    //   <a id="wd-labs-link" href="#/Labs">Landing Page</a></li>
    // </div>
  );
}