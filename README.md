# Product Stock Microservices with NestJS

## Overview

This project is a microservices-based system for managing product stock using NestJS. The system consists of two microservices:

- **Admin Microservice**: Handles administrative tasks and uses **PostgreSQL** as its database.
- **Main Microservice**: Manages core product stock operations and uses **MongoDB** as its database. It also uses **RabbitMQ** as a message broker to facilitate inter-service communication.

Both databases and RabbitMQ are containerized using Docker.

## Architecture

### Admin Microservice
- **Technology**: NestJS
- **Database**: PostgreSQL
- **Purpose**: Manage administrative operations related to product stock.

### Main Microservice
- **Technology**: NestJS
- **Database**: MongoDB
- **Message Broker**: RabbitMQ
- **Purpose**: Handle core product stock operations and communicate with other services via RabbitMQ.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   
2. **Install the dependencies:**

   ```bash
   cd admin
   npm install

   cd ..

   cd main
   npm install

3. **Start the containers on admin and main folders**

   ```bash
   docker-compose up -d

4. **Run the application**

   ```bash
   # Admin and Main 
   npm run start:dev

   # Main (RabbitMQ)
   npm run listen

## Demostration

https://github.com/user-attachments/assets/9b910dd1-d60d-43d5-a249-a6d13207917a


