// All images in this assignment are from internet
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                      CS1234 React JS
                  </h5>
                  <p className="card-text">
                      CS1234.21034.201510
                      <h6>202510_2 Fall 2024</h6>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/pdp.jpg" width="100%" alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                      CS5010 Programming
                  </h5>
                  <p className="card-text">
                      CS5010.27024.201510
                      <h6>202510_2 Fall 2024</h6>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/algorithms.jpg" width="100%" alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                      CS5800 Algorithms
                  </h5>
                  <p className="card-text">
                      CS5800.23032.201510
                      <h6>202510_2 Fall 2024</h6>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px"  }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/cloud.jpg" width="100%" alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                      CS6620 Cloud Comp
                  </h5>
                  <p className="card-text">
                      CS6620.29031.201510
                      <h6>202510_2 Fall 2024</h6>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px"  }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/dms.jpg" width="100%" alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                      CS5200 Database
                  </h5>
                  <p className="card-text">
                      CS5200.28010.201510
                      <h6>202510_2 Fall 2024</h6>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px"  }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/mad.jpg" width="100%" alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                      CS5520 Mobile App
                  </h5>
                  <p className="card-text">
                      CS5520.22504.201510
                      <h6>202510_2 Fall 2024</h6>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px"  }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/ai.jpg" width="100%" alt=""/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                      CS5100 Artificial
                  </h5>
                  <p className="card-text">
                      CS5100.24200.201510
                      <h6>202510_2 Fall 2024</h6>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}