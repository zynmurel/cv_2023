import { Box } from "@mui/system";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiPhotoshop,
  DiReact,
} from "react-icons/di";
import { FaLaravel, FaPhoneAlt } from "react-icons/fa";
import { FcOpenedFolder } from "react-icons/fc";
import { SiNextdotjs, SiPhp } from "react-icons/si";

import { BsGithub } from "react-icons/bs";

const Infos = () => {
  //const skills = ['JAVASCRIPT', 'HTML', 'CSS', 'REACT', 'PHOTOSHOP', 'LARAVEL'];
  const skills = [
    {
      title: "JAVASCRIPT",
      color: "yellow",
      fontSize: "25px",
      percent: "80%",
    },
    {
      title: "PHP",
      color: "rgba(78,92,147)",
      fontSize: "25px",
      percent: "65%",
    },
    {
      title: "HTML",
      color: "rgb(255, 145, 0)",
      fontSize: "25px",
      percent: "85%",
    },
    {
      title: "CSS",
      color: "rgb(45, 189, 255)",
      fontSize: "25px",
      percent: "80%",
    },
    {
      title: "REACT",
      color: "rgb(45, 189, 255)",
      fontSize: "25px",
      percent: "85%",
    },
    {
      title: "NEXTJS",
      color: "white",
      fontSize: "25px",
      percent: "45%",
    },
    {
      title: "REACT NATIVE",
      color: "rgb(45, 189, 255)",
      fontSize: "25px",
      percent: "60%",
    },
    {
      title: "LARAVEL",
      color: "red",
      fontSize: "18px",
      percent: "50%",
    },
    {
      title: "PHOTOSHOP",
      color: "rgb(45, 189, 255)",
      fontSize: "25px",
      percent: "80%",
    },
  ];
  const education = [
    {
      school: "BOHOL ISLAND STATE UNIVERSITY",
      address: "BS Information Technology / Magsija, Balilihan, Bohol",
      year: "2019-2023",
    },
    {
      school: "BILAR NATIONAL HIGH SCHOOL",
      address: "Yanaya, Bilar, Bohol",
      year: "2011-2015",
    },
    {
      school: "BILAR CENTRAL ELEMENTARY SCHOOL",
      address: "Poblacion, Bilar, Bohol",
      year: "2005-2011",
    },
  ];
  const skillsList = (skillArr) =>
    skillArr.map((sk) => {
      return (
        <div key={sk.title}>
          <div className="skl">
            {sk.title === "LARAVEL" && (
              <FaLaravel color={sk.color} fontSize={sk.fontSize} />
            )}
            {sk.title === "PHOTOSHOP" && (
              <DiPhotoshop color={sk.color} fontSize={sk.fontSize} />
            )}
            {sk.title === "REACT" && (
              <DiReact color={sk.color} fontSize={sk.fontSize} />
            )}
            {sk.title === "REACT NATIVE" && (
              <DiReact color={sk.color} fontSize={sk.fontSize} />
            )}
            {sk.title === "JAVASCRIPT" && (
              <DiJavascript1 color={sk.color} fontSize={sk.fontSize} />
            )}
            {sk.title === "CSS" && (
              <DiCss3 color={sk.color} fontSize={sk.fontSize} />
            )}
            {sk.title === "HTML" && (
              <DiHtml5 color={sk.color} fontSize={sk.fontSize} />
            )}
            {sk.title === "NEXTJS" && (
              <SiNextdotjs color={sk.color} fontSize={sk.fontSize} />
            )}
            {sk.title === "PHP" && (
              <SiPhp color={sk.color} fontSize={sk.fontSize} />
            )}
            <h4>{sk.title}</h4>
          </div>
          <div className="percentbox">
            <div className="percent" style={{ width: sk.percent }}></div>
          </div>
        </div>
      );
    });
  const educationList = (eduArr) =>
    eduArr.map((edu) => (
      <div className="org">
        <h2 className="orgtitle">{edu.school}</h2>
        <div className="posint">
          <p className="position" style={{ fontStyle: "italic" }}>
            {edu.address}
          </p>
          <p style={{ marginTop: 0, marginBottom: 5 }}>{edu.year}</p>
        </div>
      </div>
    ));
  return (
    <Box className="infos">
      <div className="info2">
        <div className="info2margin">
          <div className="title">
            <h1 className="exp">EXPERIENCE</h1>
          </div>

          <div className="org">
            <h2 className="year">2021-2022</h2>
            <h2 className="orgtitle">GRAPHIC DESIGN</h2>
            <div className="posint">
              <ul>
                <li>
                  Worked with school organization ( SSG and Campus Access ) and
                  created images and layouts using Adobe Photoshop.
                </li>
              </ul>
            </div>
          </div>

          <div className="org">
            <h2 className="year">2021-2022</h2>
            <h2 className="orgtitle">SOFTWARE DEVELOPMENT</h2>
            <div className="posint">
              <ul>
                <li>
                  Developed a Web Application for Water Billing System using
                  React (Front-end) and Laravel (Back-end) as part of our
                  Capstone Project and Research.
                </li>
                <li>
                  Gained practical experience in Web development during an
                  internship focused on Digital Transformation.
                </li>
                <li>
                  Collaborated with fellow interns to create the OJT Attendance
                  Web System using React and GraphQL for our final group
                  project.
                </li>
              </ul>
            </div>
          </div>

          <div className="title">
            <h1 className="exp">EDUCATION</h1>
          </div>
          {educationList(education)}
        </div>
        <div className="info2margin">
          <div className="org">
            <h2 className="orgtitleproject">WEB DEVELOPMENT PROJECTS</h2>
            <div className="skl" style={{ margin: "0 0 5px 0", fontSize: 15 }}>
              <BsGithub fontSize={"21px"} />
              <h4 style={{ margin: "0 0 0 5px" }}>Github Repositories:</h4>
            </div>
            <ul>
              <li>
                <a
                  href="https://github.com/zynmurel/DOTA2-HTML-CSS"
                  target="_blank"
                >
                  DOTA 2 ( HTML / CSS )
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zynmurel/DOTA2-ReactApp"
                  target="_blank"
                >
                  DOTA 2 ( React )
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zynmurel/TodoList-ReactNative"
                  target="_blank"
                >
                  Todo List ( React Native )
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zynmurel/waterBilling1"
                  target="_blank"
                >
                  Water Billing App Frontend ( React )
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zynmurel/waterbillingBackendv2"
                  target="_blank"
                >
                  Water Billing App Backend ( Laravel )
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zynmurel/WaterMeterReader"
                  target="_blank"
                >
                  Water Billing Mobile App ( React Native )
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="info1">
        <div className="line"></div>
        <div className="contacts">
          <div className="title">
            <div className="color"></div>
            <h1>PERSONAL INFO</h1>
          </div>
          <div className="skillsinfo">
            <div className="pinfo" style={{ marginTop: "20px" }}>
              <h3>ADDRESS</h3>
              <p>Poblacion, Bilar, Bohol</p>
            </div>

            <div className="pinfo" style={{ marginTop: "20px" }}>
              <h3>PHONE</h3>
              <p>+639307038821</p>
            </div>

            <div className="pinfo" style={{ marginTop: "20px" }}>
              <h3>EMAIL</h3>
              <p>comingues99@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="skills">
          <div className="title">
            <div className="color"></div>
            <h1>SKILLS</h1>
          </div>
          <div className="skillsinfo">{skillsList(skills)}</div>
        </div>
        <div className="line"></div>
      </div>
    </Box>
  );
};

export default Infos;
