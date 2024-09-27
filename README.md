# Vite React + Tailwind CSS + Styled Components Template

This project template combines **Vite**, **React**, **Tailwind CSS**, and **Styled Components**. Additionally, it dynamically sets the app name based on the GitHub repository name.

## Features

- **Vite**: Fast development environment for React apps.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Styled Components**: CSS-in-JS library for flexible component styling.
- **Dynamic App Name**: Automatically sets the app name based on the GitHub repo name from `package.json`.

## Installation & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
npm run build
```

## Project Structure

```
.
├── public
├── src
│   ├── App.jsx        # Main React component
│   ├── index.css      # Tailwind CSS configuration
│   ├── main.jsx       # Entry point for Vite
│   └── components     # Reusable components
├── package.json       # Project configuration
├── tailwind.config.js # Tailwind CSS settings
└── vite.config.js     # Vite configuration, including dynamic app name
```

## Customization

- **App Name**: The app name is dynamically set in the vite.config.js file, pulling from the name field in package.json.
- **Styling**: You can use both Tailwind CSS utility classes and Styled Components for styling individual components.

## Example with Styled Components

```jsx
import styled from "styled-components";

const Button = styled.button`
  @apply bg-blue-500 text-white p-2 rounded;
`;

function App() {
  return (
    <div className="p-4">
      <h1>Welcome to {__APP_NAME__}</h1>
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more details.
