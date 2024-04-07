# MERN Book App Deployment on Kubernetes

This repository contains the source code and deployment configurations for a MERN Book Application deployed on a Kubernetes cluster using Minikube. The application utilizes three types of MongoDB databases: MongoDB Atlas online database, MongoDB local database deployed as a deployment, and MongoDB local database deployed as a StatefulSet.

## Features

- **MongoDB Atlas Online Database**: Utilizes MongoDB Atlas, a fully managed cloud database service, for online database operations.
- **Local MongoDB Database Deployment**: Includes configurations to deploy a local MongoDB database using both a deployment and a StatefulSet in the Kubernetes cluster.
- **Dockerized Frontend and Backend**: Dockerfiles are provided for both the frontend and backend components of the MERN app, allowing for easy containerization and deployment.
- **Minikube Deployment**: Instructions and Kubernetes manifest files are provided to deploy the application on a Minikube Kubernetes cluster.

## Components

- **Frontend**: React.js application for the frontend interface of the Book App.
- **Backend**: Node.js and Express.js server serving as the backend API for the Book App.
- **MongoDB Databases**:
  - Online database using MongoDB Atlas.
  - Local database deployed as a deployment in Kubernetes.
  - Local database deployed as a StatefulSet in Kubernetes.

## Prerequisites

Before deploying the MERN Book App on Kubernetes, ensure the following prerequisites are met:

- **Minikube**: Install Minikube to create a local Kubernetes cluster.
- **kubectl**: Install kubectl, the Kubernetes command-line tool, to interact with the Kubernetes cluster.
- **Docker**: Install Docker to build and manage container images.
- **MongoDB Atlas Account**: Sign up for a MongoDB Atlas account to use the online database service.

## Deployment Instructions

1. **Set up Minikube**: Start Minikube to create a local Kubernetes cluster.
2. **Build Docker Images**: Build Docker images for the frontend and backend components using the provided Dockerfiles.
3. **Push Docker Images**: Push the built Docker images to Docker Hub or your preferred container registry.
4. **Deploy MongoDB Databases**: Deploy the MongoDB databases using the provided Kubernetes manifest files for both deployment and StatefulSet configurations.
5. **Deploy Backend**: Deploy the backend Node.js server using the Kubernetes deployment manifest file.
6. **Deploy Frontend**: Deploy the React.js frontend application using the Kubernetes deployment manifest file.
7. **Access the Application**: Access the deployed Book App through the exposed service endpoint on the Minikube cluster.

Detailed deployment instructions and Kubernetes manifest files are provided in the respective directories.

## Contributors

- [Your Name](https://github.com/your-username)

## License

This project is licensed under the [MIT License](LICENSE).
