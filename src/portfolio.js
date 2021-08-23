import emoji from "react-easy-emoji";

import doblelogo from "./assets/img/icons/common/doble.png";
import daiictlogo from "./assets/img/icons/common/daiict.png";

export const greetings = {
	name: "Karn Vadaliya",
	title: "Hi, I'm Karn",
	description1:"A technology enthusiast and proficient software engineer with good hands-on experience and extensive skills in domains like software design and development, scripting, web application development, code analysis, cloud, and cross-platform development. I am very passionate and meticulous about my work and have the ability to find innovative solutions to real-world problems. ",
	description2:"A team player with proven track of excellent work ethic, leadership, unparalleled attention to detail, ability to produce high-quality code and great sense of humor.",
};

export const openSource = {
	githubUserName: "KarnVadaliya",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/KarnVadaliya",
	instagram: "https://www.instagram.com/karn_1597",
	twitter: "https://twitter.com/VadaliyaKarn",
	github: "https://github.com/KarnVadaliya",
	linkedin: "https://www.linkedin.com/in//karn-vadaliya/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"PASSIONATE SOFTWARE AND FULL-STACK DEVELOPER WHO IS ALWAYS KEEN TO LEARN NEW TECHNOLOGIES",
	skills: [
		emoji(
			"⚡ Develop and design innovative solutions across a variety of software platforms"
		),
		emoji(
			"⚡ Design, manage and manipulate relational and non-relational databases"
		),
		emoji(
			"⚡ Create highly interactive fullstack web applications"
		),
		emoji(
			"⚡ Progressive Web Applications in single page application stacks"
		),
		emoji(
			"⚡ Integration of third party cloud services such as AWS"
		),
		emoji(
			"⚡ Excellent verbal and written communication"
		),
	],

	softwareSkills: [
		{
			skillName: "java",
			fontAwesomeClassname: "logos:java",
			link: "https://www.oracle.com/java/",
		},
		{
			skillName: "CSharp",
			fontAwesomeClassname: "vscode-icons:file-type-csharp",
			link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
		},
		{
			skillName: "html5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
			link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
			link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
			link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
			link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
			link: "https://www.npmjs.com/",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
			link: "https://nodejs.org/en/",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
			link: "https://www.mysql.com/",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
			link: "https://www.mongodb.com/",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
			link:"https://aws.amazon.com/"
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
			link:"https://git-scm.com/",
		},
		{
			skillName: "json",
			fontAwesomeClassname: "vscode-icons:file-type-json",
			link:"https://www.json.org/json-en.html",
		},
		{
			skillName: "xml",
			fontAwesomeClassname: "vscode-icons:file-type-xml",
			link:"https://developer.mozilla.org/en-US/docs/Web/XML",
		},
		{
			skillName: "spring",
			fontAwesomeClassname: "logos:spring-icon",
			link:"https://spring.io/",
		},
		{
			skillName: "javaEE",
			fontAwesomeClassname: "vscode-icons:file-type-java",
			link:"https://www.oracle.com/java/technologies/java-ee-glance.html",
		},
		{
			skillName: "hibernate",
			fontAwesomeClassname: "logos:hibernate",
			link:"https://hibernate.org/",
		},
		{
			skillName: "elasticsearch",
			fontAwesomeClassname: "logos:elasticsearch",
			link:"https://www.elastic.co/",
		},
		{
			skillName: "redis",
			fontAwesomeClassname: "logos:redis",
			link:"https://redis.io/",
		},
		{
			skillName: "rabbitMQ",
			fontAwesomeClassname: "logos:rabbitmq-icon",
			link:"https://www.rabbitmq.com/",
		}
	],
};

export const SkillBars = [
	{
		Stack: "Software Development", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "85", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "85",
	},
	{
		Stack: "Cloud",
		progressPercentage: "75",
	},
];

export const educationInfo = [
	{
		schoolName: "Northeastern University",
		link:"https://www.northeastern.edu/",
		subHeader: "Master of Science in Information Systems",
		duration: "August 2019 - December 2021",
		desc: "Boston, Massachusetts, United States",
		cpi:"3.87",
		desc2: "Relevant Courses",
		descBullets: "Application Engineering Development, Data Structures and Algorithms, Web Design and User Experience, Web Development, Network Structures and Cloud Computing, Big Data Applications and Indexing",
	},
	{
		schoolName: "Dhirubhai Ambani Institute of Information and Communication Technology",
		link:"https://www.daiict.ac.in/",
		subHeader: "Bachelor of Technology in Information and Communication Technology",
		duration: "August 2015 - May 2019",
		desc: "Gandhinagar, Gujarat, India",
		cpi:"3.5",
		desc2: "Relevant Courses",
		descBullets:"Software Engineering, Algorithms, Object-Oriented Programming, Database Design & Management Systems",
	},
];

export const experience = [
	{
		role: "Software Engineer Co-op",
		company: "Doble Engineering",
		link:"https://www.doble.com/",
		companylogo: doblelogo,
		date: "January 2021 – August 2021",
		desc: "Marlborough, Massachussetts, US",
		descBullets: [
			"Worked on resolving multithreading design issues in a C++ driver and developed a diagnostic tool in C# using .Net Framework for testing various diagnostics scripts across different system simulators",
			"Reduced cost by 90% by implementing an alternative to an external licensed library used in the software",
			"Contributed to fixing issues in a project release management tool developed in C# using .Net Framework for managing new software releases within the company",
			"Implemented techniques for a project to export managed code in C# to be used as a standard native .dll file which can be accessed by unmanaged code in C++ that helped in reducing the problem of cross-team collaboration",
			"Designed and deployed in production a licensing application using React JS that is used by all clients",
		],
	},
	{
		role: "Web Developer Intern",
		company: "DAIICT",
		link:"https://www.daiict.ac.in/",
		companylogo: daiictlogo,
		date: "May 2018 – July 2018",
		desc: "Gandhinagar, Gujarat, India",
		descBullets: [
			"Developed a full-stack web application using HTML, CSS, Bootstrap, JavaScript, jQuery, and Firebase, which helps the customer to visualize different combinations of tiles and followed an agile development practice such as Scrum",
		],
	}
];

export const projects = [
	{
		name: "Big Data Indexing Web Application",
		timeframe:"Jan 2021 - Apr 2021",
		descBullets: [
			"Developed a Spring Boot RESTful web application to store schema less structured JSON objects to Redis key-value store",
			"Implemented caching mechanism for the JSON objects and validating the cache using ETag",
			"Designed indexing of the JSON object to Elastic Search via RabbitMQ queue to run search queries on the indexed data",
		],
		github: "https://github.com/KarnVadaliya/Big-Data",
	},
	{
		name: "Restaurant Reservation System",
		timeframe:"Nov 2020 - Dec 2020",
		descBullets: [
			"Designed and developed a reservation system using technologies Java, Spring MVC and Hibernate in NetBeans",
			"Added functionalities such as search, manage, reserve and cancel a booking with right email notification",
		],
		github: "https://github.com/KarnVadaliya/Restaurant-Reservation-System",
	},
	{
		name: "Cloud Web Application",
		timeframe:"Sep 2020 – Dec 2020",
		descBullets: [
			"Built a resilient cloud-based web application with backend in NodeJS by leveraging the use of AWS cloud services created using Terraform such as EC2, EBS, CloudWatch, S3, IAM, Route53 and RDS with MySQL for database",
			"Added Continuous Integration and Deployment using GitHub Actions and Shell Scripting in AWS Code Deploy",
			"Implemented load testing through Apache JMeter that triggers autoscaling, decoupling of microservices through SNS, notification to users on certain events through Lambda and SES and added SSL certificate for security",
		],
		github: "https://github.com/KarnVadaliya/webapp",
	},
	{
		name: "Expert Hiring Application",
		timeframe:"Mar 2020 – Apr 2020",
		descBullets: [
			"Developed a MERN-stack single page web application that allows user to hire professionals for various services like electricians, plumbers etc. and with add-on functionalities like google login and payment integration through PayPal",
			"Worked on a single page application using React JS along with Redux, with Node JS in the middle tier and MongoDB for database management that communicate with backend via RESTful API",
		],
		github: "https://github.com/KarnVadaliya/Expert-Hiring",
		link: "http://expert-hiring-system.herokuapp.com/",
	},
	{
		name: "Weather Application",
		timeframe:"Feb 2020 – Mar 2020",
		descBullets: [
			"Created a weather forecasting site using React JS, Redux and Materialize CSS and hosted it on Heroku server",
			"Implemented the functionality of switching different temperature units with fetching the data through various API calls",
		],
		github: "https://github.com/KarnVadaliya/WeatherForecast",
	},
	{
		name: "NGO Helper System",
		timeframe:"Oct 2019 – Dec 2019",
		descBullets: [
			"Designed a multi-party application with GUI using Swing in Java in NetBeans with source code management in Bitbucket that helps NGOs connect with nearby volunteers, doctors, and pharmacies",
			"Created various workflow requests like donation of products by volunteers, request for volunteers for work by NGO, scheduling an appointment with a doctor by NGO and order for medicines to pharmacies by NGO",
		],
		github: "https://github.com/KarnVadaliya/NGO-Helper-System",
	},
	{
		name: "Transport Office Database Management",
		timeframe:"Sep 2017 – Nov 2017",
		descBullets: [
			"Generated an illustrative sample of a transport office database, in PostgreSQL with end to end functionalities like managing data for driving license and vehicle registration",
			"Formulated an entity-relationship diagram and relational schema and implemented various insert scripts, triggers, stored procedures, and SQL queries to respond to a request raised by a user",
		],
		github: "javascript: void(0)",
	},
];

export const feedbacks = [
	{
		name: "Jeff King",
		position:"Software Manager at Doble Engineering",
		feedback: "Hello there",
	},
	{
		name: "Sai M",
		position:"Engineering Director at Doble Engineering",
		feedback: "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
