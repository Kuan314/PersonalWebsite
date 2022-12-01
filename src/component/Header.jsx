import React from "react";

const navigation = [
	{name: "Mini Challenge", href: "/PersonalWebsite/#/miniChallenge"},
	{name: "Website", href: "/PersonalWebsite/#/website"},
	{name: "Other", href: "#"}
];

function Header() {
	return (
		<div className="grid grid-cols-2 mt-4 mx-3">
			<div className="font-bold text-2xl">
				<a href="/PersonalWebsite/">
					Home
				</a>
			</div>
			<div className="flex justify-around">
				{navigation.map((item) => (
					<a 
						key={item.name}
						href={item.href}
						className='px-3 py-1 text-m font-bold border rounded border-black'
					>
						{item.name}
					</a>
				))}
			</div>
		</div>
	)
}

export default Header;