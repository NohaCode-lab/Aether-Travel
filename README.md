# ✈️ Aether-Travel

> **Enterprise AI Travel Intelligence SaaS Platform**  
> *Built for Senior / Staff Software Engineering Portfolios & Public Demonstrations.*

[![CI Pipeline](https://github.com/NohaCode-lab/Aether-Travel/actions/workflows/ci.yml/badge.svg)](https://github.com/NohaCode-lab/Aether-Travel/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Release: v2.0.0](https://img.shields.io/badge/Release-v2.0.0-indigo.svg)](https://github.com/NohaCode-lab/Aether-Travel/releases)
[![TypeScript: 5.7](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![React: 19](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://react.dev/)

---

## 🌟 Product Overview & Instant Recruiter Demo

**Aether-Travel** is an Enterprise+ AI-powered Travel Management SaaS platform designed to streamline corporate and consumer travel. It features an advanced **7-agent Multi-Agent AI System**, Model Context Protocol (MCP) tool integration, RAG semantic vector search (`pgvector`), interactive OpenStreetMap route visualization, an encrypted travel document vault, real-time flight tracking, and Chart.js analytics.

> ⚡ **Instant Live Demo Mode:** When running locally on `http://localhost:5173/`, the application opens **directly into the Main Dashboard** with full Top Navbar and Left Sidebar navigation visible. No mandatory registration required!

---

## 🧭 Complete Application Navigation Map

All primary application features are immediately accessible via the **Top Navbar** and **Left Sidebar**:

| Top Navbar & Sidebar Section | Path | Key Capabilities |
|---|---|---|
| **Aether-Travel Logo** | `/` | Brand identity & home navigation |
| **Dashboard** | `/` | Interactive trip cards, weather widget, Leaflet map |
| **Destinations** | `/destinations` | Curated destination cards, budget & climate filters |
| **Trip Planner** | `/trip-planner` | Multi-day itinerary builder powered by AI agents |
| **AI Concierge** | `/ai-chat` | 7-agent AI orchestration with RAG citations |
| **Document Vault** | `/documents` | Passports & Visas encrypted storage & expiry alerts |
| **Flight Tracker** | `/flight-tracker` | Real-time airport, gate, terminal, & status tracking |
| **Analytics** | `/analytics` | Chart.js travel expenditure & prompt volume charts |
| **Admin Panel** | `/admin` | User RBAC role management & system health monitoring |
| **Profile** | `/profile` | User preferences & billing management |

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

## 📸 Portfolio Screenshots Gallery

| Screen | Description | Path |
|---|---|---|
| **01. Main Dashboard** | Trip cards, Leaflet map, weather widgets | `docs/screenshots/01-dashboard.png` |
| **02. AI Concierge** | Multi-agent AI response orchestration | `docs/screenshots/02-ai-concierge.png` |
| **03. Trip Planner** | AI itinerary generation workflow | `docs/screenshots/03-trip-planner.png` |
| **04. Destinations** | World destinations with price/rating filters | `docs/screenshots/04-destinations.png` |
| **05. Interactive Map** | Leaflet + OpenStreetMap polylines | `docs/screenshots/05-interactive-map.png` |
| **06. Flight Tracker** | Airport gate, terminal, and status updates | `docs/screenshots/06-flight-tracker.png` |
| **07. Document Vault** | Passport & Visa vault with expiry warnings | `docs/screenshots/07-document-vault.png` |
| **08. Analytics** | Chart.js expenditure and AI volume charts | `docs/screenshots/08-analytics.png` |
| **09. Admin Panel** | RBAC user controls & system telemetry | `docs/screenshots/09-admin-panel.png` |
| **10. Dark Mode** | Glassmorphic dark aesthetic | `docs/screenshots/10-dark-mode.png` |
| **11. Mobile Drawer** | Responsive hamburger navigation drawer | `docs/screenshots/11-mobile-navbar.png` |

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

## 📄 Certification & Release Notes
See [`RECRUITER_DEMO_READINESS_REPORT.md`](RECRUITER_DEMO_READINESS_REPORT.md) and [`AETHER_TRAVEL_FINAL_RELEASE_CERTIFICATION.md`](AETHER_TRAVEL_FINAL_RELEASE_CERTIFICATION.md) for official audit scorecards.