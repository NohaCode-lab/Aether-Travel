# ✈️ Aether-Travel — Smart AI Travel SaaS Platform

[![React](https://img.shields.io/badge/React-18.x-20B2AA.svg?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg?logo=node.js&logoColor=white)](https://nodejs.org)
[![Leaflet](https://img.shields.io/badge/Leaflet-Interactive%20Maps-199900.svg?logo=leaflet&logoColor=white)](https://leafletjs.com)
[![Vitest](https://img.shields.io/badge/Vitest-Test%20Suite-yellow.svg?logo=vitest&logoColor=white)](https://vitest.dev)
[![Playwright](https://img.shields.io/badge/Playwright-E2E%20Testing-45BA4B.svg?logo=playwright&logoColor=white)](https://playwright.dev)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg?logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Manifests%20Ready-326CE5.svg?logo=kubernetes&logoColor=white)](https://kubernetes.io)
[![Terraform](https://img.shields.io/badge/Terraform-IaC%20Ready-7B42BC.svg?logo=terraform&logoColor=white)](https://terraform.io)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Aether-Travel is a modern, full-stack **AI-powered travel planning SaaS platform** designed for international travelers, digital nomads, and relocation seekers. Built with **React 18, TypeScript, Tailwind CSS, Leaflet maps, Fastify, Docker, and Kubernetes deployment manifests**.

---

## 🌟 Product Overview & Core Features

- 🗺️ **Interactive Itinerary Builder:** Multi-day travel schedule creation with dynamic drag-and-drop ordering and budgeting.
- 🤖 **AI Travel Concierge:** Context-aware recommendations for flights, hotels, visa requirements, and daily schedules.
- 📍 **Leaflet Interactive Maps:** Visual destination mapping with custom geo-markers and route coordinates.
- 🌐 **Multilingual Localization (i18n):** German (`de`), English (`en`), and Arabic (`ar`) translations with full RTL/LTR layout support.
- 🔒 **Encrypted Document Vault:** Secure client-side storage for passports, travel insurance, and visa documents with expiration alerts.
- 📊 **Budget & Cost-of-Living Analytics:** Real-time currency conversion and country-by-country living cost comparisons.

---

## 🧭 Complete Application Navigation Map

| Feature / Route | URL Path | Description | Status |
| :--- | :--- | :--- | :---: |
| **Dashboard** | `/` | Main hub with trip cards, weather widget, and world map | ✅ Verified |
| **Destinations** | `/destinations` | Curated destination explorer with budget & climate filters | ✅ Verified |
| **Trip Planner** | `/trip-planner` | Multi-day itinerary builder with AI suggestions | ✅ Verified |
| **AI Concierge** | `/ai-chat` | Multi-agent travel assistant with RAG citation cards | ✅ Verified |
| **Document Vault** | `/documents` | Encrypted document storage with expiry reminders | ✅ Verified |
| **Flight Tracker** | `/flight-tracker` | Real-time airport, gate, terminal, and status tracking | ✅ Verified |
| **Analytics** | `/analytics` | Expenditure breakdown and travel statistics | ✅ Verified |
| **Admin Panel** | `/admin` | User management and system health monitoring | ✅ Verified |
| **Profile** | `/profile` | User preferences and localization settings | ✅ Verified |

---

## 🏛️ System Architecture

```text
                               AETHER-TRAVEL ARCHITECTURE TOPOLOGY
                                                │
    ┌───────────────────────────────────────────┼───────────────────────────────────────────┐
    ▼                                           ▼                                           ▼
React 18 + TypeScript Frontend            Node.js Fastify API                   PostgreSQL / Supabase Storage
(Port 5173 / 80)                          (Port 4000)                           (Port 5432)
 ├── Vite + Tailwind CSS UI Layer          ├── Fastify REST Endpoints            ├── User Authentication
 ├── TanStack Query (React Query)          ├── Input Validation (Zod)            ├── Trip Itineraries Table
 ├── Leaflet Interactive Maps              ├── Swagger OpenAPI Documentation     ├── Document Vault Metadata
 └── i18n Engine (EN / DE / AR)            └── Pino Structured Logging           └── Vector Embeddings Store
                                                │
                                                ▼
                                    Container & Cloud Deployment
                                 ├── Docker Compose Multi-Service Mesh
                                 ├── Kubernetes Cluster Manifests (`k8s/`)
                                 └── Terraform Infrastructure as Code (`terraform/`)
```

---

## 🚀 Quick Start & Local Installation

### Prerequisites
- Node.js `20.x` or higher
- npm `10.x` or higher
- Docker (optional for containerized setup)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/NohaCode-lab/Aether-Travel.git
cd Aether-Travel
npm install
cd backend && npm install && cd ..
```

### 2. Environment Setup
```bash
cp .env.example .env
cp backend/.env.example backend/.env
```

### 3. Run Development Servers
```bash
# Start Frontend & Backend concurrently
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🐳 Containerization & Kubernetes (`k8s/`)

### Run with Docker Compose
```bash
docker compose up --build
```

### Deploy to Kubernetes
```bash
# Apply deployment and service configurations
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

The Kubernetes configuration includes:
- **`k8s/deployment.yaml`**: 3 replicas for frontend and backend with CPU/memory limits, liveness, and readiness probes.
- **`k8s/service.yaml`**: ClusterIP services with NGINX Ingress controller configuration and automated TLS termination via Let's Encrypt.

---

## 🧪 Testing & Verification

```bash
# Run unit & component test suite
npm test

# Run end-to-end integration tests
npm run test:e2e

# Run TypeScript type-checking
npm run typecheck

# Run ESLint linter
npm run lint
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.