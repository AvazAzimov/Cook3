import { Children, createContext, useState } from "react";

export const OrderDishes = createContext();

export const OrderDishesProvider = ({ children }) => {
	const [orderedDishes, setOrderedDishes] = useState([]);

	return (
		<OrderDishes.Provider value={{ orderedDishes, setOrderedDishes }}>
			{children}
		</OrderDishes.Provider>
	);
};
