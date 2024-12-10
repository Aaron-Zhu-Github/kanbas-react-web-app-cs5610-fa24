// Part of the code of this assignment come from Professor Jose Annunziato's lecture code

import Dashboard from './Dashboard'
import KanbasNavigation from './Navigation'
import {useEffect, useCallback, useState} from 'react'
import { Route, Routes, Navigate } from 'react-router'
import Courses from './Courses'
import Account from './Account'
import './styles.css'
import ProtectedRoute from './Account/ProtectedRoute'
import Session from './Account/Session'
import { useDispatch, useSelector } from 'react-redux'
import * as courseClient from './Courses/client'
import { addCourse, deleteCourse, setCourses as setStoreCourses, updateCourse } from './store/coursesReducer'
import * as enrollmentClient from './Dashboard/client'
import {enrollCourse, setEnrollment} from './Dashboard/reducer'
import * as userClient from "./Account/client";
export default function Kanbas() {
  const { currentUser } = useSelector(
      (state: any) => state.accountReducer
  )
  const [courses, setCourses] = useState<any[]>([]);
  type CourseType = {
    name: string;
    description: string;
    number: string;
    credits: string;
    updateId: number | null;
  };
  const [course, setCourse] = useState<CourseType>({
    name: '',
    description: '',
    number: '',
    credits: '',
    updateId: null
  })
  const dispatch = useDispatch()
  
  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
          currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
      dispatch(await setStoreCourses(courses))
    } catch (error) {
      console.error(error);
    }
  };

  // const getUserEnrollments = useCallback(async () => {
  //   const enrollments = await enrollmentClient.getUserEnrollment(
  //     currentUser?._id
  //   )
  //   dispatch(setEnrollment(enrollments))
  // }, [dispatch, currentUser?._id])

  const [enrolling, setEnrolling] = useState<boolean>(false);
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
      dispatch(await setStoreCourses(courses))
    } catch (error) {
      console.error(error);
    }
  };

  const addNewCourseHandler = async () => {

    try {
      if (!course.name || !course.number || !course.credits) {
        alert('Name, number, and credits are required fields.');
        return; 
      }
      const newCourse = await userClient.createCourse({
        name: course.name,
        credits: course.credits,
        number: course.number,
        description: course.description
      })
      dispatch(addCourse(newCourse))
      await enrollmentClient.addEnrollment(currentUser._id,newCourse._id)
      dispatch(
          enrollCourse({
            userId: currentUser._id,
            courseId: newCourse._id
          })
      )
      setCourse({
        updateId: null,
        name: '',
        number: '',
        credits: '',
        description: ''
      })
    } catch (error) {
      console.error('Error adding course:', error)
    }
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }

  const updateCourseHandler = async () => {
    try {
      if (!course.name || !course.number || !course.credits) {
        alert('Name, number, and credits are required fields.');
        return; 
      }
      const updatedCourse = await courseClient.updateCourse({
        _id: course.updateId,
        name: course.name,
        credits: course.credits,
        number: course.number,
        description: course.description
      })
      dispatch(await updateCourse(updatedCourse))
      setCourse({
        updateId: null,
        name: '',
        number: '',
        credits: '',
        description: ''
      })
    } catch (error) {
      console.error('Error updating course:', error)
    }
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }

  const deleteCourseHandler = async (courseId: string) => {
    try {
      await courseClient.deleteCourse(courseId)
      // @ts-ignore
      dispatch(deleteCourse(courseId))
    } catch (error) {
      console.error('Error deleting course:', error)
    }
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }

  const handleSetCourse = async (course: any) => {
   setCourse(course)
  }
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
        courses.map((course) => {
          if (course._id === courseId) {
            return { ...course, enrolled: enrolled };
          } else {
            return course;
          }
        })
    );

  };

  useEffect(() => {
    console.log(currentUser)
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling])

  return (
    // <Provider store={store}>
    <Session>
      <div id='wd-kanbas'>
        <KanbasNavigation />
        <div className='wd-main-content-offset p-3'>
          <Routes>
            <Route
              path='/'
              element={<Navigate to='Account' />}
            />
            <Route
              path='/Account/*'
              element={<Account />}
            />
            <Route
              path='/Dashboard'
              element={
                <ProtectedRoute>
                  <Dashboard enrolling={enrolling} setEnrolling={setEnrolling} courses={courses} course={course}  setCourse={handleSetCourse}
                             addNewCourse={addNewCourseHandler} deleteCourse={deleteCourseHandler} updateCourse={updateCourseHandler}
                             updateEnrollment={updateEnrollment}
                             />
                </ProtectedRoute>
              }
            />
            <Route
              path='/Courses/:cid/*'
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              }
            />
            <Route
              path='/Calendar'
              element={<h1>Calendar</h1>}
            />
            <Route
              path='/Inbox'
              element={<h1>Inbox</h1>}
            />
          </Routes>
        </div>
      </div>
    </Session>
  )
}
