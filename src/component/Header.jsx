import React from "react";

const navigation = [
	{name: "Challenges", href: "/PersonalWebsite/#/Challenges"},
	{name: "Website", href: "/PersonalWebsite/#/website"},
	{name: "Other", href: "#"}
];

function Header() {
	return (
		<div className="grid grid-cols-2 pt-4 mx-3">
			<div className="font-bold lg:text-2xl sm:text-lg text-textPrimary">
				<a href="/PersonalWebsite/">
					Home
				</a>
			</div>
			<div className="flex justify-end">
				{navigation.map((item) => (
					<a 
						key={item.name}
						href={item.href}
						className='px-2 py-1 mx-6 text-m font-bold border rounded border-black hover:ease-out'
					>
						{item.name}
					</a>
				))}
			</div>
		</div>
	)
}

export default Header;