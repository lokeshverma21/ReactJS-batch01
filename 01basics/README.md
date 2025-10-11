# 🚀 Vite + React + Tailwind CSS v4 Setup Guide

This guide will get you set up with a modern web development stack: **Vite** (fast build tool), **React** (UI library), and the latest **Tailwind CSS v4** (utility-first styling).

Tailwind CSS v4 has been significantly simplified, making this process faster than ever\!

-----

## Prerequisites

Make sure you have a recent version of **Node.js** (v20.19 or higher is recommended) and **npm** installed on your machine.

You can check your versions by running:

```bash
node -v
npm -v
```

-----

## Step 1: Create the Vite + React Project

1.  Open your terminal and run the following command to start the project creation. Replace `my-react-app` with your desired project name.

    ```bash
    npm create vite@latest my-react-app
    ```

2.  Follow the terminal prompts:

      * **Project name:** `my-react-app` (or whatever you chose)
      * **Select a framework:** Use arrow keys to select **`React`**
      * **Select a variant:** Choose **`JavaScript`** or **`TypeScript`**

3.  Navigate into your new project folder and install the base dependencies:

    ```bash
    cd my-react-app
    npm install
    ```

-----

## Step 2: Install Tailwind CSS v4

In v4, Tailwind CSS provides a dedicated Vite plugin, simplifying the installation and configuration.

1.  Install **`tailwindcss`** and the official **`@tailwindcss/vite`** plugin as development dependencies:

    ```bash
    npm install -D tailwindcss @tailwindcss/vite
    ```

    > **💡 Note:** Unlike previous versions, you **do not** need to run `npx tailwindcss init -p`. The v4 setup automatically handles content scanning and configuration for you.

-----

## Step 3: Configure Vite

You need to update your Vite configuration file to load the Tailwind plugin.

1.  Open your configuration file (`vite.config.js` or `vite.config.ts`) in your project root.

2.  Import the Tailwind plugin and add it to the `plugins` array:

    ```javascript
    // vite.config.js (or vite.config.ts for TypeScript)

    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite' // <-- 1. Import the plugin

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [
        react(), 
        tailwindcss(), // <-- 2. Add the plugin here
      ],
    })
    ```

-----

## Step 4: Import Tailwind Styles

Tailwind CSS v4 only requires one simple import in your primary CSS file.

1.  Open the main CSS file, typically located at **`src/index.css`**.

2.  **Delete** all existing default CSS content inside this file.

3.  Add the single Tailwind import line at the top:

    **`src/index.css`**

    ```css
    @import "tailwindcss";
    ```

-----

## Step 5: Run and Test

Your environment is now fully configured\! Let's test it with a simple component.

1.  Open your main component file: **`src/App.jsx`** (or `src/App.tsx`).

2.  Replace the existing content with the following code, which uses several Tailwind CSS utility classes:

    ```jsx
    function App() {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="p-8 bg-white rounded-xl shadow-2xl">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mb-4">
              Tailwind v4 is Working!
            </h1>
            <p className="text-lg text-gray-600">
              This card is styled entirely with utility classes.
            </p>
            <button className="mt-6 px-6 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors">
              Start Building
            </button>
          </div>
        </div>
      )
    }

    export default App
    ```

3.  Start your development server from the terminal:

    ```bash
    npm run dev
    ```

4.  Open the local address (e.g., `http://localhost:5173/`) in your browser. If the page displays a nicely styled card, you are all set\!

-----

🎉 **You are ready to go\! Happy coding\!**
