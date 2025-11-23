<div align="center">
  <h1 style="margin-bottom: 0;">Portafolio Profesional - Mariano Vega</h1>
  <h3 style="margin-top: 0;">&lt;DevFullStack /&gt;</h3>
  
  <p>
    <a href="https://github.com/mvegha/mvegha/actions">
      <img src="https://img.shields.io/github/actions/workflow/status/mvegha/mvegha/deploy.yml?style=for-the-badge&logo=github&label=DEPLOY" alt="Deploy Status" />
    </a>
    <img src="https://img.shields.io/badge/STATUS-FINISHED-success?style=for-the-badge&logo=git&logoColor=white" alt="Status" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </p>
</div>

> **"Transformando ideas en Experiencias Digitales"**
>
> Un portafolio moderno, agnóstico a la tecnología y altamente escalable, diseñado para mostrar mi trayectoria como Full Stack Developer.
> **🌐 Sitio Oficial:** [mvegha.com](https://mvegha.com)

## 📸 Galería del Proyecto

Un vistazo a las secciones principales de la aplicación en modo oscuro.

### 🏠 Inicio & Sobre Mí

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/mvegha/mvegha@main/public/assets/inicio-shot.png" alt="Hero Section" width="48%">
  <img src="https://cdn.jsdelivr.net/gh/mvegha/mvegha@main/public/assets/about-shot.png" alt="About Section" width="48%">
</p>

### 🛠️ Stack Tecnológico & Experiencia

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/mvegha/mvegha@main/public/assets/stack-shot.png" alt="Tech Stack" width="48%">
  <img src="https://cdn.jsdelivr.net/gh/mvegha/mvegha@main/public/assets/experience-shot.png" alt="Trajectory" width="48%">
</p>

### 🚀 Proyectos Destacados

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/mvegha/mvegha@main/public/assets/projects-shot.png" alt="Projects Section" width="48%">
  <img src="https://cdn.jsdelivr.net/gh/mvegha/mvegha@main/public/assets/contact-shot.png" alt="Contact Section" width="48%">
</div>

---

## ⚡ Stack Tecnológico (Cutting Edge)

Este proyecto utiliza versiones de vanguardia para asegurar el máximo rendimiento y tipado estricto.

| Área                  | Tecnologías & Versiones                         |
| --------------------- | ----------------------------------------------- |
| **Frontend Core** | `React 19` • `Vite 7.2.4`                       |
| **Lenguaje** | `TypeScript 5.9.3` (Strict Mode)                |
| **Estilos** | `Tailwind CSS 3.4.17` (Dark Mode Native)        |
| **Runtime** | `Node.js 24.11`                                 |
| **Calidad de Código** | `ESLint 9.39.1`                                 |
| **Arquitectura** | `Data-Driven Components` • `Clean Architecture` |

---

## 📂 Características de Ingeniería

Más allá de la interfaz visual, el código está estructurado profesionalmente:

- **🧩 Arquitectura Modular:** Separación clara entre `views`, `components` y `layouts`.
- **🧠 Data-Driven UI:** El contenido se inyecta desde archivos TypeScript en `src/data/`, facilitando actualizaciones sin tocar el JSX.
- **🛡️ Tipado Fuerte:** Uso extensivo de Interfaces (`StackItem`, `Project`, `Experience`) para evitar errores en tiempo de ejecución.
- **🔒 Seguridad:** Ofuscamiento de datos sensibles (Email) mediante Variables de Entorno en Build Time.

---

## 🔄 CI/CD & Infraestructura

El proyecto cuenta con un pipeline de integración y despliegue continuo totalmente automatizado.

### ⚙️ GitHub Actions Workflow
Cada push a la rama `main` dispara el flujo definido en `.github/workflows/deploy.yml`:
1.  **Entorno Limpio:** Instalación estricta de dependencias con `npm ci` (Node 24).
2.  **Inyección de Secretos:** La variable sensible (`VITE_EMAIL`) se inyecta desde **GitHub Secrets** durante el build.
3.  **Compilación:** Generación del bundle optimizado en `/dist`.
4.  **Despliegue:** Publicación automática en **GitHub Pages**.

### 🌐 Dominio & DNS
- **Dominio Personalizado:** [mvegha.com](https://mvegha.com)
- **Gestión DNS:** Cloudflare (Proxy activo para caché y seguridad DDoS).
- **SSL/TLS:** Encriptación Full (Strict) forzada mediante reglas de Cloudflare y GitHub.

---

## 🛠️ Instalación y Despliegue Local

Sigue estos pasos para levantar el entorno localmente:

1.  **📥 Clonar el repositorio**

    ```bash
    git clone [https://github.com/mvegha/mvegha.git](https://github.com/mvegha/mvegha.git)
    cd mvegha
    ```

2.  **🔐 Configurar Variables de Entorno**
    El proyecto requiere variables para los datos de contacto. Crea un archivo `.env` en la raíz basándote en el ejemplo:

    ```bash
    cp .env.example .env
    ```
    *Edita el archivo `.env` y agrega tu correo real (esto no se subirá al repo).*

3.  **📦 Instalar dependencias (NPM)**

    ```bash
    npm install
    ```

4.  **🚀 Ejecutar en desarrollo**
    ```bash
    npm run dev
    ```
    📍 Abre `http://localhost:5173` en tu navegador.

---

## 📬 Contacto & Redes

¿Buscas un desarrollador comprometido para construir algo increíble?

- **Autor:** Mariano Vega (VegHa Dev)
- **Perfil:** Full Stack Developer (Cloud, Mobile & Web)
- **Estado:** 🟢 Disponible para trabajar

[<img src="https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin"/>](https://www.linkedin.com/in/mvegha/)
[<img src="https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github"/>](https://github.com/mvegha)

---

<p align="center">
    © 2025 - Presente • Desarrollado por <b>Mariano Vega</b>
</p>