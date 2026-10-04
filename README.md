# Node.js Jenkins CI/CD

## DevOps Internship - Task 2

This project demonstrates a basic CI/CD pipeline using Jenkins and Docker.

## Tools Used

- Node.js
- Docker
- Jenkins
- Git
- GitHub

## Pipeline

The Jenkins pipeline contains three stages:

1. Build
2. Test
3. Deploy

## Build

Jenkins builds a Docker image:

```bash
docker build -t nodejs-jenkins-app .
