import ModulesControls from "./ModulesControls";

export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0"> 
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> Week 1 </div> 
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1"> 
                            LEARNING OBJECTIVES </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            Introduction to the course </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            Learn what is Web Development </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
                    </ul>
                </li>
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            LEARNING OBJECTIVES </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
                        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
                    </ul>
                </li>
            </ul> 
        </div>




// export default function Modules() {
//     return (
//         <div>
//             {/* Collapse All button, View Progress button, etc. */}
//             <button>Collapse All</button>
//             <button>View Progress</button>
//                 <select id="wd-select-one-choice">
//                     <option value="ONE">Publish 1</option>
//                     <option value="TWO">Publish 2</option>
//                     <option selected value="Tree">Publish All</option>
//                     <option value="FOUR">Publish 4</option>
//                 </select>
//             <button>+ Module</button>
//             <ul id="wd-modules">
//                 <li className="wd-module">
//                     <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to the course</li>
//                                 <li className="wd-content-item">Learn what is Web Development</li>
//                             </ul>
//                         </li>
//                         <li className="wd-lesson">
//                             <span className="wd-title">READING</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
//                                 <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
//                             </ul>
//                         </li>
//                         <li className="wd-lesson">
//                             <span className="wd-title">SLIDES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to Web Development</li>
//                                 <li className="wd-content-item">Creating an HTTP server with Node.js</li>
//                                 <li className="wd-content-item">Creating a React Application</li>
//                             </ul>
//                         </li> 
//                     </ul>
//                 </li>
//                 <li className="wd-module">
//                     <div className="wd-title">Week 2, Lecture 2 - Formatting User Interfaces with HTML</div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                         </li> 
//                     </ul>
//                 </li> 
//             </ul>
//         </div> 
  );}


// export default function Modules() {
//     return (
//       <div>
//         {/* Implement Collapse All button, View Progress button, etc. */}
//         <ul id="wd-modules">
//           <li className="wd-module">
//             <div className="wd-title">Week 1</div>
//             <ul className="wd-lessons">
//               <li className="wd-lesson">
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Introduction to the course</li>
//                   <li className="wd-content-item">
//                     Learn what is Web Development
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li className="wd-module">
//             <div className="wd-title">Week 2</div>
//             <ul className="wd-lessons">
//               <li className="wd-lesson">
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     );
//   }