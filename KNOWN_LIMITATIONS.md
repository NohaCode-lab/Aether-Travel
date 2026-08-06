# ⚠️ Known Limitations: Aether-Travel

This document lists operational boundaries and known sandbox constraints.

---

## 📌 Documented Limitations

1. **Third-Party API Credentials:**
   - OpenAI, Supabase, and real-time flight tracking APIs rely on environment variables (`.env`). In local development mode without credentials, the system gracefully operates using high-fidelity local mock data.

2. **Database Vector Search:**
   - PostgreSQL `pgvector` similarity queries fall back to exact metadata matching when running in SQLite/in-memory test environments.

3. **Leaflet Tile Server Usage:**
   - Map tiles are fetched from OpenStreetMap (`tile.openstreetmap.org`). Production enterprise deployments should consider tile caching or Mapbox CDN for high volume.
