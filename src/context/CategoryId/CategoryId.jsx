import { createContext, useState } from "react";

export const CategoryId = createContext();

export const CategoryIdProvider = ({ children }) => {
	const [id, setId] = useState(1);

	return <CategoryId.Provider value={{ id, setId }}>{children}</CategoryId.Provider>;
};
