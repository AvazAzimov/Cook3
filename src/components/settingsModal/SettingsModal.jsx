import axios from "axios";
import { useEffect, useState } from "react";

export const SettingsModal = ({ setModalSwitch, title, firstButton, secondButton }) => {
	const [category, setCategory] = useState([]);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const formData = new FormData();

		formData.set(evt.target[0].name, evt.target[0].value);
		formData.set(evt.target[1].name, evt.target[1].value);
		formData.set(evt.target[2].name, evt.target[2].value);
		formData.set(evt.target[3].name, evt.target[3].value);
		formData.set(evt.target[4].name, evt.target[4].files[0]);

		axios.postForm("http://localhost:5000/food", formData).then((res) => {
			console.log(res);
		});
	};

	useEffect(() => {
		axios("http://localhost:5000/category").then((res) => {
			setCategory(res.data);
		});
	}, []);

	return (
		<>
			{
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="bg-[#1F1D2B] p-8 w-[520px] rounded opacity-100 relative">
						<div className="flex justify-between mb-8">
							<h2 className="text-2xl font-bold">{title}</h2>
							<button
								className="border px-3 text-4xl absolute top-4 right-4 rounded-lg"
								onClick={() => setModalSwitch(false)}>
								&times;
							</button>
						</div>
						<form
							className="flex flex-col gap-5"
							onSubmit={handleSubmit}
							encType="multipart/form-data">
							<input
								type="text"
								placeholder="Product name  "
								name="name"
								className="bg-[#2D303E] p-4 rounded-lg placeholder:text-[#E0E6E9]"
							/>
							<input
								type="text"
								placeholder="Product bowls"
								name="price"
								className="bg-[#2D303E] p-4 rounded-lg placeholder:text-[#E0E6E9]"
							/>
							<input
								type="text"
								placeholder="Product price"
								name="bowls"
								className="bg-[#2D303E] p-4 rounded-lg placeholder:text-[#E0E6E9]"
							/>
							<select
								className="bg-[#2D303E] p-4 rounded-lg placeholder:text-[#E0E6E9]"
								name="category_id">
								<option unselectable={"on"}>Product category </option>
								{category &&
									category.map((item) => (
										<option key={item.id} value={item.id}>
											{item.name}
										</option>
									))}
							</select>
							<input type="file" name="food_img" />
							<div className="flex gap-5">
								<button
									className="p-4 flex-grow border border-[#EA7C69] text-[#EA7C69] rounded-lg"
									type="button">
									{firstButton}
								</button>
								<button className="p-4 flex-grow bg-[#EA7C69] rounded-lg" type="submit">
									{secondButton}
								</button>
							</div>
						</form>
					</div>
				</div>
			}
		</>
	);
};
