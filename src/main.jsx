import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CategoryIdProvider } from "./context/CategoryId/CategoryId.jsx";
import { OrderDishesProvider } from "./context/CategoryId/OrderedDishes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<CategoryIdProvider>
			<OrderDishesProvider>
				<App />
			</OrderDishesProvider>
		</CategoryIdProvider>
	</BrowserRouter>
);
