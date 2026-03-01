# Tagentacle.github.io

Official website for the [Tagentacle](https://github.com/Tagentacle/tagentacle) project — **The ROS of AI Agents** 🐙

A decentralized, configuration-centralized, production-grade multi-agent framework built with ROS 2 patterns, MCP Protocol, and Rust performance.

## Live Site

🌐 [https://tagentacle.github.io](https://tagentacle.github.io)

## Development

Simply open `index.html` in your browser:

```bash
# Option 1: Direct file open
open index.html

# Option 2: Python dev server
python3 -m http.server 8080
# → http://localhost:8080
```

## Features

- Single-page design with all project information
- Light / Dark theme toggle (respects system preference)
- Fully responsive (mobile-friendly)
- No build step, no dependencies — pure HTML/CSS/JS
- Scroll animations and interactive code tabs

## Deployment

This site is deployed automatically via **GitHub Pages** from the `main` branch root (`/`).

## What's on the Site

- **Core Philosophy** — Everything is a Pkg (Agent, Tool, Interface, Bringup packages)
- **Why Tagentacle** — Comparison table vs monolithic gateways and CLI tools
- **System Architecture** — Three-pillar design: Rust daemon, Python SDK (core + mcp), MCP Gateway
- **Python SDK** — Dual-layer API: Simple API + LifecycleNode + MCPServerNode code samples
- **MCP Integration** — Streamable HTTP, /mcp/directory discovery, Gateway, mcp-interfaces, TACL auth
- **🐳 Container-Ready Architecture** — One container per Pkg, near-zero overhead, agent freedom
- **🌐 TAO: Tagentacle Art Online** — Autonomous AI cyber-world showcase (wallet, filesystem, port, reproduction)
- **Communication Protocol** — TCP 19999, JSON Lines
- **CLI Toolchain** — daemon, run, launch, topic echo, service call, setup dep
- **Roadmap** — Completed features & planned work

## Source Snapshot

This website reflects the current state of the core repositories as of **2026-03-01**:

| Repository | Last Updated | Description |
|---|---|---|
| [tagentacle (core)](https://github.com/Tagentacle/tagentacle) | 2026-03-01 | Rust daemon & CLI (v0.3.0 — container-ready architecture docs) |
| [python-sdk-core](https://github.com/Tagentacle/python-sdk-core) | 2026-02-28 | Python SDK — zero-dependency Node & LifecycleNode (v0.1.0) |
| [python-sdk-mcp](https://github.com/Tagentacle/python-sdk-mcp) | 2026-02-28 | Python SDK — MCPServerNode + TACL auth system (v0.3.0) |
| [mcp-gateway](https://github.com/Tagentacle/mcp-gateway) | 2026-02-28 | stdio→HTTP relay + MCP directory service (v0.1.0) |
| [mcp-interfaces](https://github.com/Tagentacle/mcp-interfaces) | 2026-02-28 | MCPServerDescription JSON Schema contract package (v0.1.0) |
| [example-agent](https://github.com/Tagentacle/example-agent) | 2026-02-28 | Agentic loop with /mcp/directory discovery (v0.2.0) |
| [example-inference](https://github.com/Tagentacle/example-inference) | 2026-02-28 | Stateless LLM gateway node (v0.1.0) |
| [example-memory](https://github.com/Tagentacle/example-memory) | 2026-02-28 | Session memory node (v0.1.0) |
| [example-frontend](https://github.com/Tagentacle/example-frontend) | 2026-02-28 | Gradio frontend node (v0.1.0) |
| [example-mcp-server](https://github.com/Tagentacle/example-mcp-server) | 2026-02-28 | MCPServerNode-based tool server, Streamable HTTP (v0.2.0) |
| [example-bringup](https://github.com/Tagentacle/example-bringup) | 2026-02-28 | 5-node system launch config (v0.1.0) |

> Last updated: 2026-03-01

## License

MIT
