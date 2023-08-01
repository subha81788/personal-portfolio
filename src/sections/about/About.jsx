import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import CV from "../../assets/Subhashis-Nath-Resume-Fullstack-Java-8Yrs.pdf"
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <h2>About Me</h2>
        <div className="about__cards">
          {data.map((item) => (
            <Card key={item.id} className="about__card">
              <span className="about__card-icon">{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
        </div>
        <p>
          Building projects my clients love have always been my passion. Being
          in the Backend Development for over 8+ years within which the past 3
          years in the Full-Stack Web Development and serving more than 10 happy
          clients worldwide, I'm always motivated to do more!
        </p>
        <p>
          Hi, my name is Subhashis Nath. I'm a Software Engineer from India, having
          a Bachelors degree in Computer Science.
        </p>
        <p>
          I'm a Customer Focused, Result-oriented IT professional with hands-on
          Development experience with Spring Boot, React JS, Azure Devops,
          Node JS with Typescript, Unit & Integration Testing, Deployment & CI/CD
          pipeline Integration in diversified domains (viz IOT, Real Estate, Cash Payments,
          Virtualization & Embedded) during exposure to multiple phases of Software
          Engineering.
        </p>
        <p>
          My top priority is to get your business online the right way, giving
          you industry-standard design and all the functionality you need to
          operate smoothly online. Get in touch today with the details of your
          project let's get started! Check out my resume below!
        </p>
        <div className="about__cv-download">
          <a href={CV} download className="btn primary" data-aos="fade-up">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About