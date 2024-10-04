import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <input id="wd-username" value="alice" placeholder="username" className="form-control mb-2"/>
      <input
        id="wd-password"
        value="123"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-2"/>
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control mb-2"/>
      <input id="wd-dob" value="2000-01-01" type="date" className="form-control mb-2"/>
      <input id="wd-email" value="alice@wonderland" type="email" className="form-control mb-2"/>
      <select
          id="wd-profile-group"
          className="form-select w-auto"
        >
          <option selected value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Faculty">Faculty</option>
          <option value="Student">Student</option>
        </select>
        
      <Link id="wd-signout-btn" to="/Kanbas/Account/Signin" className="btn btn-danger w-100">Signout</Link>
    </div>
  );
}