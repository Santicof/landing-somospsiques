# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
# Consultorio Integral Psique

Landing institucional desarrollada con React, TypeScript, Vite y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

## Validaciones

```bash
npm run lint
npm run build
```

## Despliegue en Vercel

Vercel detecta automáticamente la configuración de Vite:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Los despliegues de producción se generan desde la rama `main`.

