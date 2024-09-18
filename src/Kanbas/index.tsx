// Part of the code of this assignment come from Professor Jose Annunziato's lecture code

import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Route, Routes, Navigate } from "react-router";
import Courses from "./Courses";
import Account from "./Account";
// import Calendar from "./Calendar";
// import Inbox from "./Inbox";
export default function Kanbas() {
    return (
      <div id="wd-kanbas">
        <h1>Kanbas</h1>
        <table>
          <tbody>
            <tr>
              <td valign="top">
                <KanbasNavigation />
              </td>
              <td valign="top">
                <Routes>
                  <Route path="/" element={<Navigate to="Account" />} />
                  <Route path="/Account/*" element={<Account />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/Courses/:cid/*" element={<Courses />} />
                  <Route path="/Calendar" element={<h1>Calendar</h1>} />
                  <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }



// // Part of the code of this assignment come from Professor Jose Annunziato's lecture code

// import Dashboard from "./Dashboard";
// import KanbasNavigation from "./Navigation";
// import { Route, Routes, Navigate } from "react-router";
// import Courses from "./Courses";
// import Account from "./Account";
// // import Calendar from "./Calendar";
// // import Inbox from "./Inbox";
// export default function Kanbas() {
//     return (
//       <div id="wd-kanbas">
//         <table>
//           <tr>
//             <td valign="top">
//               <KanbasNavigation />
//             </td>
//             <td valign="top">
//                 <Routes>
//                 <Route path="/" element={ <Navigate to="Dashboard" />} />
//                 <Route path="Account" element={<h1>Account</h1>} />
//                 <Route path="Dashboard" element={<Dashboard />} />
//                 <Route path="Courses/:id/*" element={<Courses />} />
//                 <Route path="Calendar" element={<h1>Calendar</h1>} />
//                 <Route path="Inbox" element={<h1>Inbox</h1>} />
//               </Routes>
//             </td> 
//           </tr>
//         </table>
//       </div>
//   );}