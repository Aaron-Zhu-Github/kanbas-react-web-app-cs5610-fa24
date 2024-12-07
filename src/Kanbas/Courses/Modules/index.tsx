import { BsGripVertical } from "react-icons/bs"; 
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

import { useParams } from "react-router";
// import * as db from "../../Database";
import React, { useState, useEffect } from 'react'
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule
} from './reducer'
import { useSelector, useDispatch } from 'react-redux'
import * as coursesClient from '../client'
import * as modulesClient from './client'

export default function Modules() {
  const { cid } = useParams()
  const [moduleName, setModuleName] = useState('')
  const { modules } = useSelector(
    (state: any) => state.modulesReducer
  )
  const { currentUser } = useSelector(
    (state: any) => state.accountReducer
  )

  const dispatch = useDispatch()

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module)
    dispatch(updateModule(module))
    await fetchModules();
  }

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId)
    dispatch(deleteModule(moduleId))
    await fetchModules();
  }


  const createModuleForCourse = async () => {
    if (!cid) return
    const newModule = { name: moduleName, course: cid }
    const module = await coursesClient.createModuleForCourse(
      cid,
      newModule
    )
    dispatch(addModule(module))
    await fetchModules();
  }

  const fetchModules = async () => {
    let modules = await coursesClient.findModulesForCourse(cid as string);

    if (modules === null || Object.keys(modules).length === 0) {
      modules = [];
    }

    dispatch(setModules(modules));
  }
  useEffect(() => {
    fetchModules()
  }, [])

  const isFaculty = currentUser?.role === 'FACULTY' || currentUser?.role === 'ADMIN'

  return (
    <div className='wd-modules'>
      {isFaculty && (
        // <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => {
        //     dispatch(addModule({ name: moduleName, course: cid }));
        //     setModuleName("");}}
        //      />
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={createModuleForCourse}
        />
      )}
      <br />
      <br />
      <br />
      <br />
      <ul
        id='wd-modules'
        className='list-group rounded-0'
      >
        {modules
          // .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className='wd-module list-group-item p-0 mb-5 fs-5 border-gray'>
              <div className='wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <BsGripVertical className='me-2 fs-3' />
                  {!module.editing && module.name}
                  {module.editing && (
                    <input
                      className='form-control w-50 d-inline-block'
                      onChange={(e) =>
                        dispatch(
                          updateModule({
                            ...module,
                            name: e.target.value
                          })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          // dispatch(updateModule({ ...module, editing: false }));
                          saveModule({ ...module, editing: false })
                        }
                      }}
                      defaultValue={module.name}
                    />
                  )}
                </div>
                {isFaculty && (
                  <ModuleControlButtons
                    moduleId={module._id}
                    // deleteModule={(moduleId) => { dispatch(deleteModule(moduleId));
                    // }}
                    deleteModule={(moduleId) =>
                      removeModule(moduleId)
                    }
                    editModule={(moduleId) =>{
                      dispatch(editModule(moduleId))
                    }

                    }
                  />
                )}
              </div>
              {module.lessons && (
                <ul className='wd-lessons list-group rounded-0'>
                  {module.lessons.map((lesson: any) => (
                    <li className='wd-lesson list-group-item p-3 ps-1'>
                      <BsGripVertical className='me-2 fs-3' />
                      {lesson.name}
                      {isFaculty && <LessonControlButtons />}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}