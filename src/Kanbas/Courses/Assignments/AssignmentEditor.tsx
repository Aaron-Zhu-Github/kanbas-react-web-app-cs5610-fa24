import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addAssignment, updateAssignment } from './reducer'

export default function AssignmentEditor() {
  const { cid, aid } = useParams()
  const navigator = useNavigate()
  const isNewAssignment = aid === 'new'

  const { assignments } = useSelector(
    (state: any) => state.assignmentsReducer
  )

  const [assignment, setAssignment] = useState<any>(
    !isNewAssignment
      ? assignments.find((assignment: any) => assignment._id === aid)
      : {
          title: '',
          course: cid,
          description: '',
          available: '',
          due: '',
          until: '',
          point: ''
        }
  )

  const dispatch = useDispatch()

  const save = () => {
    const action = isNewAssignment ? addAssignment : updateAssignment
    dispatch(action(assignment))
    navigator(`/Kanbas/Courses/${cid}/Assignments`)
  }

  if (!isNewAssignment && !assignment) {
    return (
      <div>
        Assignment is not found
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className='btn btn-secondary me-2'
        >
          Cancel
        </Link>
      </div>
    )
  }

  return (
    <div
      id='wd-assignments-editor'
      className='p-4 border rounded'
    >
      <label htmlFor='wd-name'>Assignment Name</label>
      <input
        id='wd-name'
        className='form-control mb-4'
        value={assignment.title}
        // onChange={handleChange}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />

      <label
        htmlFor='wd-description'
        className='mb-2'
      >
        Assignment Description
      </label>
      <textarea
        id='wd-description'
        name='description'
        className='form-control mb-3'
        rows={6}
        value={assignment.description}
        // onChange={handleChange}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            description: e.target.value
          })
        }
      />

      <div className='mb-3 d-flex align-items-center'>
        <label
          htmlFor='wd-points'
          className='me-2'
        >
          Points
        </label>
        <input
          id='wd-points'
          name='point'
          type='number'
          className='form-control w-auto'
          value={assignment.point}
          // onChange={handleChange}
          onChange={(e) =>
            setAssignment({ ...assignment, point: e.target.value })
          }
        />
      </div>

      <div className='mb-3 d-flex align-items-center'>
        <label
          htmlFor='wd-assignment-group'
          className='me-2'
        >
          Assignment Group
        </label>
        <select
          id='wd-assignment-group'
          className='form-select w-auto'
        >
          <option
            selected
            value='Assignments'
          >
            ASSIGNMENTS
          </option>
          <option value='Quizzes'>QUIZZES</option>
          <option value='Exams'>EXAMS</option>
          <option value='Project'>PROJECT</option>
        </select>
      </div>

      <div className='mb-3 d-flex align-items-center'>
        <label
          htmlFor='wd-display-grade-as'
          className='me-2'
        >
          Display Grade as
        </label>
        <select
          id='wd-display-grade-as'
          className='form-select w-auto'
        >
          <option
            selected
            value='percentage'
          >
            Percentage
          </option>
          <option value='points'>Points</option>
          <option value='letter-grade'>Letter Grade</option>
        </select>
      </div>

      <div className='mb-3 d-flex align-items-start'>
        <label
          htmlFor='wd-submission-type'
          className='me-2'
        >
          Submission Type
        </label>
        <div className='border p-3 flex-grow-1'>
          <select
            id='wd-submission-type'
            className='form-select mb-3'
          >
            <option
              selected
              value='online'
            >
              Online
            </option>
            <option value='paper'>Paper</option>
            <option value='no-submission'>No Submission</option>
          </select>

          <label>
            <strong>Online Entry Options</strong>
          </label>
          <br />
          <div className='mb-2'>
            <input
              type='checkbox'
              id='wd-text-entry'
              className='me-1'
            />
            <label htmlFor='wd-text-entry'>Text Entry</label>
            <br />
            <input
              type='checkbox'
              id='wd-website-url'
              className='me-1'
              checked
            />
            <label htmlFor='wd-website-url'>Website URL</label>
            <br />
            <input
              type='checkbox'
              id='wd-media-recordings'
              className='me-1'
            />
            <label htmlFor='wd-media-recordings'>
              Media Recordings
            </label>
            <br />
            <input
              type='checkbox'
              id='wd-student-annotation'
              className='me-1'
            />
            <label htmlFor='wd-student-annotation'>
              Student Annotation
            </label>
            <br />
            <input
              type='checkbox'
              id='wd-file-uploads'
              className='me-1'
            />
            <label htmlFor='wd-file-uploads'>File Uploads</label>
          </div>
        </div>
      </div>

      <div className='mb-3 d-flex align-items-start'>
        <label
          htmlFor='wd-assign-to'
          className='me-2'
        >
          Assign
        </label>
        <div className='border p-3 flex-grow-1'>
          <label>
            <strong>Assign to</strong>
          </label>
          <br />
          <input
            id='wd-assign-to'
            className='form-control mb-3'
            value=''
          />

          <div className='col'>
            <label
              htmlFor='wd-due-date'
              className='me-2'
            >
              <strong>Due</strong>
            </label>
            <div className='input-group'>
              <input
                id='wd-due-date'
                name='due'
                type='datetime-local'
                className='form-control'
                value={assignment.due}
                // onChange={handleChange}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    due: e.target.value
                  })
                }
              />
            </div>
          </div>

          <div className='row mb-2'>
            <div className='col'>
              <label
                htmlFor='wd-available-from'
                className='me-2'
              >
                <strong>Available from</strong>
              </label>
              <div className='input-group'>
                <input
                  id='wd-available-from'
                  name='available'
                  type='datetime-local'
                  className='form-control'
                  value={assignment.available}
                  // onChange={handleChange}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      available: e.target.value
                    })
                  }
                />
              </div>
            </div>

            <div className='col'>
              <label
                htmlFor='wd-available-until'
                className='me-2'
              >
                <strong>Until</strong>
              </label>
              <div className='input-group'>
                <input
                  id='wd-available-until'
                  type='datetime-local'
                  className='form-control'
                  value={assignment.until}
                  // onChange={handleChange}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      until: e.target.value
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mb-3 d-flex align-items-start">
        <label htmlFor="wd-due-date" className="me-2"><strong>Due</strong></label>
        <input
          id="wd-due-date"
          name="due"
          type="datetime-local"
          className="form-control"
          value={formData.due}
          onChange={handleChange}
        />
      </div> */}

      <div className='d-flex justify-content-end mt-4'>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className='btn btn-secondary me-2'
        >
          Cancel
        </Link>
        <button
          className='btn btn-danger float-end'
          id='wd-add-new-assignment-click'
          onClick={save}
        >
          Save
        </button>
      </div>
    </div>
  )
}

// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addAssignment, editAssignment } from "./reducer";
// import * as db from "../../Database";

// export default function AssignmentEditor() {
//   const { cid, aid } = useParams();

//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);

//   const aidAssignment = assignments.find((assignment: any) => assignment._id === aid);

//   // const isAssignment = Boolean(aid);
//   const [assignment, setAssignment] = useState<any[]>(db.assignments);

//   //   if (isAssignment) {
//   //     dispatch(editAssignment({ ...assignment, _id: aid }));
//   //   } else {
//   //     dispatch(addAssignment({ ...assignment, course: cid }));
//   //   }
//   //   navigate(`/Kanbas/Courses/${cid}/Assignments`);
//   // };

//   useEffect(() => {
//     if(aidAssignment)
//     {
//       setAssignment({
//         title: aidAssignment.title || "",
//         course: cid || "",
//         description: aidAssignment.description || "",
//         point: aidAssignment.point || "",
//         available: aidAssignment.available || "",
//         due: aidAssignment.due || "",
//         until: aidAssignment.until || "",
//       });
//     }

// }, [aidAssignment]);

//   // const handleSave = () => {
//   //   if (isAssignment) {
//   //     dispatch(editAssignment({ ...assignment, _id: aid }));
//   //   } else {
//   //     dispatch(addAssignment({ ...assignment, course: cid }));
//   //   }
//   //   navigate(`/Kanbas/Courses/${cid}/Assignments`);
//   // };

//   return (
//     <div className="assignment-editor">
//       {/* <h2>{isEditMode ? "Edit Assignment" : "New Assignment"}</h2> */}
//       <label htmlFor="wd-name">Assignment Name</label>
//       <input
//         id="wd-name"
//         className="form-control mb-4"
//         value={assignment.title}
//         onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
//         placeholder="Assignment Title"
//       />

//       <label htmlFor="wd-description" className="mb-2">Assignment Description</label>
//       <textarea
//         id="wd-description"
//         name="description"
//         className="form-control mb-3"
//         rows={6}
//         // value={assignment.description}
//         // onChange={handleChange}
//         onChange={(e) => setAssignment({ ...assignment, description: e.target.value }) }

//       />

//       <div className="mb-3 d-flex align-items-center">
//         <label htmlFor="wd-points" className="me-2">Points</label>
//         <input
//           id="wd-points"
//           name="point"
//           type="number"
//           className="form-control w-auto"
//           value={assignment.point}
//           // onChange={handleChange}
//           onChange={(e) => setAssignment({ ...assignment, point: e.target.value }) }
//         />
//       </div>

//            <div className="mb-3 d-flex align-items-center">
//          <label htmlFor="wd-assignment-group" className="me-2">Assignment Group</label>
//          <select
//           id="wd-assignment-group"
//           className="form-select w-auto"
//           defaultValue="Assignments"
//         >
//           <option value="Assignments">ASSIGNMENTS</option>
//           <option value="Quizzes">QUIZZES</option>
//           <option value="Exams">EXAMS</option>
//           <option value="Project">PROJECT</option>
//         </select>
//       </div>

//       <div className="mb-3 d-flex align-items-center">
//         <label htmlFor="wd-display-grade-as" className="me-2">Display Grade as</label>
//         <select
//           id="wd-display-grade-as"
//           className="form-select w-auto"
//         >
//           <option selected value="percentage">Percentage</option>
//           <option value="points">Points</option>
//           <option value="letter-grade">Letter Grade</option>
//         </select>
//       </div>

//       <div className="mb-3 d-flex align-items-start">
//         <label htmlFor="wd-submission-type" className="me-2">Submission Type</label>
//         <div className="border p-3 flex-grow-1">
//           <select
//             id="wd-submission-type"
//             className="form-select mb-3"
//           >
//             <option selected value="online">Online</option>
//             <option value="paper">Paper</option>
//             <option value="no-submission">No Submission</option>
//           </select>

//           <label><strong>Online Entry Options</strong></label><br />
//           <div className="mb-2">
//             <input type="checkbox" id="wd-text-entry" className="me-1" />
//             <label htmlFor="wd-text-entry">Text Entry</label><br />
//             <input type="checkbox" id="wd-website-url" className="me-1" checked />
//             <label htmlFor="wd-website-url">Website URL</label><br />
//             <input type="checkbox" id="wd-media-recordings" className="me-1" />
//             <label htmlFor="wd-media-recordings">Media Recordings</label><br />
//             <input type="checkbox" id="wd-student-annotation" className="me-1" />
//             <label htmlFor="wd-student-annotation">Student Annotation</label><br />
//             <input type="checkbox" id="wd-file-uploads" className="me-1" />
//             <label htmlFor="wd-file-uploads">File Uploads</label>
//           </div>
//         </div>
//       </div>

//       <div className="mb-3 d-flex align-items-start">
//         <label htmlFor="wd-assign-to" className="me-2">Assign</label>
//         <div className="border p-3 flex-grow-1">
//           <label><strong>Assign to</strong></label><br />
//           <input
//             id="wd-assign-to"
//             className="form-control mb-3"
//             value=""
//           />

//           <div className="col">
//             <label htmlFor="wd-due-date" className="me-2"><strong>Due</strong></label>
//             <div className="input-group">
//               <input
//                 id="wd-due-date"
//                 name="due"
//                 type="datetime-local"
//                 className="form-control"
//                 value={assignment.due}
//                 // onChange={handleChange}
//                 onChange={(e) => setAssignment({ ...assignment, due: e.target.value }) }
//               />
//             </div>
//           </div>

//           <div className="row mb-2">
//             <div className="col">
//               <label htmlFor="wd-available-from" className="me-2"><strong>Available from</strong></label>
//               <div className="input-group">
//                 <input
//                   id="wd-available-from"
//                   name="available"
//                   type="datetime-local"
//                   className="form-control"
//                   value={assignment.available}
//                   // onChange={handleChange}
//                   onChange={(e) => setAssignment({ ...assignment, available: e.target.value }) }
//                 />
//               </div>
//             </div>

//             <div className="col">
//               <label htmlFor="wd-available-until" className="me-2"><strong>Until</strong></label>
//               <div className="input-group">
//                 <input
//                   id="wd-available-until"
//                   type="datetime-local"
//                   className="form-control"
//                   value={assignment.until}
//                   // onChange={handleChange}
//                   onChange={(e) => setAssignment({ ...assignment, until: e.target.value }) }
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="actions">
//         <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
//         <button onClick={handleSave} className="btn btn-primary">Save</button>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addAssignment, updateAssignment } from "./reducer";
// import * as db from "../../Database";

// export default function AssignmentEditor() {
//   const { cid, aid } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const isEditing = !!aid;
//   const assignment = db.assignments.find(
//     (assignment) => assignment.course === cid && assignment._id === aid
//   );

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     point: '',
//     due: '',
//     available: '',
//     until: ''
//   });

//   useEffect(() => {
//     if (isEditing && assignment) {
//       setFormData({
//         title: assignment.title,
//         description: assignment.description,
//         point: assignment.point,
//         due: assignment.due,
//         available: assignment.available,
//         until: assignment.until
//       });
//     }
//   }, [assignment, isEditing]);

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = () => {
//     if (isEditing) {
//       dispatch(updateAssignment({ ...assignment, ...formData }));
//     } else {
//       const newAssignment = {
//         ...formData,
//         _id: new Date().toISOString(),
//         course: cid
//       };
//       dispatch(addAssignment(newAssignment));
//     }
//     navigate(`/Kanbas/Courses/${cid}/Assignments`);
//   };

//   return (
//     <div id="wd-assignments-editor" className="p-4 border rounded">
//       <label htmlFor="wd-name">Assignment Name</label>
//       <input
//         id="wd-name"
//         name="title"
//         className="form-control mb-4"
//         value={formData.title}
//         onChange={handleChange}
//       />

//       <label htmlFor="wd-description" className="mb-2">Assignment Description</label>
//       <textarea
//         id="wd-description"
//         name="description"
//         className="form-control mb-3"
//         rows={6}
//         value={formData.description}
//         onChange={handleChange}
//       />

//       <div className="mb-3 d-flex align-items-center">
//         <label htmlFor="wd-points" className="me-2">Points</label>
//         <input
//           id="wd-points"
//           name="point"
//           type="number"
//           className="form-control w-auto"
//           value={formData.point}
//           onChange={handleChange}
//         />
//       </div>

//            <div className="mb-3 d-flex align-items-center">
//          <label htmlFor="wd-assignment-group" className="me-2">Assignment Group</label>
//          <select
//           id="wd-assignment-group"
//           className="form-select w-auto"
//         >
//           <option selected value="Assignments">ASSIGNMENTS</option>
//           <option value="Quizzes">QUIZZES</option>
//           <option value="Exams">EXAMS</option>
//           <option value="Project">PROJECT</option>
//         </select>
//       </div>

//       <div className="mb-3 d-flex align-items-center">
//         <label htmlFor="wd-display-grade-as" className="me-2">Display Grade as</label>
//         <select
//           id="wd-display-grade-as"
//           className="form-select w-auto"
//         >
//           <option selected value="percentage">Percentage</option>
//           <option value="points">Points</option>
//           <option value="letter-grade">Letter Grade</option>
//         </select>
//       </div>

//       <div className="mb-3 d-flex align-items-start">
//         <label htmlFor="wd-submission-type" className="me-2">Submission Type</label>
//         <div className="border p-3 flex-grow-1">
//           <select
//             id="wd-submission-type"
//             className="form-select mb-3"
//           >
//             <option selected value="online">Online</option>
//             <option value="paper">Paper</option>
//             <option value="no-submission">No Submission</option>
//           </select>

//           <label><strong>Online Entry Options</strong></label><br />
//           <div className="mb-2">
//             <input type="checkbox" id="wd-text-entry" className="me-1" />
//             <label htmlFor="wd-text-entry">Text Entry</label><br />
//             <input type="checkbox" id="wd-website-url" className="me-1" checked />
//             <label htmlFor="wd-website-url">Website URL</label><br />
//             <input type="checkbox" id="wd-media-recordings" className="me-1" />
//             <label htmlFor="wd-media-recordings">Media Recordings</label><br />
//             <input type="checkbox" id="wd-student-annotation" className="me-1" />
//             <label htmlFor="wd-student-annotation">Student Annotation</label><br />
//             <input type="checkbox" id="wd-file-uploads" className="me-1" />
//             <label htmlFor="wd-file-uploads">File Uploads</label>
//           </div>
//         </div>
//       </div>

//       <div className="mb-3 d-flex align-items-start">
//         <label htmlFor="wd-assign-to" className="me-2">Assign</label>
//         <div className="border p-3 flex-grow-1">
//           <label><strong>Assign to</strong></label><br />
//           <input
//             id="wd-assign-to"
//             className="form-control mb-3"
//             value=""
//           />

//           <div className="col">
//             <label htmlFor="wd-due-date" className="me-2"><strong>Due</strong></label>
//             <div className="input-group">
//               <input
//                 id="wd-due-date"
//                 name="due"
//                 type="datetime-local"
//                 className="form-control"
//                 value={formData.due}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="row mb-2">
//             <div className="col">
//               <label htmlFor="wd-available-from" className="me-2"><strong>Available from</strong></label>
//               <div className="input-group">
//                 <input
//                   id="wd-available-from"
//                   name="available"
//                   type="datetime-local"
//                   className="form-control"
//                   value={formData.available}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="col">
//               <label htmlFor="wd-available-until" className="me-2"><strong>Until</strong></label>
//               <div className="input-group">
//                 <input
//                   id="wd-available-until"
//                   type="datetime-local"
//                   className="form-control"
//                   value={formData.until}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="mb-3 d-flex align-items-start">
//         <label htmlFor="wd-due-date" className="me-2"><strong>Due</strong></label>
//         <input
//           id="wd-due-date"
//           name="due"
//           type="datetime-local"
//           className="form-control"
//           value={formData.due}
//           onChange={handleChange}
//         />
//       </div> */}

//       <div className="d-flex justify-content-end mt-4">
//         <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
//         <button onClick={handleSave} className="btn btn-danger">Save</button>
//       </div>
//     </div>
//   );
// }
