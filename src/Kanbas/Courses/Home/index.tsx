import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    // <table id="wd-home">
    //   <tr>
    //         <td valign="top">
<div className="d-flex" id="wd-home">
    <div className="flex-fill">
        <Modules />
    </div>
        {/* </td> */}
        {/* <td valign="top"> */}
    <div className="d-none d-md-block">    
        <CourseStatus />
    </div>
</div>
//          </td> 
//     </tr>
// </table> 
); }


// import Modules from "../Modules";
// import CourseStatus from "./Status";
// export default function Home() {
//   return (
//     <table id="wd-home">
//       <tr>
//         <td valign="top">
//           {" "}
//           <Modules />{" "}
//         </td>
//         <td valign="top">
//           {" "}
//           <CourseStatus />{" "}
//         </td>
//       </tr>
//     </table>
//   );
// }