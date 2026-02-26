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

## Source Snapshot

This website reflects the current state of the core repositories as of **2026-02-26**:

| Repository | Last Updated | Description |
|---|---|---|
| [tagentacle (core)](https://github.com/Tagentacle/tagentacle) | 2026-02-26 | Rust daemon & CLI |
| [python-sdk-core](https://github.com/Tagentacle/python-sdk-core) | 2026-02-26 | Python SDK — Node & LifecycleNode |
| [python-sdk-mcp](https://github.com/Tagentacle/python-sdk-mcp) | 2026-02-26 | Python SDK — MCP transport |
| [example-agent](https://github.com/Tagentacle/example-agent) | 2026-02-26 | Chatbot agent node |
| [example-inference](https://github.com/Tagentacle/example-inference) | 2026-02-26 | Stateless LLM gateway node |
| [example-memory](https://github.com/Tagentacle/example-memory) | 2026-02-26 | Session memory node |
| [example-frontend](https://github.com/Tagentacle/example-frontend) | 2026-02-26 | Gradio frontend node |
| [example-mcp-server](https://github.com/Tagentacle/example-mcp-server) | 2026-02-26 | FastMCP tool server node |
| [example-bringup](https://github.com/Tagentacle/example-bringup) | 2026-02-26 | 5-node system launch config |

> Last updated: 2026-02-26

## License

MIT
