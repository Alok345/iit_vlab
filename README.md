


# Chemical Supplies Management System (Progressive Web App)

## Overview

The Chemical Supplies Management System is a web-based application designed to streamline the tracking and management of chemical inventory. This system provides users with an intuitive table interface for managing chemical details such as names, vendors, densities, viscosities, and packaging types. The application also supports Progressive Web App (PWA) functionality, allowing it to be installed on mobile devices and used offline.

![App Icon](/chemical_android.png)

### Features:

- Editable Table: Users can add, edit, and delete chemical entries directly within the table.
- Sorting: Columns are sortable, enabling easy filtering of data.
- Row Management: Move rows up and down for better organization.
- Local Storage: Data persists across sessions, even after the page is closed or refreshed.
- Offline Mode (PWA): The application can be installed on devices and used offline.
- Responsive Design: Fully functional on mobile devices, tablets, and desktops.

## Table of Contents

- [Project Structure](#project-structure)
  
- [Features](#features)
  
- [Installation](#installation)
  
- [Running the App](#running-the-app)
  
- [PWA Features](#pwa-features)
  
- [Technologies Used](#technologies-used)

- [File Structure](#file-structure)

- [Development Setup](#development-setup)

- [Contributing](#contributing)

- [License](#license)

## Project Structure

```
chemical-supplies-management/
│
├── index.html

├── style.css

├── app.js

├── manifest.json

├── service-worker.js

├── icon-192x192.png

└── README.md
```

### Key Files:

- index.html: The main HTML page that displays the application interface.
- style.css: Contains all the custom styles and layout for the app.
- app.js: JavaScript functionality that handles data manipulation, sorting, and saving.
- manifest.json: Defines metadata for PWA functionality.
- service-worker.js: Manages caching and offline usage for the PWA.
- Same Directory : Directory containing app icons and other image assets.

## Features

### 1. Table Management
   - Editable Fields: Users can click on cells to edit chemical names, vendor information, packaging details, and more.
   - Add Rows: Easily add new chemicals to the table by clicking the ➕ button.
   - Delete Rows: Remove unwanted rows by selecting them and clicking the 🗑️ button.
   - Move Rows: Rearrange table rows by selecting them and using the arrows (↑ and ↓) to change the order.
   - Real-Time Data Update: Changes to any field are reflected immediately without needing to refresh the page.

### 2. Data Persistence with Local Storage
   - Save to Local Storage: Data is automatically saved to the browser’s local storage, so the user’s table data is retained even after closing the browser.
   - Load from Local Storage: Upon reopening the application, the data from local storage is automatically loaded into the table.

### 3. Sorting
   - Clickable Column Headers: Click any column header (ID, Chemical Name, Vendor, Density, etc.) to sort the rows in ascending or descending order. The table allows both string and numeric sorting based on the column type.

### 4. PWA Functionality
   - Installable: Users can install the app on their devices by clicking "Add to Home Screen" in supported browsers like Chrome or Safari.
   - Offline Support: Thanks to the use of service workers, the app can function offline after being loaded once.

### 5. Responsive Design
   - The app is fully responsive and can be used on mobile devices, tablets, and desktops. The table layout adjusts dynamically based on the screen size.

## Installation

### Prerequisites

Ensure you have the following:

- A modern web browser (Chrome, Safari, Firefox) that supports PWAs and local storage.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chemical-supplies-management.git
   cd chemical-supplies-management
   ```

2. Open the project:
   - You can simply open `index.html` in your preferred browser.
   ```bash
   open index.html
   ```

### PWA Installation

1. Open the app in your browser.
2. Click the browser’s options (e.g., in Chrome, the three dots menu) and select **Add to Home Screen**.
3. Follow the prompts to install the app on your device.
4. Once installed, you can launch the app from your device’s home screen and use it offline.

## Running the App

You can simply run the application by opening `index.html` in your browser. No additional setup or dependencies are required.

## PWA Features

### Progressive Web App (PWA) Benefits

- Offline Mode: The app’s offline capability ensures that users can continue working even without an internet connection.
- Installation: The app can be installed on both mobile and desktop devices, providing a native-like experience.
- Caching: The service worker caches the essential files (HTML, CSS, JS), ensuring fast load times.

### Service Worker & Caching

- The service worker is implemented in `service-worker.js`. It caches important resources like `index.html`, `style.css`, and `app.js`.
- Upon subsequent visits or offline usage, the cached version of the app will be loaded.

## Technologies Used

- HTML5: Provides the structure of the web page.
- CSS3: Responsible for the styling and layout.
- JavaScript (ES6+): Handles data manipulation, table interactivity, local storage, and PWA functionality.
- Local Storage: Stores table data in the browser so users can save their progress and load it later.
- PWA Manifest: Defines metadata for the app, like the app icon and installation details.
- Service Workers: Enable offline functionality and caching for a better user experience.

## File Structure

### Key Files:

- index.html: The main structure of the application.
- style.css: Styling rules for the table, toolbar, and page layout.
- app.js: Main JavaScript file, handling the table operations, local storage, and sorting.
- manifest.json: Defines PWA properties (icons, theme colors, etc.).
- service-worker.js: Manages caching and allows offline usage.

### Example Directory Structure

chemical-supplies-management/
│

├── index.html                # Main HTML page

├── style.css                 # CSS file for styling

├── app.js                    # JavaScript file for handling app functionality

├── manifest.json             # PWA manifest

├── service-worker.js         # Service worker for offline support

├── icon-192x192.png          # App icon

└── README.md                 # Project documentation



## Development Setup

If you want to make changes or contribute to the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chemical-supplies-management.git
   ```

2. Navigate to the project directory:
   ```bash
   cd chemical-supplies-management
   ```

3. Make your changes:
   - Edit `index.html`, `style.css`, `app.js`, or any other files you want to change.
   - Use any text editor or IDE like VSCode.

4. Test your changes:
   - Open `index.html` in a browser to see your changes in action.

5. Commit and push:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin your-branch
   ```

## Contributing

Contributions are welcome! Please follow the steps below:

1. Fork the repository.
2. Create a branch for your feature.
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes.
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the branch.
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](./LICENSE) file.

---

### Additional Resources:

- Progressive Web Apps: [Web.Dev PWA Guide](https://web.dev/progressive-web-apps/)
- Local Storage: [MDN Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Service Workers: [Google Developers - Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers)


