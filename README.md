# 🎨 Blend Lumina Frontend

A modern and elegant frontend for the **Blend Lumina** art trading platform, built with **React + TypeScript + Vite**.  
Seamlessly integrates with a Django REST backend to support user authentication, artwork browsing, custom requests, order management, and more.

<p align="center">
  <img src="https://img.shields.io/badge/Built%20with-React-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Language-TypeScript-purple?style=flat-square" />
  <img src="https://img.shields.io/badge/Bundler-Vite-ffcc00?style=flat-square" />
  <img src="https://img.shields.io/badge/Auth-JWT-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/Status-In%20Development-yellow?style=flat-square" />
</p>

---

## 🖼️ Screenshots

> Coming soon... (Add homepage/artwork list previews here)

---

## ⚙️ Tech Stack

| Layer       | Stack                        |
|-------------|------------------------------|
| Framework   | React + Vite                 |
| Language    | TypeScript                   |
| UI Library  | [Ant Design](https://ant.design) / MUI / Chakra UI (your choice) |
| Routing     | React Router v6              |
| State Mgmt  | React Context (Auth)         |
| HTTP Client | Axios                        |
| Auth        | JWT (via DRF backend)        |

---

## 📁 Project Structure

```text
src/
├── assets/         # Static assets like logo, images
├── components/     # Shared reusable components (e.g. Navbar, Footer)
├── pages/          # Page-level components (Login, Home, Shop, etc.)
├── services/       # Axios services for API calls
├── contexts/       # Global state contexts (e.g. AuthContext)
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── App.tsx         # Main app entry
└── main.tsx        # Vite entry point

```

## 📦 Getting Started
1. Install dependencies
```bash npm install```

2. Run development server
```npm run dev```

3. Open browser
http://localhost:5173




## 🧑‍🎨 About the Project
Blend Lumina is designed to connect artists and buyers through a smooth, visually-rich platform. The frontend emphasizes clarity, responsiveness, and modularity — ready to scale with any design system.