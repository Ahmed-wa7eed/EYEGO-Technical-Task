# 🚀 Eyego App — Node.js | Docker | Kubernetes | CI/CD

A simple, production-ready Node.js app that returns **"Hello Eyego"** via API. Fully containerized with Docker, deployable to Kubernetes (AWS, GCP, or Alibaba Cloud), and automated via GitHub Actions CI/CD.

---
## 📁 Project Structure

```text
eyego-app/
├── index.js
├── package.json
├── Dockerfile
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
└── .github/workflows/
    ├── ci.yml
    └── cd.yml
```

---
## 📦 Features

- Lightweight Node.js app using Express
- Dockerized (public image available)
- Kubernetes deployment (2 replicas + LoadBalancer)
- CI/CD: GitHub Actions (build, test, deploy)
- Cloud migration-ready: AWS (EKS), GCP (GKE), Alibaba Cloud (ACK)

---

## 🖥️ Run Locally (Node.js)

### 1️⃣ Install Node.js & npm (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install nodejs npm -y
```

✅ Verify
```
node -v
npm -v
```
2️⃣Install dependencies
```
npm install
```
3️⃣ Run the app
```
node index.js
```
---
## 🐳 Run Docker image
1️⃣ Pull image from Docker Hub
```
docker pull ahmed3013/eyego:latest
```
2️⃣ Run container
```
docker run -p 2000:2000 ahmed3013/eyego
```
## ☸️ Deploy on Kubernetes
1️⃣ Clone repo & apply YAMLs
```
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```
2️⃣ Access the app

`kubectl get svc eyego-service` → get external URL
## 🚀 CI/CD Overview
`CI`: On every pull request → build + test
`CD`: when `CI` complete successfully  → push Docker image → deploy to EKS
## 🔐 GitHub Secrets Required
| Secret Name        | Description                             |
|--------------------|-----------------------------------------|
| DOCKER_USERNAME    | Docker Hub username                     |
| DOCKER_PASSWORD    | Docker Hub password or Access Token     |
| AWS_ACCESS_KEY_ID  | User AccessKey                          |
| AWS_SECRET_ACCESS_KEY  | User Secret Access Key              |

## 🌐 Cloud Migration Steps

Update kubectl context to GCP/Alibaba

Apply same Kubernetes YAML files

Update CD secrets (GCP/GKE auth or Alibaba)



