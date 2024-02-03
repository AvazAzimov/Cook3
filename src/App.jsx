import { Route, Routes, Navigate, useMatch } from "react-router-dom";
import { MainNavbar } from "./components/MainNavbar/MainNavbar";
import { SettingsList } from "./components/settingsList/SettingsList";
import {
	Dashboard,
	Discount,
	Home,
	Message,
	Notification,
	Setting,
	Soup,
	Grill,
	Appetizer,
	Dessert,
	HotDishes,
	ColdDishes,
} from "./pages";

function App() {
	return (
		<div className="grid grid-cols-12 flex-grow relative">
			<MainNavbar />
			<Routes>
				<Route path="/" element={<Navigate to="/home" replace={true} />} />
				<Route path="/home/*" element={<Home />}>
					<Route index element={<HotDishes />} />
					<Route path="cold-dishes" element={<ColdDishes />} />
					<Route path="soup" element={<Soup />} />
					<Route path="grill" element={<Grill />} />
					<Route path="appetizer" element={<Appetizer />} />
					<Route path="dessert" element={<Dessert />} />
				</Route>
				<Route path="discount" element={<Discount />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="message" element={<Message />} />
				<Route path="notification" element={<Notification />} />
				<Route path="settings/*" element={<Setting />}>
					<Route index element={<SettingsList />} />
					<Route path="cold-dishes" element={<ColdDishes />} />
					<Route path="soup" element={<Soup />} />
					<Route path="grill" element={<Grill />} />
					<Route path="appetizer" element={<Appetizer />} />
					<Route path="dessert" element={<Dessert />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
