# Formulário de Login (React + TypeScript + Vite)

Um projeto simples de **formulário de login** construído com **React**, **TypeScript**, **Vite** e **Tailwind CSS (v4)**.

O objetivo desta base é servir como ponto de partida para construir interfaces de autenticação estilosas e responsivas.

---

## 🧩 Tecnologias usadas

- **Vite** (bundler e servidor de desenvolvimento)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **ESLint** para qualidade de código

---

## 🚀 Como rodar

### 1) Instalar dependências

```bash
npm install
```

### 2) Rodar em modo de desenvolvimento

```bash
npm run dev
```

O servidor ficará disponível em `http://localhost:5173` por padrão.

### 3) Criar build de produção

```bash
npm run build
```

### 4) Pré-visualizar build

```bash
npm run preview
```

---

## 📁 Estrutura básica do projeto

- `src/main.tsx` – entrada da aplicação
- `src/App.tsx` – layout principal
- `src/Components/LongiForm/index.tsx` – componente de formulário de login
- `src/styles/globals.css` – importação do Tailwind + variáveis CSS

---

## 🧠 Como customizar

- Ajuste as cores via `:root` em `src/styles/globals.css`.
- Modifique o formulário em `src/Components/LongiForm/index.tsx` (campos, validação, etc.).
- Para adicionar rotas, instale `react-router-dom` e configure o `Router` em `src/main.tsx`.

---

## 🧪 ESLint

Execute lint com:

```bash
npm run lint
```

---

## 📝 Observações

Este projeto não contém lógica de autenticação real (API/Token). O botão de login atualmente apenas exibe um `console.log`.

Você pode integrar com um backend ou serviço de autenticação adicionando um `fetch`/`axios` no `handleLogin`.
