import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PopupProvider } from "./context/PopupContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";

const environment = "Development";
// const environment = 'Production';
export const SERVER_URI =
  environment === "Production"
    ? ""
    : "https://mildly-obliging-crane.ngrok-free.app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <PopupProvider>
      <App />
    </PopupProvider>
    <Toaster />
  </AuthProvider>
);
