import Image1 from '../../assets/project1.jpg'
import Image2 from '../../assets/project2.jpg'
import Image3 from '../../assets/project3.jpg'
import Image4 from '../../assets/project4.jpg'
import Image5 from '../../assets/project5.jpg'
import Image6 from '../../assets/project6.jpg'
import Image7 from '../../assets/project7.jpg'
import Image8 from '../../assets/project8.jpg'
import Image9 from '../../assets/project9.jpg'

const data = [
  {
    id: 0,
    category: "backend",
    image: Image6,
    title: "Knowledge Management",
    desc: ["POC involved sending notification to Nagarro subscribers when a HR creates or updates a document in Onedrive or updates the content in a MS Sharepoint page.", "Bootstrap a new python Django app and integrated Azure Event Hub with MS Onedrive using MS Graph apis. Thus the subscriber could receive change notification event payloads when a new file is uploaded to Onedrive or file content is updated in an existing file in Onedrive.", "The payload of above events contains subscription id of the file change event subscribers. Using that subscription id we implemented OAuth2 On-Behalf-Of or delegated authorization token flow as follows.", "Write logic to fetch refresh token on behalf of the subscriber first. On successful retrieval we could fetch access token further which is used to interact with MS Graph Apis on behalf of the subscriber till the access token gets expired. Then we had to renew the access token using the refresh token retrieved earlier. Used python MSAL lib.", "Download files for which change notification received using relevant MS graph api invocation.", "Implemented a parser module to parse these pdf/docx/doc using python libraries.", "Implemented rest apis to CRUD parsed paragraph texts into Azure CosmosDB for MongoDB api.", "Secured the sensitive credentials in Azure Key vault. Kept other config or setup parameters in dotenv files."],
    demo: "",
    github: "",
  },
  {
    id: 1,
    category: "fullstack",
    image: Image1,
    title: "Netigate In-app Survey Platform Integration",
    desc: ["Create a service and related route and apis in ExpressJS and Typescript which could invoke Netigate Rest Apis and can crud data in Azure CosmosDB.", "Implemented an api to check if an active survey is available at user home location at user login time and return a user specific survey url in Netigate platform. If user clicks on this link and user is not already part of Netigate sendout list for that particular survey, then add user to that list at runtime. A set of Netigate api invocation happens in the background creating recipient id for that user for that on-going survey without any manual intervention.", "Create a dialog in ReactJS to prompt user once they login for an in-app survey if available. User could take the survey by clicking on “Take me to the survey” button which would open external Netigate survey page in a new tab in the browser."],
    demo: "http://subhashisnath.com",
    github: "https://github.com/subha81788",
  },
  {
    id: 2,
    category: "fullstack",
    image: Image2,
    title: "Real Estate Fault Reporting Platform",
    desc: ["Develop a web application to facilitate Fault/Issue Reporting experience by Employees in the Customer system. Contribute to both Backend and Front end development.", "Write few screens using React Js Functional Components, Hooks & Router using vanilla js. Used customer’s Design system to style all the components.", "One custom Accordion component was written using React as such component is not available in the existing Design system. Needed to extract styles from the existing design system to create similar look & feel to the custom component.", "Implemented Fault Reporting backend using Node Js, Express Js, Typescript. Database is Postgres.", "Write SQL queries to query this database having multiple tables containing relational fault report data using foreign key references.", "Implemented Azure Webjob to above Database every 5 minutes to fetch newly reported fault &, process them. Based on the Fault Reported location and type of fault reported a workorder request is dispatched to one of the Azure Functions. Each such Function is responsible to integrate with 3rd party vendor Rest apis used to actually create a new workorder in the corresponding vendor. In response workorder id or error is returned to the Azure function app and then to Webjob. Webjob sends this status to the Fault Reporter via Email notification.", "Azure Webapp is written in Node Js using Typescript. Data is stored in Postgres DB. Emailer is written using nodemailer & handlebars npm."],
    demo: "http://subhashisnath.com",
    github: "https://github.com/subha81788",
  },
  {
    id: 3,
    category: "backend",
    image: Image3,
    title: "Workplace Seat Booking Application Upgradation",
    desc: ["Upgrade Deskbooking backend Java Spring boot application. It was suffering from cosmos db connection shutdown intermittently and java memory leak issue in Azure Production deployment.", "Migrate Java 8 to Java 17, Spring Boot to v3, Azure Cosmos DB Java SDK to v4.", "Used Java SDK new feature such as Record, Sealed classes etc. Renamed Java EE namespace from javax to jakarta. Replaced mvn build agent by gradle.", "Introduced Redis caching to data retrieval CRUD apis. Get api data is cached on cache miss of the keys using Spring Data Redis. Data save and update through api triggers Azure Functions to evict related key values from the Redis. Cache eviction logic is taken care by Azure Function which is external to Spring Boot Azure webapp to decouple cache eviction from the app itself to mantain cache data integrity. Used Redis datatypes to store data instead of java collections."],
    demo: "http://egatortutorials.com http://subhashisnath.com",
    github: "https://github.com/egattor",
  },
  {
    id: 4,
    category: "fullstack",
    image: Image4,
    title: "Office Management Platform",
    desc: ["Develop a web application which facilitates client’s employees and business partners.", "Write Backend app using Express Js Typescript and deployed to Azure webapp.", "Automate Employee Desk Booking experience. On successful booking an Azure Function having cosmos db input trigger sends email notification with Desk booking details to the user. Code is written using Java, Spring Boot, Cosmos db, Azure Functions.", "Introduced Redis caching to data retrieval CRUD apis. Used Azure Function for cache eviction. Used Redis datatypes to store data instead of typescript data types."],
    demo: "http://subhashisnath.com",
    github: "https://github.com/subha81788",
  },
  {
    id: 5,
    category: "fullstack",
    image: Image5,
    title: "Smart Inventory Management using Autonomous Drones",
    desc: ["Develop Indoor Inventory Management portal for autonomous drones.", "Write Rest apis using Java 17, Spring boot, React JS, Mqtt, Docker.", "Worked as a Fullstack developer, write few of the screens using React Js.", "Participated in different phases of the delivery(development, unit test, ci cd pipeline creation, defect fixes) to release this application on agreed time without compromising quality."],
    demo: "http://subhashisnath.com",
    github: "https://github.com/subha81788",
  },
  {
    id: 6,
    category: "backend",
    image: Image6,
    title: "RTGS Payment Platform",
    desc: ["Develop a Simulator for couple of Business-critical Core-Banking Microservices viz EBBS and TsaaS in RTGS Payment Flow. The simulator mocks expected response payload & response status from these external Core Banking B2B Endpoints. Thus making regular Automated Sprint Tests & Regression Tests independent of the Core Banking system.", "Significant contribution developing Automation Test Framework using Spring Boot, JDBC, ELK, Cucumber"],
    demo: "http://subhashisnath.com",
    github: "https://github.com/subha81788",
  },
  {
    id: 7,
    category: "backend",
    image: Image7,
    title: "Next Generation Security using SSO",
    desc: ["Implement an all-in-one SSO solution using Spring Cloud Gateway and Spring Security SSO securing access to a number of sensitive Business Apis and Web Portals using PCF PingFederate SSO Service plan as Identity Provider (IdP). The project is going to be a high impact solution eventually modifying the existing security model of almost all projects under ESRS.", "Implement an Authentication Filter to support both BASIC, SecureID mode of SSO authentication, differentiated by AuthMode header, and integrate the filter with above Gateway."],
    demo: "http://subhashisnath.com",
    github: "https://github.com/subha81788",
  },
  {
    id: 8,
    category: "backend",
    image: Image8,
    title: "360-Degree Service of Smart Devices with Actionable Intelligence",
    desc: ["Write PCF Spring Boot Scheduler service which monitors some table every minute, send notification once there is an update in table entries. The notification message contains Device details such as serial number, product type and api status as payload and is routed to message queue."],
    demo: "http://subhashisnath.com",
    github: "https://github.com/subha81788",
  },
  {
    id: 9,
    category: "backend",
    image: Image9,
    title: "Remote Service Authentication",
    desc: ["Write Micro service endpoints and corresponding API Gateway Controllers to authenticate inbound requests using Spring, Jersey and Http basic authentication and Api Key concept. Deploy the Services in PCF. Development and Maintenance for Remote Access to different Dell IOT Storage Products using complex cryptography techniques viz Bouncy Castle and OpenSSL to generate X.509 Certificates and ensure secure Https communication between EMC Storage Device and customer Gateway."],
    demo: "http://subhashisnath.com",
    github: "https://github.com/subha81788",
  },
];


export default data