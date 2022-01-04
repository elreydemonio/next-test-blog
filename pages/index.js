import Layout from "../components/Layout";
import { skills, experiences } from "../profile";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img src="dante.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Rayn Ray</h1>
                <h3>Full</h3>
                <p>
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae atque ullam perferendis harum, nisi porro voluptate,
                  iste consequuntur enim reprehenderit architecto consectetur
                  cum? Totam ad molestias natus illum illo officia.
                </p>
                <a href="/hireme">Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-bdy">
              <h1>Skills</h1>
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Experience</h1>
              <ul>
                {experiences.map(({ title, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sint excepturi ea explicabo. Illum suscipit illo, porro
                      quisquam voluptatem officiis fugiat vel animi aliquam
                      inventore rem. Quo laudantium temporibus cupiditate. Aut?
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/hireme">
                <a className="btn btn-light">Know More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
