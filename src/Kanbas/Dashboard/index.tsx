// All images in this assignment are from internet
export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5610 Web Development
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/pdp.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5010 Programming Design Paradigm
              </a>
              <p className="wd-dashboard-course-title">
                Java developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>          <div className="wd-dashboard-course">
            <img src="/images/algorithms.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5800 Algorithms
              </a>
              <p className="wd-dashboard-course-title">
                software engineering
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>          <div className="wd-dashboard-course">
            <img src="/images/cloud.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS66200 Fundamentals of Cloud Computing
              </a>
              <p className="wd-dashboard-course-title">
                Cloud Administrator
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>          <div className="wd-dashboard-course">
            <img src="/images/dms.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5200 Database Management System
              </a>
              <p className="wd-dashboard-course-title">
                SQL Developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>          <div className="wd-dashboard-course">
            <img src="/images/mad.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5520 Mobile Application Development
              </a>
              <p className="wd-dashboard-course-title">
                software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>          <div className="wd-dashboard-course">
            <img src="/images/ai.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS5100 Foundations of Artificial Intelligence	
              </a>
              <p className="wd-dashboard-course-title">
                AI
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
        </div>
        </div>
      </div>
  );}