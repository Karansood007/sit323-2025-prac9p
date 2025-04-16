# SIT323 6.1P – Kubernetes Deployment

## 🔧 What This Project Does
This is a simple Node.js app deployed on a Kubernetes cluster using Minikube. It displays a welcome message via Express server.

## 🚀 Steps Performed
1. Created Node.js app using Express.
2. Dockerized the app with a Dockerfile.
3. Built and pushed image to Docker Hub: `karansood07/node-app:1.0`
4. Created `deployment.yaml` and `service.yaml` files.
5. Started Minikube using Docker driver.
6. Deployed app using `kubectl apply -f`.
7. Accessed the app at `http://127.0.0.1:<your-port>`.

## 📂 Files Included
- `app.js` – Express server
- `Dockerfile` – Container config
- `package.json` – Node.js dependencies
- `deployment.yaml` – Kubernetes deployment
- `service.yaml` – Kubernetes service
- `README.md` – This guide

## 🌐 Demo Screenshot
![screenshot](./screenshot.png)

## 📎 Usage
Run:
```bash
minikube start --driver=docker
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
minikube service node-app-service
