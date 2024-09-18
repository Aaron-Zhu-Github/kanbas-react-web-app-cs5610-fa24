import { Link } from "react-router-dom";
export default function TOC() {
  return (
    <ul>
      <li>
        <Link id="wd-a" to="/Labs">
          Labs
        </Link>
      </li>
      <li>
        <Link id="wd-a1" to="/Labs/Lab1">
          Lab 1
        </Link>
      </li>
      <li>
        <Link id="wd-a2" to="/Labs/Lab2">
          Lab 2
        </Link>
      </li>
      <li>
        <Link id="wd-a3" to="/Labs/Lab3">
          Lab 3
        </Link>
      </li>
      <li>
        <Link id="wd-k" to="/Kanbas">
          Kanbas
        </Link>
      </li>
    </ul>
  );
}


// import { Link } from "react-router-dom";
// export default function TOC() {
//     return (
//       <ul>
//         <li><a id="wd-a"  href="#/Labs">Labs</a></li>
//         <li><a id="wd-a1" href="#/Labs/Lab1">Lab 1</a></li>
//         <li><a id="wd-a2" href="#/Labs/Lab2">Lab 2</a></li>
//         <li><a id="wd-a3" href="#/Labs/Lab3">Lab 3</a></li>
//         <li><a id="wd-k"  href="#/Kanbas">Kanbas</a></li>
//         {/* Method 2 for implementing navigation in Single Page Application  */}
//         {/* <li><a id="wd-k"  href="#/Kanbas/Dashboard">Kanbas</a></li> */}

//   </ul>
//   ); }