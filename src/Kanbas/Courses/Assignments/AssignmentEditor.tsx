import React from "react";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = db;

  const assignment = assignments.find(
    (assignment: any) => assignment.course === cid && assignment._id === aid
  );

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4 border rounded">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        className="form-control mb-4"
        value={assignment.title}        
      />

      <label htmlFor="wd-description" className="mb-2">Assignment Description</label>
      <textarea
        id="wd-description"
        className="form-control mb-3"
        rows={6}
        value={assignment.description}        
      />

      <div className="mb-3 d-flex align-items-center">
        <label htmlFor="wd-points" className="me-2">Points</label>
        <input
          id="wd-points"
          type="number"
          className="form-control w-auto"
          value={assignment.point}        
        />
      </div>

      <div className="mb-3 d-flex align-items-center">
        <label htmlFor="wd-assignment-group" className="me-2">Assignment Group</label>
        <select
          id="wd-assignment-group"
          className="form-select w-auto"
        >
          <option selected value="Assignments">ASSIGNMENTS</option>
          <option value="Quizzes">QUIZZES</option>
          <option value="Exams">EXAMS</option>
          <option value="Project">PROJECT</option>
        </select>
      </div>

      <div className="mb-3 d-flex align-items-center">
        <label htmlFor="wd-display-grade-as" className="me-2">Display Grade as</label>
        <select
          id="wd-display-grade-as"
          className="form-select w-auto"
        >
          <option selected value="percentage">Percentage</option>
          <option value="points">Points</option>
          <option value="letter-grade">Letter Grade</option>
        </select>
      </div>

      <div className="mb-3 d-flex align-items-start">
        <label htmlFor="wd-submission-type" className="me-2">Submission Type</label>
        <div className="border p-3 flex-grow-1">
          <select
            id="wd-submission-type"
            className="form-select mb-3"
          >
            <option selected value="online">Online</option>
            <option value="paper">Paper</option>
            <option value="no-submission">No Submission</option>
          </select>

          <label><strong>Online Entry Options</strong></label><br />
          <div className="mb-2">
            <input type="checkbox" id="wd-text-entry" className="me-1" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />
            <input type="checkbox" id="wd-website-url" className="me-1" checked />
            <label htmlFor="wd-website-url">Website URL</label><br />
            <input type="checkbox" id="wd-media-recordings" className="me-1" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            <input type="checkbox" id="wd-student-annotation" className="me-1" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
            <input type="checkbox" id="wd-file-uploads" className="me-1" />
            <label htmlFor="wd-file-uploads">File Uploads</label>
          </div>
        </div>
      </div>

      <div className="mb-3 d-flex align-items-start">
        <label htmlFor="wd-assign-to" className="me-2">Assign</label>
        <div className="border p-3 flex-grow-1">
          <label><strong>Assign to</strong></label><br />
          <input
            id="wd-assign-to"
            className="form-control mb-3"
            value=""
          />

          <div className="col">
            <label htmlFor="wd-due-date" className="me-2"><strong>Due</strong></label>
            <div className="input-group">
              <input
                id="wd-due-date"
                type="datetime-local"
                className="form-control"
                value={assignment.due}
              />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <label htmlFor="wd-available-from" className="me-2"><strong>Available from</strong></label>
              <div className="input-group">
                <input
                  id="wd-available-from"
                  type="datetime-local"
                  className="form-control"
                  value={assignment.available}                 
                />
              </div>
            </div>

            <div className="col">
              <label htmlFor="wd-available-until" className="me-2"><strong>Until</strong></label>
              <div className="input-group">
                <input
                  id="wd-available-until"
                  type="datetime-local"
                  className="form-control"
                  value={assignment.until}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
      </div>
    </div>
  );
}
