# MCQ Masters Backend

MCQ Masters Backend is the server-side component of the MCQ Masters platform, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This backend application follows the Model-View-Controller (MVC) architecture pattern to ensure modularity, scalability, and maintainability.

## Features of the platform

- **Replicated CET Portal**: Provides a user interface similar to the official MHT CET portal, enhancing familiarity for students.
- **Practice Tests**: Offers a variety of practice tests covering subjects and topics relevant to the MHT CET syllabus.
- **Real-time Score Calculation**: Instantly calculates and displays scores upon completion of each test, providing immediate feedback to users.
- **Responsive Design**: Ensures compatibility across various devices including desktops, tablets, and mobile phones for seamless access anytime, anywhere.

## Features - Backend

- **Modular Structure**: Organized into models, views, and controllers to separate concerns and improve code organization.
- **RESTful API**: Implements a RESTful API to handle CRUD (Create, Read, Update, Delete) operations for managing users, tests, questions, and other resources.
- **Middleware**: Utilizes middleware functions to handle request processing, authentication, authorization, error handling, and other cross-cutting concerns.
- **Database Interaction**: Interacts with MongoDB database using Mongoose ODM (Object Data Modeling) to define schemas, perform validations, and execute queries.
- **Security Measures**: Implements security best practices such as input validation, data sanitization, password hashing, and protection against common vulnerabilities.
- **Scalability**: Designed with scalability in mind to accommodate future enhancements and increased user traffic.
- **Testing Support**: Includes unit tests and integration tests to ensure the reliability and robustness of the backend functionalities.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AtharvaLitake/Masters-MCQ-Backend.git
