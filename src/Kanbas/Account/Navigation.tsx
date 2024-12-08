// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function AccountNavigation() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   // const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
//   const { pathname } = useLocation();
//   return (
//     <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//       {!currentUser && (
//         <>
//           <Link 
//             to="/Kanbas/Account/Signin" 
//             id="wd-account-signin-link"
//             className={`list-group-item border-0 text-center 
//               ${pathname === "/Kanbas/Account/Signin" ? "bg-white text-black active" : "text-danger"}`}
//           >
//             Signin
//           </Link>

//           <Link 
//             to="/Kanbas/Account/Signup" 
//             id="wd-account-signup-link"
//             className={`list-group-item border-0 text-center 
//               ${pathname === "/Kanbas/Account/Signup" ? "bg-white text-black active" : "text-danger"}`}
//           >
//             Signup
//           </Link>
//         </>
//       )}
//       {!currentUser && (
//         <>
//           <Link 
//             to="/Kanbas/Account/Profile" 
//             id="wd-account-profile-link"
//             className={`list-group-item border-0 text-center 
//               ${pathname === "/Kanbas/Account/Profile" ? "bg-white text-black active" : "text-danger"}`}
//           >
//             Profile
//           </Link>
//           </>
//       )}
//     </div>
//   );
// }


import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div
      id="wd-account-navigation"
      className="wd list-group border-0 rounded-0"
    >
      {links.map((link: string) => (
        <Link
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item text-danger border border-0 ${
            pathname.includes(link) ? "active" : ""
          }`}
        >
          {" "}
          {link}{" "}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item boder-0 border-white ${active("Users")}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}

      {/* <Link to={`/Kanbas/Account/Signin`}> Signin </Link> <br />
      <Link to={`/Kanbas/Account/Signup`}> Signup </Link> <br />
      <Link to={`/Kanbas/Account/Profile`}> Profile </Link> <br /> */}
    </div>
  );
}