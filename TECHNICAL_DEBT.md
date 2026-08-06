# 🧹 Technical Debt & Refactoring Backlog: Aether-Travel

This document details minor refactoring opportunities and technical debt items tracked for future iterations.

---

## 📋 Tracked Technical Debt Items

| Item ID | Category | Description | Impact | Priority | Recommended Action |
|---|---|---|---|:---:|---|
| **TD-01** | Frontend Chunking | Single bundle `index-*.js` is ~1.1MB before gzip. | Low | Low | Implement Rollup `manualChunks` in `vite.config.ts` for dynamic vendor splitting. |
| **TD-02** | Test Coverage | Vitest unit tests cover core UI components (14 tests). E2E specs exist in `tests/e2e/app.spec.ts`. | Medium | Medium | Expand E2E coverage for real-time WebSocket cursor movements in CI headless mode. |
| **TD-03** | PWA Service Worker | Service worker manifest and caching strategies scaffolded in `vite.config.ts`. | Low | Low | Register service worker in `src/main.tsx` for full offline PWA installation. |
