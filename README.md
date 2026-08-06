# ✈️ Aether-Travel

> **Enterprise AI Travel Intelligence SaaS Platform**  
> *Built for Senior / Staff Software Engineering Portfolios & Public Demonstrations.*

[![CI Pipeline](https://github.com/NohaCode-lab/Aether-Travel/actions/workflows/ci.yml/badge.svg)](https://github.com/NohaCode-lab/Aether-Travel/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Release: v2.0.0](https://img.shields.io/badge/Release-v2.0.0-indigo.svg)](https://github.com/NohaCode-lab/Aether-Travel/releases)
[![TypeScript: 5.7](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![React: 19](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://react.dev/)

---

## 🌟 Product Overview

**Aether-Travel** is an Enterprise+ AI-powered Travel Management SaaS platform designed to streamline corporate and consumer travel. It features an advanced **7-agent Multi-Agent AI System**, Model Context Protocol (MCP) tool integration, RAG semantic vector search (`pgvector`), interactive OpenStreetMap route visualization, an encrypted travel document vault, real-time flight tracking, and Chart.js analytics.

---

## 📐 System Architecture

```mermaid
graph TD
    Client([React 19 PWA Frontend]) <-->|HTTPS / WSS| Ingress[Nginx Ingress Controller]
    
    subgraph K8sCluster [Kubernetes Production Cluster]
        Ingress --> WebApp[Frontend Service]
        Ingress --> APIGateway[Backend Express API Gateway]
        
        subgraph MultiAgentEngine [Multi-Agent AI Engine]
            Coord[Coordinator Agent]
            Agents[Planner / Budget / Visa / Weather / Booking / Local Expert Agents]
        end
        
        subgraph MCPClient [Model Context Protocol]
            MCPCore[Dynamic Tool Discovery]
            Tools[Weather / Maps / Exchange / Rules Tools]
        end
        
        APIGateway <--> MultiAgentEngine
        MultiAgentEngine <--> MCPClient
    end
    
    subgraph Persistence [Data & Cache Layer]
        APIGateway <--> PostgreSQL[(PostgreSQL 16 + pgvector)]
        APIGateway <--> Redis[(Redis Cache & BullMQ)]
    end
```

---

## 🚀 Key Features Matrix

- 🤖 **Multi-Agent AI Architecture:** 7 specialized agents (`Planner`, `Budget`, `Visa`, `Weather`, `Booking`, `LocalExpert`, `Coordinator`).
- 🌐 **Model Context Protocol (MCP):** Dynamic tool execution pipeline for Weather, Maps, Currency, and Travel Rules.
- 📚 **RAG Vector Search:** PostgreSQL `pgvector` semantic similarity retrieval with source citations.
- 🗺️ **Interactive Maps:** Leaflet + OpenStreetMap rendering with route polylines and attraction markers.
- 🔐 **Document Vault:** Encrypted document metadata storage for Passports and Visas with 30-day expiry reminders.
- ✈️ **Flight Status Tracker:** Real-time airport, gate, terminal, and departure monitoring.
- 📊 **SaaS Analytics Dashboard:** Chart.js visualizations for trips, expenses, and AI prompt volume.
- 🌐 **Bilingual i18n & Theme:** English & German translation bundles with dynamic Light/Dark mode toggling.

---

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript 5.7, Vite 5, Tailwind CSS 3, Leaflet, Chart.js, i18next.
- **Backend:** Express, TypeScript, Prisma ORM, OpenAPI 3.1 Swagger, Pino Logger.
- **Database & Cache:** PostgreSQL 16 (`pgvector`), Redis 7, BullMQ.
- **Infrastructure:** Docker Compose, Kubernetes (`k8s/`), Terraform AWS Frankfurt (`terraform/`).
- **Testing & Security:** Vitest, Playwright, ESLint 9, Helmet, Rate Limiting, Trivy Scanner.

---

## ⚡ Quick Start & Installation

```bash
# 1. Clone the repository
git clone https://github.com/NohaCode-lab/Aether-Travel.git
cd Aether-Travel

# 2. Install dependencies
npm install

# 3. Run verification suite
npm run lint
npm run typecheck
npm test

# 4. Start local development server
npm run dev
```

---

## 🐳 Docker Deployment

```bash
# Spin up complete stack (Frontend, Backend, PostgreSQL, Redis)
docker-compose up --build -d
```

---

## 📄 License & Release Notes
Distributed under the MIT License. See [`RELEASE_NOTES.md`](RELEASE_NOTES.md) for full release details.