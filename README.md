# Enterprise NestJS Microservices (TCP) Monorepo

[![NestJS](https://img.shields.io/badge/NestJS-e31b5f?style=flat&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Nx Monorepo](https://img.shields.io/badge/Nx_Monorepo-14304b?style=flat&logo=nx&logoColor=white)](https://nx.dev/)
[![TCP Transport](https://img.shields.io/badge/Transport-TCP-blue?style=flat)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

An enterprise-grade, highly scalable, and production-ready Microservices boilerplate built using **NestJS Microservices**, **Nx Monorepo**, and **TypeScript**, utilizing high-performance **TCP protocol** for inter-service communication. Includes E-Commerce domains as a demonstration case study.

> **Topics/Keywords:** NestJS Microservices, TCP Transporter, Nx Monorepo, Backend-For-Frontend (BFF), Stateless API Gateway, Microservice Architecture, Dependency Injection.



Developed and maintained by **Vipul**.

---

## 🏛️ Architecture Overview

This project implements a **Backend-For-Frontend (BFF) & Gateway Pattern** with a completely stateless ingress layer, separate domain microservices, and database isolation.

```mermaid
graph TD
    Client[Client App / Frontend] -->|HTTP / Swagger REST| Gateway[API Gateway]
    
    subgraph Downstream Microservices (Intranet / TCP)
        Gateway -->|TCP: 3001| Auth[Auth Microservice]
        Gateway -->|TCP: 3002| Products[Products Microservice]
        Gateway -->|TCP: 3003| Orders[Orders Microservice]
        Gateway -->|TCP: 3004| Cart[Cart Microservice]
        Gateway -->|TCP: 3005| Payments[Payments Microservice]
        Gateway -->|TCP: 3006| Inventory[Inventory Microservice]
    end
```

---

## 🌟 Key Features & Production Best Practices

* **Backend-For-Frontend (BFF)**: The [API Gateway](file:///c:/Users/HP/Desktop/vipul-office/nestjs-microservices/apps/api-gateway) acts as a stateless gateway proxy. It coordinates auth checking, validation, and request routing to downstream microservices. No business logic resides in the gateway.
* **Dynamic TCP Client Registry**: Implemented a shared `TcpClientModule` inside the common library. Registering microservices is decoupled from hardcoded strings and settings. E.g., `TcpClientModule.register(Services.PRODUCTS)`.
* **Single Source of Truth Configuration**: Setup a centralized [.env](file:///c:/Users/HP/Desktop/vipul-office/nestjs-microservices/.env) file at the root. All microservices pull their ports dynamically using `MICROSERVICE_CONFIG[Services.X]`.
* **Strict Type Safety**: Unified contracts, DTOs, message patterns, and schemas are defined in the `@nestjs-microservices/shared` library. Handlers use definite assignment assertions (`!`) to prevent initialization errors.
* **REST Promise Resolution**: Downstream RxJS observables are resolved using `firstValueFrom` in gateway controllers to return standard, clean JSON payloads.

---

## 📁 Repository Structure

```text
nestjs-microservices/
├── apps/                        # Deployable applications
│   ├── api-gateway/             # Ingress point (REST APIs, Swagger, JWT)
│   │   └── src/
│   │       ├── products/        # Domain products client & controller
│   │       ├── orders/          # Domain orders client & controller
│   │       ├── cart/            # Domain cart client & controller
│   │       ├── payments/        # Domain payments client & controller
│   │       ├── inventory/       # Domain inventory client & controller
│   │       └── auth/            # Gateway authentication & user setup
│   │
│   ├── auth-microservice/       # Handles authentication & users database logic
│   ├── products-microservice/   # Handles products catalog
│   ├── orders-microservice/     # Handles customer orders
│   ├── cart-microservice/       # Handles shopping cart operations
│   ├── payments-microservice/   # Processes mock payment transctions
│   └── inventory-microservice/  # Manages stocks and warehouse locations
│
├── shared/                      # Monorepo Shared Library (Exposed via @nestjs-microservices/shared)
│   └── src/
│       ├── lib/
│       │   ├── config/          # Central microservice configuration mappings
│       │   ├── constants/       # Services & MessagePatterns enums
│       │   ├── dto/             # Shared e-commerce and auth DTO classes
│       │   ├── entities/        # Unified data model schemas
│       │   └── modules/         # Reusable dynamic modules (TcpClientModule)
```

---

## ⚡ Port Allocations

All microservices listen on high-performance TCP ports:

| Service | Protocol | Local Port | Key Pattern | Description |
| :--- | :--- | :--- | :--- | :--- |
| **API Gateway** | HTTP / REST | `3000` | N/A | Ingress endpoint & Swagger UI |
| **Auth Service** | TCP | `3001` | `get_user`, `create_user` | Authentication, sign-up and login |
| **Products Service** | TCP | `3002` | `get_products` | Products Catalog service |
| **Orders Service** | TCP | `3003` | `get_orders` | Customer Order records |
| **Cart Service** | TCP | `3004` | `get_cart` | Shopping cart operations |
| **Payments Service** | TCP | `3005` | `get_payments` | Processing payments transactions |
| **Inventory Service** | TCP | `3006` | `get_inventory` | Warehouses and stock counts |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` in the root folder:
```bash
cp .env.example .env
```

### 3. Launch the Applications
Run all microservices and the API gateway simultaneously with a single command:
```bash
npm run start:all
```

Alternatively, launch services individually using Nx:
```bash
npx nx serve api-gateway
npx nx serve auth-microservice
```

### 4. Interactive API Documentation (Swagger)
Once the applications are running, open your browser and navigate to:
```text
http://localhost:3000/api/docs
```
Here, you can test all endpoints (`auth`, `products`, `orders`, `cart`, `payments`, `inventory`) interactively.

---

## 🛡️ License

This project is licensed under the MIT License - see the LICENSE file for details.
