import { useContext, useEffect, useState } from "react";
import { Temporary_Dishes } from "../../../constants";
import axios from "axios";
import { CategoryId } from "../../../context/CategoryId/CategoryId";

export const HotDishes = () => {
	const [dishes, setDishes] = useState([]);
	const { id } = useContext(CategoryId);

	useEffect(() => {
		axios(`http://localhost:5000/food/${id}`).then((res) => {
			setDishes(res.data);
			console.log(res);
		});
	}, []);

	return (
		<div className="">
			<div className="flex items-center justify-between font-semibold mb-[78px]">
				<h3 className="text-xl">Choose Dishes </h3>
				<select className="dishes__select text-white appearance-none">
					<option defaultValue={""}>Dine In</option>
				</select>
			</div>
			<ul className="grid grid-cols-3 gap-x-7 gap-y-14">
				{dishes &&
					dishes.map(({ id, image, name, price, bowls }) => {
						return (
							<li
								key={id}
								className="bg-[#1F1D2B] flex flex-col relative items-center px-[30px] pt-[114px] pb-6 rounded-lg">
								<img
									className="absolute -top-[34px] rounded-full"
									src={`http://localhost:5000/${image}`}
									width={132}
									height={132}
									alt=""
								/>
								<h3 className="text-[14px] font-medium text-center mb-2">{name}</h3>
								<ins className="no-underline mb-1 text-[14px]">{price}</ins>
								<span className="text-[14px] text-[#ABBBC2]">{bowls}</span>
							</li>
						);
					})}
			</ul>
		</div>
	);
};
