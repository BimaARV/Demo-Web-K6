# Node.js Backend Application with Docker

![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Express](https://img.shields.io/badge/Express-5.x-lightgrey)
![Docker](https://img.shields.io/badge/Docker-28.x-blue)

This project demonstrates a simple Node.js backend application with Docker containerization, featuring:
- Visitor counter endpoint
- Node js web service demo connected with html
- Load testing with k6
- Dockerized deployment

## Prerequisites

- Node.js 22+
- Docker 28+
- Docker Compose 2.3+
- K6 1.0+

## Project Structure
```
DemoWeb-K6/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
├── views/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   └── services.html
├── server.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── Readme.md
└── k6-test.js
```

## Getting Started With Docker

### 1. Clone the Repository

```bash
git clone this repo
cd DemoWeb-K6
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run with Docker

Build and start the container:

```bash
docker compose up --detach --build
```

### 4. Access On Web Browser With IP

```
{http://your-ip:port}
```

#### Access On Web Browser With Domain
```
{http://your-domain.com}
```

### 5. Stop the Docker compose
```bash
docker compose down
```

#### Remove all image Docker

```bash
 docker image prune -a -f
 ```

## Getting Started Without Docker

### 1. Clone the Repository

```bash
git clone this repo
cd DemoWeb-K6
```

### 2. Install Dependencies

```bash
npm install
```
### 3. Run with Nodemon

```bash
npm run dev
```

### 4. Access On Web Browser With IP

```
{http://your-ip:port}
```

#### Access On Web Browser With Domain
```
{http://your-domain.com}
```

## Features

### 1. Visitor Counter

Access the root endpoint to see visitor count:

```bash
curl http://localhost:3000
```
Example response:
```
container ID: Total number of visit is: 1
```

### 2. Load Testing

Run load test with 100 virtual users:

```bash
npm run test
```

Or directly with k6:

```bash
k6 run load-test.js
```

### Docker Issues

If containers fail to start:
1. Check logs:

```bash
docker compose logs
```

2. Rebuild from scratch:

```bash
docker compose down
docker compose up --detach --build
```

3. Rebuild and clear all cache:

```bash
docker compose down
docker image prune -a -f
docker builder prune -a -f
```

## License

MIT License

---

## My Social Media
- [Github](https://github.com/BimaARV/) 
- [X-Twitter](https://x.com/bimaav23/)
- [LinkedIn](https://www.linkedin.com/in/dewangga-bima/)
- [Instagram](https://instagram.com/bimaaxt/)