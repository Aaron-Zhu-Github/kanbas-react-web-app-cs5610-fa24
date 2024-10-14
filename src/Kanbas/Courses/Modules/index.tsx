import { BsGripVertical } from "react-icons/bs"; 
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButton";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from "react-icons/fa6";

import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
    const { cid } = useParams();
    const modules = db.modules;
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0"> 
            {modules
                .filter((module: any) => module.course === cid)
                .map((module: any) => (
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            {module.name} 
                        </div>
                        <div className="d-flex align-items-center">
                            <GreenCheckmark />
                            <FaPlus className="ms-1" />
                            <ModuleControlButtons />
                        </div>
                    </div> 
                    {module.lessons && (
                    <ul className="wd-lessons list-group rounded-0">
                        {module.lessons.map((lesson: any) => (
                        <li className="wd-lesson list-group-item p-3 ps-1"> 
                            <BsGripVertical className="me-2 fs-3" />
                            {lesson.name}
                            <LessonControlButtons />
                        </li>
                //         <li className="wd-lesson list-group-item p-3 ps-1">
                //             <BsGripVertical className="me-2 fs-3" />
                //             Introduction to the course 
                //             <LessonControlButtons />
                //         </li>
                //         <li className="wd-lesson list-group-item p-3 ps-1">
                //             <BsGripVertical className="me-2 fs-3" />
                //             Learn what is Web Development 
                //             <LessonControlButtons />
                //         </li>
                //         <li className="wd-lesson list-group-item p-3 ps-1"> 
                //             <BsGripVertical className="me-2 fs-3" />
                //             LESSON 1 
                //             <LessonControlButtons />
                //         </li>
                //         <li className="wd-lesson list-group-item p-3 ps-1"> 
                //             <BsGripVertical className="me-2 fs-3" />
                //             LESSON 2 
                //             <LessonControlButtons />
                //         </li>
                //     </ul>
                // </li>
                // <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                //     <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                //         <div className="d-flex align-items-center">
                //             <BsGripVertical className="me-2 fs-3" />
                //             Week 2
                //         </div>
                //         <div className="d-flex align-items-center">
                //             <GreenCheckmark />
                //             <FaPlus className="ms-1" />
                //             <ModuleControlButtons />
                //         </div> 
                //     </div>
                //     <ul className="wd-lessons list-group rounded-0">
                //         <li className="wd-lesson list-group-item p-3 ps-1">
                //             <BsGripVertical className="me-2 fs-3" />
                //             LEARNING OBJECTIVES 
                //             <LessonControlButtons />
                //         </li>
                //         <li className="wd-lesson list-group-item p-3 ps-1"> 
                //             <BsGripVertical className="me-2 fs-3" />
                //             LESSON 1
                //             <LessonControlButtons /> 
                //         </li>
                //         <li className="wd-lesson list-group-item p-3 ps-1"> 
                //             <BsGripVertical className="me-2 fs-3" />
                //             LESSON 2
                //             <LessonControlButtons /> 
                        // </li>
                    ))}
                    </ul>
                    )}
                </li>
                ))}
            </ul> 
        </div>
  );}