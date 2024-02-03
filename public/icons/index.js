import Setting from "./Setting.jsx";
import Notification from "./Notification.jsx";
import Message from "./Message.jsx";
import Dashboard from "./Dashboard.jsx";
import Discount from "./Discount.jsx";
import Home from "./Home.jsx";
export const Logo = "/icons/logo.svg";
export const LogOut = "/icons/logout.svg";

export const MainNavbarIcons = [
	{
		img: Home,
		path: "/home",
	},
	{
		img: Discount,
		path: "/discount",
	},
	{
		img: Dashboard,
		path: "/dashboard",
	},
	{
		img: Message,
		path: "/message",
	},
	{
		img: Notification,
		path: "/notification",
	},
	{
		img: Setting,
		path: "/settings",
	},
];
