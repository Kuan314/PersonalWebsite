import React from "react";

const navigation = [
	{name: "a", href: "#"},
	{name: "b", href: "#"},
	{name: "c", href: "#"},
	{name: "d", href: "#"},
];

function Header() {
	return (
		<div className="grid grid-cols-2 mt-4 mx-3">
			<div className="font-bold text-2xl">
				logo
			</div>
			<div className="flex justify-around">
				{navigation.map((item) => (
					<a 
						key={item.name}
						href={item.href}
						className='text-m font-bold'
					>
						{item.name}
					</a>
				))}
			</div>
		</div>
	)
}

export default Header;