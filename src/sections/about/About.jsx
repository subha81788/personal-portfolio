import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import './about.css'

const About = ({ cv, downloadAs }) => {
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
          years been into the Full-Stack Web Development and serving more than
          10 happy global clients worldwide, I'm always motivated to do more!
        </p>
        <p>
          I have worked in full-time employment with LTIMindtree Limited,
          Capgemini Technology Services India Limited, Harman Connected Services
          and Alumnus Software Limited.
        </p>
        <p>
          Few of their highly prestigious clients I worked for includes but are not
          limited to are A Swedish multinational Telecommunication & Networking company,
          one of the top British multinational bank, an American multinational Corporation
          specialized selling Data storage devices & Cloud Computing, an American Virtualization
          Technology company and an American Microprocessor Development & Semiconductor company.
        </p>
        <p>
          Hi, my name is Subhashis Nath. I'm a Software Engineer from India,
          having a Bachelors in Technology degree in Computer Science & Engineering.
        </p>
        <p>
          I'm a Customer Focused, Result-oriented IT professional having hands-on
          Development experience using Spring Boot, React JS, Docker Container,
          Azure Functions & Web Apps Deployment & CI/CD pipeline Integration,
          Node JS with Typescript, Unit & Integration Testing in diversified
          domains (viz IOT, Real Estate, Cash Payments, Virtualization &
          Embedded) during exposure to multiple phases of Software Engineering.
        </p>
        <p>
          My top priority is to get your business the right way, giving you
          robust web applications having rich user interfaces built on top of 
          microservice oriented architecture over the cloud with high availability,
          performance, scalability, design flexibility and all the functionality you
          need to operate your business smoothly.
        </p>
        <p>
          Get in touch today with the details of your project and let's get
          started!
        </p>
        <p>Please check out my resume below!</p>
        <div className="about__cv-download-cta">
          <a href={cv} download={downloadAs} className="btn primary" data-aos="fade-up">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About