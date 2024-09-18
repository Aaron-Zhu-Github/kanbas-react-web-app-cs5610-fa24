export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
        <br />
          <tr>
            {/* <td align="right" valign="top"> */}
              <label htmlFor="wd-points">Points </label>
            {/* </td> */}
            {/* <td> */}
              <input id="wd-points" value={100} />
            {/* </td>  */}
          </tr>
          {/* Complete on your own */}
          <br />
          <label htmlFor="wd-assignment-group">Assignment Group </label>
            <select id="wd-assignment-group">
                <option selected value="Assignments">ASSIGNMENTS</option>
                <option value="Quizzes">QUIZZES</option>
                <option value="Exams">EXAMS</option>
                <option value="Project">PROJECT</option>
            </select>
            <br />
            <br />
            <label htmlFor="wd-display-grade-as">Display Grade as </label>
            <select id="wd-display-grade-as">
                <option selected value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="letter-grade">Letter Grade</option>
            </select>
            <br />
            <br />
            <label htmlFor="wd-submission-type">Submission Type </label>
            <select id="wd-submission-type">
                <option selected value="online">Online</option>
                <option value="paper">Paper</option>
                <option value="no-submission">No Submission</option>
            </select>
            <br />
            <br />
            <label>Online Entry Options</label><br/>
            <input type="checkbox" name="check-options" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>
            <input type="checkbox" name="check-options" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>
            <input type="checkbox" name="check-options" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
            <input type="checkbox" name="check-options" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
            <input type="checkbox" name="check-options" id="wd-file-uploads"/>
            <label htmlFor="wd-file-uploads">File Uploads</label>
            <br />
            <br />
                <tr>
                    <label htmlFor="wd-assign-to">Assign to</label>
                    <br />
                    <input id="wd-assign-to" value="Everyone" />
                </tr>
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
                <input type="date"
                    id="wd-due-date"
                    value="2024-05-13"/><br/>
            <br/>        
            <table>
            <tr>
                <td>
                    <label htmlFor="wd-available-from">Available from</label>
                    <br />
                    <input type="date" id="wd-available-from" value="2024-05-06" />
                </td>
                <td>
                    <label htmlFor="wd-available-until">Until</label>
                    <br />
                    <input type="date" id="wd-available-until" value="2024-05-20" />
                </td>
            </tr>
            </table>
        </table>

        <div style={{ textAlign: 'right' }}>
        <hr />
        <button>cancel</button>
        <button>save</button>
        </div>
  </div>
  );
}