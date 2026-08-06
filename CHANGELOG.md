# 📜 Aether-Travel Changelog

All notable changes to **Aether-Travel** are documented in this file.

---

## [2.0.0] - 2026-08-06

### 🚀 Added
- **Multi-Agent AI Engine:** 7 specialized agents (`PlannerAgent`, `BudgetAgent`, `VisaAgent`, `WeatherAgent`, `BookingAgent`, `LocalExpertAgent`, `CoordinatorAgent`) in `src/services/ai/multiAgentEngine.ts`.
- **MCP Protocol Client:** Reusable tool discovery and execution pipeline in `src/services/mcp/mcpClient.ts`.
- **RAG Knowledge Base:** `pgvector` semantic vector search with source citations in `src/services/ai/ragService.ts`.
- **AI Memory System:** Short-term session and long-term user travel preference management in `src/services/ai/memoryService.ts`.
- **Interactive Leaflet Maps:** OpenStreetMap rendering with route polylines and category markers in `src/components/shared/TravelMap.tsx`.
- **Notification Center:** Real-time drawer with unread badge counter in `src/components/shared/NotificationCenter.tsx`.
- **Document Vault:** Passport/Visa vault with 30-day expiry reminders in `src/features/documents/DocumentVaultPage.tsx`.
- **Flight Tracker:** Real-time airport, gate, terminal, and departure monitoring in `src/features/flight-tracker/FlightTrackerPage.tsx`.
- **SaaS Analytics Dashboard:** Chart.js visualizations in `src/features/analytics/AnalyticsPage.tsx`.
- **Enterprise Admin Panel:** User role controls and audit logs in `src/features/admin/AdminPanelPage.tsx`.
- **OpenAPI 3.1 & TypeScript SDK:** Swagger spec in `backend/src/docs/swagger.ts` and SDK wrapper in `src/sdk/aetherSdk.ts`.
- **Kubernetes & Terraform IaC:** K8s deployments (`k8s/`) and Terraform AWS Frankfurt scripts (`terraform/main.tf`).

### 🎨 Refactored & Enhanced
- **SVG Branding & Favicon:** Created glowing vector SVG logo in `public/favicon.svg` and `<Logo />` component.
- **Supabase Authentication Client:** Refactored `src/services/supabase.ts` to perform clean environment checks with local fallback mode.
- **Dark/Light Theme System:** Synchronized Tailwind dark mode class toggling in `src/store/themeStore.ts`.
- **Bilingual i18n:** English (`en`) and Deutsch (`de`) translation bundles.

---

## [1.0.0] - 2026-08-05
- Initial prototype release with React 19, TypeScript, Express API, Prisma ORM, and Supabase integration.
