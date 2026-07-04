<div align="center">

# iit_vlab
### A Streamlined Chemical Supplies Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PWA Ready](https://img.shields.io/badge/PWA-Enabled-orange?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)]()

*An intuitive, offline-first Progressive Web App (PWA) designed to simplify chemical inventory management.*

![App Icon](./chemical_android.png)

</div>

---

## 🚀 Overview
**iit_vlab** is a high-performance, lightweight web application built for laboratory managers and researchers to track chemical inventories efficiently. Designed with a focus on simplicity and accessibility, it features an interactive data-grid interface that works seamlessly across all devices, with full offline capabilities via PWA technology.

---

## ✨ Core Features

*   **Interactive Data Grid**: Perform CRUD operations directly in the table. Click to edit, add, or remove chemical entries.
*   **Intuitive Row Control**: Easily organize your inventory by dragging or using the move up/down controls.
*   **Persistent Storage**: Built-in integration with browser `localStorage` ensures your data is saved instantly and persists across sessions.
*   **Offline-First**: Leveraging Service Workers, the app is fully accessible even without an internet connection after the initial load.
*   **Dynamic Sorting**: Sort your chemical inventory by name, vendor, density, or any other column with a single click.
*   **Fully Responsive**: A fluid design that adapts perfectly to desktops, tablets, and mobile smartphones.

---

## 🛠 Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" />
</p>

---

## 📂 Project Structure

```text
iit_vlab/
├── index.html           # Core application UI
├── style.css            # Stylesheet for responsive design
├── app.js               # Logic for data, storage, and sorting
├── service-worker.js    # Caching strategies for offline access
├── manifest.json        # PWA metadata and icon definitions
├── chemical_android.png # Asset: App Icon
└── demo.html            # Feature demonstration page
```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Alok345/iit_vlab.git
   cd iit_vlab
   ```

2. **Run Locally:**
   Simply open `index.html` in any modern web browser. No compilation or external dependencies are required. 
   *(Note: For PWA features like service worker registration to work properly, run using a local server like Live Server in VS Code or `python -m http.server`.)*

3. **Install as PWA:**
   * Open the app in Chrome or Edge.
   * Look for the "Install" icon in the URL bar or navigate to the browser menu and select **"Install iit_vlab"**.

---

## 📝 Usage Guide

*   **Adding Chemicals**: Use the `+` button to append a new row to your inventory.
*   **Editing**: Click directly on any cell to update values such as Vendor, Density, or Packaging.
*   **Sorting**: Click on the table headers (e.g., "Chemical Name") to toggle between ascending and descending order.
*   **Data Safety**: Changes are saved automatically. You can refresh or close your browser without losing progress.

---

## 🤝 Contributing

We welcome community contributions! If you have suggestions or find bugs:

1. **Fork** the repository.
2. **Create a branch** for your feature: `git checkout -b feature/amazing-feature`.
3. **Commit** your changes: `git commit -m 'Add amazing feature'`.
4. **Push** to the branch: `git push origin feature/amazing-feature`.
5. **Open a Pull Request**.

---

## ⚖️ License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built by <a href="https://github.com/Alok345">Alok345</a></sub>
</div>