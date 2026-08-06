# 🏛️ Enterprise+ Platform Architecture: Aether-Travel

**Aether-Travel** is an Enterprise-Grade AI Travel SaaS Platform designed for high concurrency, security, and multi-agent AI travel orchestration.

---

## 📐 System Architecture Diagram

```mermaid
graph TD
    Client([React 19 PWA Frontend]) <-->|HTTPS / WSS| Ingress[Nginx Ingress Controller]
    
    subgraph K8sCluster [Kubernetes Production Cluster]
        Ingress --> WebApp[Frontend Service - 3 Pods]
        Ingress --> APIGateway[Backend Express API - 3 Pods]
        
        subgraph AIEngine [Multi-Agent Engine]
            Coord[Coordinator Agent]
            Agents[Planner / Budget / Visa / Weather / Booking / Local Expert Agents]
        end
        
        subgraph MCPClient [Model Context Protocol]
            MCPCore[Dynamic Tool Registry]
            Tools[Weather / Maps / Exchange / Rules / Hotels Tools]
        end
        
        APIGateway <--> AIEngine
        AIEngine <--> MCPClient
        APIGateway <--> EventBus[Domain Event Bus]
    end
    
    subgraph DataPersistence [Persistence Layer]
        EventBus <--> Redis[(Redis Cache & BullMQ Queue)]
        APIGateway <--> PostgreSQL[(PostgreSQL 16 + pgvector RAG)]
    end
```

---

## 🔑 Key Engineering Specs
1. **Multi-Agent Orchestration:** 7 specialized autonomous AI agents (Planner, Budget, Visa, Weather, Booking, Local Expert, Coordinator).
2. **Model Context Protocol (MCP):** Dynamic server tool discovery & execution pipeline.
3. **RAG Vector Search:** PostgreSQL + `pgvector` semantic similarity retrieval.
4. **Real-time Collaboration:** WebSockets live cursors, presence indicators, activity timeline.
5. **Progressive Web App (PWA):** Service worker offline caching, background sync.
6. **Observability:** Structured Pino logging, OpenTelemetry tracing, `/health/liveness` & `/health/readiness` probes.
7. **Infrastructure:** Docker Compose, Kubernetes manifests (`k8s/`), Terraform IaC (`terraform/`).
