import { Link } from "react-router-dom";
export default function TOC() {
  return (
    <ul>
      <li>
        <Link id="wd-a" to="/LandingPage">
          Landing Page
        </Link>
      </li>
      <li>
        <Link id="wd-a1" to="/LandingPage/Lab1">
          Lab 1
        </Link>
      </li>
      <li>
        <Link id="wd-a2" to="/LandingPage/Lab2">
          Lab 2
        </Link>
      </li>
      <li>
        <Link id="wd-a3" to="/LandingPage/Lab3">
          Lab 3
        </Link>
      </li>
      <li>
        <Link id="wd-k" to="/Kanbas">
          Kanbas
        </Link>
      </li>
      <li>
        <a id="wd-github" href="https://github.com/Aaron-Zhu-Github/kanbas-react-web-app-cs5610-fa24/tree/a1">GitHub Source Code</a>
      </li>
    </ul>
  );
}
