# ✈️ Aether-Travel — Smart AI Travel SaaS Platform

[![React](https://img.shields.io/badge/React-19.x-20B2AA.svg?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg?logo=node.js&logoColor=white)](https://nodejs.org)
[![Leaflet](https://img.shields.io/badge/Leaflet-Interactive%20Maps-199900.svg?logo=leaflet&logoColor=white)](https://leafletjs.com)
[![Vitest](https://img.shields.io/badge/Vitest-Test%20Suite-yellow.svg?logo=vitest&logoColor=white)](https://vitest.dev)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg?logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Manifests%20Ready-326CE5.svg?logo=kubernetes&logoColor=white)](https://kubernetes.io)
[![Terraform](https://img.shields.io/badge/Terraform-IaC%20Ready-7B42BC.svg?logo=terraform&logoColor=white)](https://terraform.io)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Aether-Travel is a modern, full-stack **travel planning SaaS platform** designed for international travelers, digital nomads, and relocation seekers. Built with **React 19, TypeScript, Tailwind CSS, Leaflet maps, Express.js backend API, Docker Compose, and Kubernetes deployment manifests**.

---

## 🔗 Project Links

* **Live Demo (Frontend):** `https://aether-travel.vercel.app` *(Placeholder — to be updated upon live Vercel deploy)*
* **API Gateway (Backend):** `https://aether-travel-backend.onrender.com` *(Placeholder — to be updated upon live Render deploy)*
* **GitHub Repository:** `https://github.com/NohaCode-lab/Aether-Travel`
* **Deployment Architecture:** [Production Deployment Architecture](#-production-deployment)

---

## 🌟 Product Overview & Core Features

- 🗺️ **Interactive Itinerary Builder:** Multi-day travel schedule creation with dynamic drag-and-drop ordering and budgeting.
- 🤖 **AI Travel Concierge:** Context-aware travel assistant with OpenAI integration and deterministic client fallback.
- 📍 **Leaflet Interactive Maps:** Visual destination mapping with custom geo-markers and route coordinates.
- 🌐 **Multilingual Localization (i18n):** German (`de`), English (`en`), and Arabic (`ar`) translations with full RTL/LTR layout support.
- 🔒 **Encrypted Document Vault:** Secure client-side storage for passports, travel insurance, and visa documents with expiration alerts.
- 📊 **Budget & Cost-of-Living Analytics:** Real-time currency conversion and country-by-country living cost comparisons.

---

## 🧭 Application Navigation Map

| Feature / Route | URL Path | Description | Status |
| :--- | :--- | :--- | :---: |
| **Dashboard** | `/` | Main hub with trip cards, weather widget, and world map | ✅ Verified |
| **Destinations** | `/destinations` | Curated destination explorer with budget & climate filters | ✅ Verified |
| **Trip Planner** | `/trip-planner` | Multi-day itinerary builder with AI suggestions | ✅ Verified |
| **AI Concierge** | `/ai-chat` | Travel assistant with smart context citations | ✅ Verified |
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
React 19 + TypeScript Frontend            Node.js Express API                   PostgreSQL / Supabase Storage
(Port 5173 / 80)                          (Port 4000)                           (Port 5432)
 ├── Vite + Tailwind CSS UI Layer          ├── Express REST Endpoints            ├── User Authentication
 ├── TanStack Query (React Query)          ├── Input Validation (Zod)            ├── Trip Itineraries Table
 ├── Leaflet Interactive Maps              ├── OpenAI Backend AI Proxy           ├── Document Vault Metadata
 └── i18n Engine (EN / DE / AR)            └── Modular Route Handlers            └── PostgreSQL Schemas
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

### 3. Run Development Server
```bash
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
- **`k8s/deployment.yaml`**: Deployment manifests for frontend and backend with CPU/memory limits, liveness, and readiness probes.
- **`k8s/service.yaml`**: ClusterIP services with NGINX Ingress controller configuration and automated TLS termination via Let's Encrypt.

---

## 🧪 Testing & Verification

```bash
# Run unit & component test suite
npm test

# Run TypeScript type-checking
npm run typecheck

# Run ESLint linter
npm run lint
```

---

# 🚀 Production Deployment

## Architecture Overview

```text
                           AETHER-TRAVEL PRODUCTION TOPOLOGY
                                            │
    ┌───────────────────────────────────────┼───────────────────────────────────────┐
    ▼                                       ▼                                       ▼
[ Vercel Edge Global CDN ]          [ Render Web Service ]                  [ Supabase / Cloud Postgres ]
React 19 + Vite 5 Frontend          Node.js Express API (Port 4000)         Managed PostgreSQL Database
(https://aether-travel.vercel.app)  (https://aether-travel-backend.onrender.com) (https://supabase.com)
 ├── Vite SPA Bundle (dist/)         ├── Express REST Endpoints              ├── Traveler Profiles & Auth
 ├── vercel.json SPA Rewrites        ├── OpenAI Backend Proxy                ├── Trip Itineraries & Routes
 ├── Leaflet Geospatial Maps         ├── Zod Request Validation              └── Stored Vault Documents
 └── Tri-Lingual i18n (EN/DE/AR)     └── Server-Side Secret Protection
```

## Live Application

* **Frontend:** `https://aether-travel.vercel.app` *(Placeholder — to be updated upon live Vercel deploy)*
* **Backend API:** `https://aether-travel-backend.onrender.com` *(Placeholder — to be updated upon live Render deploy)*
* **Database:** [Supabase Managed PostgreSQL](https://supabase.com) *(Cloud-managed, credentials isolated)*

---

## 🛠️ Step-by-Step Deployment Instructions

### 1. Database — Supabase
1. Create a project on [Supabase](https://supabase.com).
2. Copy the **Connection URI (Pooler)** from **Project Settings → Database**.
3. Run database migrations:
   ```bash
   cd backend
   npx prisma migrate dev
   ```

### 2. Backend API — Render
1. In [Render](https://render.com), click **New Web Service** and select this repository (or use [`render.yaml`](render.yaml)).
2. Configure settings:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npx prisma generate && npm run build`
   - **Start Command:** `npm start`
   - **Health Check Path:** `/health`
3. Set Environment Variables in Render:
   ```text
   NODE_ENV       = production
   PORT           = 4000
   CORS_ORIGIN    = https://aether-travel.vercel.app
   DATABASE_URL   = postgresql://user:password@aws-0-eu.pooler.supabase.com:6543/postgres
   JWT_SECRET     = your_secure_jwt_secret_key_here
   OPENAI_API_KEY = your_openai_api_key_here
   ```

### 3. Frontend SPA — Vercel
1. In [Vercel](https://vercel.com), click **Add New Project** and import `Aether-Travel`.
2. Framework is automatically detected as **Vite** (`dist`).
3. Set Environment Variables in Vercel:
   ```text
   VITE_BACKEND_URL  = https://aether-travel-backend.onrender.com
   VITE_SUPABASE_URL = https://your-project.supabase.co
   ```
4. Click **Deploy**. The root [`vercel.json`](vercel.json) handles client-side routing.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.