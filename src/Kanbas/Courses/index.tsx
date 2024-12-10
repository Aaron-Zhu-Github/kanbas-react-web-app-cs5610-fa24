import React, {useEffect, useState, useCallback} from 'react'
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation
} from 'react-router-dom'
import { FaAlignJustify } from 'react-icons/fa'
import Home from './Home'
import Modules from './Modules'
import CoursesNavigation from './CourseNavigation'
import Assignments from './Assignments'
import AssignmentEditor from './Assignments/AssignmentEditor'
import PeopleTable from './People/PeopleTable'
import { useSelector } from 'react-redux'
import {findUsersForCourse} from "./client";
import QuizList from "./Quizzes";
import QuizDetails from "./Quizzes/Details";
import QuizEditor from "./Quizzes/Editor";
import QuizPreview from "./Quizzes/Preview";

export default function Courses() {
  const { cid } = useParams()
  const { courses } = useSelector((state: any) => state.coursesReducer)
  const course = courses.find((course: any) => course._id === cid)
  debugger
  const { pathname } = useLocation()
  const baseRoute = `/Courses/${cid}`
  const [users, setUsers] = useState<any[]>([]);

  const updateUsers = useCallback(async () => {
    try {
      const response = await findUsersForCourse(cid);
      setUsers(response);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  }, [cid]);

  useEffect(() => {
    updateUsers();
  }, [cid, updateUsers]);


  return (
      <div id='wd-courses'>
        <h2 className='text-danger'>
          <FaAlignJustify className='me-4 fs-4 mb-1' />
          {course && course.name} &gt; {pathname.split('/')[4]}
        </h2>
        <hr />
        <div className='d-flex'>
          <div className='d-none d-md-block'>
            <CoursesNavigation />
          </div>
          <div className='flex-fill'>
            <Routes>
              <Route path="/" element={<Navigate to={`${baseRoute}/Home`} />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Assignments/new" element={<AssignmentEditor />} />
              <Route path="Assignments/:aid/edit" element={<AssignmentEditor />} />
              <Route path="Quizzes" element={<QuizList />} />
              <Route path="Quizzes/:qid" element={<QuizDetails />} />
              <Route path="Quizzes/:qid/edit" element={<QuizEditor />} />
              <Route path="Quizzes/:qid/preview/*" element={<QuizPreview />} />
              <Route path="People" element={<PeopleTable users={users}/>} />
            </Routes>
          </div>
        </div>
      </div>
  )
}
