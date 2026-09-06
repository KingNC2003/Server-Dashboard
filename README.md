## Homeserver Dashboard

is a self-hosted home lab dashboard for managing and monitoring services running on a private server.

The goal is to provide one clean web interface for:

- Hosted applications
- User access
- Server status
- Docker container monitoring
- Help requests / tickets
- Changelog updates
- Admin-only server tools

## Tech Stack

- Next.js 15+ App Router
- TypeScript
- React
- Plain CSS modules / component CSS
- Redux Toolkit
- Next.js API routes
- SQLite with better-sqlite3
- Zod
- Auth.js / NextAuth v5
- dockerode
- Docker / Docker Compose
- Cloudflare Tunnel

## Development

Dependencies live in `frontend/`. Install them from there:

    cd frontend
    npm install

## Running the Project

### Prerequisites

- Docker + Docker Compose (for PostgreSQL and optionally the backend)
- Node.js (frontend)
- Java 17 and Maven, or the included `./mvnw` wrapper (backend)

### Setup (one-time)

Create a `.env` file in the repository root with your PostgreSQL credentials.
Docker Compose reads it automatically, and the backend falls back to it via
`spring.config.import=optional:file:../.env`:

    POSTGRES_DB=nexus
    POSTGRES_USER=nexus
    POSTGRES_PASSWORD=replace_with_a_secure_password

The `.env` file is ignored by Git because it contains secrets.

### Option A — Docker Compose (recommended)

Run PostgreSQL and the backend (built via `backend/Dockerfile`):

    docker compose up -d

- Backend: http://localhost:8080
- API: `GET http://localhost:8080/api/applications`

Run the frontend separately with Next.js:

    cd frontend
    npm install
    npm run dev

- Frontend: http://localhost:3000

### Option B — Local development (hot reload)

Start only the database, then run the backend and frontend from your host:

    docker compose up -d postgres
    cd backend
    ./mvnw spring-boot:run

The backend connects to `localhost:5432` using defaults in
`backend/src/main/resources/application.properties` and applies Flyway
migrations automatically on startup. Flyway logs can be inspected with DBeaver
or `psql` against the `postgres_data` volume.

In another terminal:

    cd frontend
    npm install
    npm run dev

### Useful commands

- Stop all containers: `docker compose down`
- Full reset (also deletes the database volume): `docker compose down -v`
- Backend tests: `cd backend && ./mvnw test`
- Backend logs: `docker compose logs -f backend`

### Project Structure

    .env                  PostgreSQL credentials (git-ignored)
    compose.yaml          Docker Compose services: postgres, backend
    backend/              Spring Boot REST API (Java 17, Maven, Flyway)
    frontend/             Next.js app (React, TypeScript, Redux Toolkit)