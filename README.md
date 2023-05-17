# ShareMe

ShareMe is a social media application that allows users to share and discover inspiring images with basic descriptions. It provides a platform for users to connect, explore, and engage with each other's content. This README file provides an overview of the application, its features, and instructions for setting up and running the application.

## Features

### User Authentication

- Users can create accounts and sign in using their Google accounts through OAuth login.
- Secure authentication process ensures the privacy and security of user data.

### Pins

- Users can create "pins" by uploading images along with basic descriptions.
- Pins can be downloaded or saved by other users who find them interesting or inspiring.
- Each pin includes information about the user who uploaded it, allowing users to discover and follow other users with similar interests.

### Interactions

- Users can leave comments on pins, promoting engagement and discussion among users.
- The comments section allows users to share their thoughts, provide feedback, or ask questions related to a particular pin.

### Frontend

- The frontend of the application is developed using React.js, a popular JavaScript library for building user interfaces.
- Tailwind CSS, a utility-first CSS framework, is used for styling the application, ensuring a responsive and visually appealing design.

### Backend

- The backend of the application is powered by Sanity.io, a headless content management system (CMS).
- Sanity.io provides a flexible and scalable infrastructure for managing and delivering content, allowing seamless content updates and integrations.
- The backend handles user authentication, pin uploads, comments, and data storage.

## Prerequisites

Before setting up and running the application, ensure you have the following prerequisites installed:

- Node.js (version X.X.X)
- NPM (version X.X.X)

## Installation

Follow these steps to set up the ShareMe application:

1. Clone the repository to your local machine:

- git clone https://github.com/your-username/ShareMe.git

2. Change to the project directory:

- cd shareme

3. Install the dependencies:

- npm i

## Configuration

To configure the application, follow these steps:

1. Create a project on the Google Cloud Platform and obtain the necessary credentials for Google OAuth.
2. Configure the Sanity.io backend with your project credentials and settings.
3. Update the configuration files in the project with your specific details (e.g., API keys, backend URL, etc.).

## Usage

To start the application locally, run the following command in the project directory:

- npm run start

This will start the development server, and you can access the application by opening your browser and navigating to `http://localhost:3000`.

## Deployment

To deploy the application to a production environment, you can follow the deployment guidelines provided by the respective platforms:

- React.js deployment guides: [https://create-react-app.dev/docs/deployment/](https://create-react-app.dev/docs/deployment/)
- Sanity.io deployment guides: [https://www.sanity.io/docs/deployment](https://www.sanity.io/docs/deployment)

## Contributing

Contributions to ShareMe are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Acknowledgements

- This application was built using React.js, Tailwind CSS, and Sanity.io. We express our gratitude to the developers and contributors of these
