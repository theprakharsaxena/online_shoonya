import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PopupProvider } from "./context/PopupContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";

const environment = "Development";
// const environment = 'Production';
export const SERVER_URI =
  environment === "Production" ? "" : "http://127.0.0.1:5000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <PopupProvider>
      <App />
    </PopupProvider>
    <Toaster />
  </AuthProvider>
);
