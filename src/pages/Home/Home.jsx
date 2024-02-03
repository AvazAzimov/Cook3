import { NavLink, Outlet } from "react-router-dom";
import { Home_Nav, Temporary_Dine_In } from "../../constants";
import Delete from "../../../public/icons/Delete";
import "flowbite/dist/flowbite.min.js";
import Card from "../../../public/icons/Card";
import Paypal from "../../../public/icons/Paypal";
import Cash from "../../../public/icons/Cash";

export const Home = () => {
	return (
		<>
			<div className="col-start-2 col-span-8 pt-[13px] ms-1 pe-11 leading-[140%]">
				<div className="flex items-center justify-between mb-6">
					<div>
						<h1 className="text-[28px] font-semibold">Jaegar Resto</h1>
						<time className="">Tuesday, 2 Feb 2021</time>
					</div>
					<label className="bg-[#393C49]  text-sm flex items-center p-3 rounded-lg">
						<img className="me-2" src={"/icons/search.svg"} width={20} height={20} alt="" />
						<input
							className="bg-[#393C49] outline-none border-0 focus:ring-0"
							placeholder="Search for food, coffe, etc.."
							type="search"
						/>
					</label>
				</div>
				<nav>
					<ul className="flex gap-x-8 text-sm font-semibold">
						{Home_Nav.map((item) => {
							return (
								<li key={item.id}>
									<NavLink
										className={
											("transition-colors", ({ isActive }) => (isActive ? "home-link-active" : ""))
										}
										to={"/home" + item.path}
										end>
										{item.name}

										<span className="inline-block rounded-sm h-1 w-3/5"></span>
									</NavLink>
								</li>
							);
						})}
					</ul>
				</nav>
				<Outlet />
			</div>
			<div className="sticky top-0  h-screen col-span-3 grow p-6 bg-[#1F1D2B]">
				<h2 className="text-[20px] font-medium mb-6">Orders #34562</h2>
				<div className="flex gap-x-2 mb-6">
					<label>
						<input
							className="meal__types visually-hidden"
							type="radio"
							name="type_meal"
							value="Dine in"
							defaultChecked
						/>
						<span className="btn bg-inherit text-[#ea7c69] hover:bg-[#EA7C69] hover:text-white text-[14px] font-semibold input_label py-[7px] px-[12px] border border-[#393C49]">
							Dine In
						</span>
					</label>
					<label>
						<input
							className="meal__types visually-hidden"
							type="radio"
							name="type_meal"
							value="To Go"
						/>
						<span className="btn bg-inherit text-[#ea7c69] hover:bg-[#EA7C69] hover:text-white text-[14px] font-semibold input_label py-[7px] px-[12px] border border-[#393C49]">
							To Go
						</span>
					</label>
					<label>
						<input
							className="meal__types visually-hidden"
							type="radio"
							name="type_meal"
							value="Delivery"
						/>
						<span className="btn bg-inherit text-[#ea7c69] hover:bg-[#EA7C69] hover:text-white text-[14px] font-semibold input_label py-[7px] px-[12px] border border-[#393C49]">
							Delivery
						</span>
					</label>
				</div>
				<div className="grid grid-cols-5 text-center pb-6 border-b border-[#393C49]">
					<strong className="col-span-3 text-left">Item</strong>
					<strong className="grow-1">Qty</strong>
					<strong className="grow-1">Price</strong>
				</div>
				<ul className="pt-7 mb-7 flex flex-col gap-y-7 max-h-[51%] overflow-y-scroll">
					{Temporary_Dine_In.map(({ img, title, price, count, id }) => (
						<li key={id}>
							<div className="grid grid-cols-5 mb-2.5 gap-x-4">
								<div className="flex items-start col-span-3">
									<img className="me-2 shrink-0" src={img} width={40} height={40} alt="" />
									<div>
										<h4 className="mb-1 text-sm leading-[130%] font-medium whitespace-nowrap truncate w-36">
											{title}
										</h4>
										<span className="text-xs leading-[140%] ">{price}</span>
									</div>
								</div>
								<button className="bg-[#2D303E] p-3.5 pb-3 rounded-lg font-medium" type="button">
									{count}
								</button>
								<strong className="self-center">$ 4,58</strong>
							</div>
							<div className="grid grid-cols-5 gap-x-4">
								<input
									className="bg-[#2D303E] outline-none p-3.5 rounded-lg grow col-span-4"
									placeholder="Order Note..."
									type="text"
								/>
								<button
									className="flex items-center justify-center border rounded-lg border-[#EA7C69]"
									type="button">
									<Delete className="text-[#EA7C69] text-xl" />
								</button>
							</div>
						</li>
					))}
				</ul>
				<div className="mb-6">
					<p className="flex justify-between mb-4">
						Discount <strong>$0</strong>
					</p>
					<p className="flex justify-between">
						Sub total <strong> $ 21,03</strong>
					</p>
				</div>
				<button
					className="flex w-full text-[14px] font-semibold grow justify-center py-3.5 bg-[#EA7C69] rounded-lg buttons__shadow"
					type="button"
					data-drawer-target="drawer-right-example"
					data-drawer-show="drawer-right-example"
					data-drawer-placement="right"
					aria-controls="drawer-right-example">
					Continue to Payment
				</button>
			</div>
			<div
				id="drawer-right-example"
				className="fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform translate-x-full bg-[#1F1D2B] w-3/12 p-6 pt-16F"
				tabIndex={-1}
				aria-labelledby="drawer-right-label">
				<div className="pb-6 mb-6 border-b border-[#393C49]">
					<h3 className="text-[28px] font-semibold mb-2">Payment</h3>
					<p className="text-[#ABBBC2]">3 payment method available</p>
				</div>
				<h4 className="mb-4 text-[20]">Payment Method</h4>
				<div className="flex gap-x-2 justify-stretch mb-4">
					<label>
						<input
							className="method__types visually-hidden"
							type="radio"
							name="payment_method"
							defaultChecked
						/>
						<span className="inline-flex flex-col items-center px-4 border text-[#ABBBC2] border-[#393C49] rounded-lg py-2.5 cursor-pointer text-[14px] leading-[130%] relative min-w-[101px] whitespace-nowrap">
							{<Card className="w-6 h-6" />}
							Credit Card
						</span>
					</label>
					<label>
						<input className="method__types visually-hidden" type="radio" name="payment_method" />
						<span className="inline-flex flex-col items-center px-4 border text-[#ABBBC2] border-[#393C49] rounded-lg py-2.5 cursor-pointer text-[14px] leading-[130%] relative min-w-[101px]">
							{<Paypal className="w-6 h-6" />}
							Paypal
						</span>
					</label>
					<label>
						<input className="method__types visually-hidden" type="radio" name="payment_method" />
						<span className="inline-flex flex-col justify-between items-center px-4 border text-[#ABBBC2] border-[#393C49] rounded-lg py-2.5 cursor-pointer text-[14px] leading-[130%] relative min-w-[101px] whitespace-nowrap h-full">
							{<Cash className="w-5 h-[19px]" />}
							Credit Card
						</span>
					</label>
				</div>
				<div className="pb-4 border-b mb-4 border-[#393C49]">
					<label className="font-medium" htmlFor="name">
						Cardholder Name
					</label>
					<input
						className="block mt-2 bg-[#2D303E] focus:ring-transparent border-[#393C49] rounded-lg w-full p-3.5 ring-0 focus:border-white mb-4"
						type="text"
						placeholder="Levi Ackerman"
						id="name"
					/>
					<label className="font-medium" htmlFor="number">
						Card Number
					</label>
					<input
						className="block mt-2 bg-[#2D303E] focus:ring-transparent border-[#393C49] rounded-lg w-full p-3.5 ring-0 focus:border-white mb-8"
						type="text"
						placeholder="2564 1421 0897 1244"
						id="number"
					/>
					<div className="flex gap-x-[13px]">
						<label className="font-medium">
							Expiration Date
							<input
								className="mt-2 bg-[#2D303E] focus:ring-transparent border-[#393C49] rounded-lg w-full p-3.5 ring-0 focus:border-white"
								type="month"
							/>
						</label>

						<label className="font-medium">
							CVV
							<input
								className="mt-2 bg-[#2D303E] focus:ring-transparent border-[#393C49] rounded-lg w-full p-3.5 ring-0 focus:border-white  tracking-[8px] text-[20px]"
								type="password"
								maxLength={3}
								max={3}
							/>
						</label>
					</div>
				</div>
				<div className="flex gap-x-[13px]">
					<label htmlFor="dishes__payment">
						Order Type
						<select
							className="block dishes__select mt-2 text-white appearance-none"
							id="dishes__payment">
							<option defaultValue={""}>Dine In</option>
						</select>
					</label>
					<label htmlFor="dishes__payment">
						Table no.
						<input
							className="block mt-2 bg-[#2D303E] focus:ring-transparent border-[#393C49] rounded-lg w-full p-3.5 ring-0 focus:border-white mb-8 cursor-not-allowed"
							type="number"
							defaultValue={140}
							disabled
						/>
					</label>
				</div>
				<div className="grid grid-cols-2 text-center gap-x-2">
					<button
						className="text-[14px] font-semibold py-3.5 border-[#EA7C69] border rounded-lg"
						type="button">
						Cancel
					</button>
					<button
						className="text-[14px] buttons__shadow font-semibold py-3.5 bg-[#EA7C69] rounded-lg"
						type="button">
						Confirm Payment
					</button>
				</div>
			</div>
		</>
	);
};
