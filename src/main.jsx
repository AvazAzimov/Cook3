import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CategoryIdProvider } from "./context/CategoryId/CategoryId.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<CategoryIdProvider>
			<App />
		</CategoryIdProvider>
	</BrowserRouter>
);
