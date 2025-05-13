# Node.js Application with MongoDB in Kubernetes

## Overview

This project demonstrates deploying a Node.js application that connects to a MongoDB database inside a Kubernetes cluster managed by Minikube. The Node.js app serves data fetched from MongoDB via a REST API.

### Technologies Used:
- **Node.js** for the backend.
- **MongoDB** as the database.
- **Kubernetes** for orchestration.
- **Docker** for containerization.
- **Minikube** for local Kubernetes testing.

## Setup Instructions

1. **MongoDB Deployment**: MongoDB is deployed in the Kubernetes cluster using the Bitnami MongoDB Docker image. The app connects to MongoDB using environment variables for the MongoDB URI and database name.

2. **Node.js Application**: The Node.js app fetches data from the `test` collection in the `mydatabase` database. The app runs in a Kubernetes-managed pod.

3. **Kubernetes Deployment**: The app is deployed as a containerized service inside Kubernetes. The MongoDB URI and database name are passed as environment variables.

4. **Accessing the Application**: Once the application is deployed, it can be accessed via the Minikube URL, which exposes the Node.js service on a NodePort.

## Troubleshooting

- Ensure MongoDB is running properly and the data is correctly inserted into the database.
- Check the Node.js application logs if the data is not being displayed.

## Conclusion

This project shows how to deploy a Node.js application connected to MongoDB in a Kubernetes environment. The Node.js app serves data from MongoDB over a REST API.
# sit323-2025-prac9p
