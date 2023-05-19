import React from "react";

const Header = () => {
	return (
		<div className="grid grid-cols-2 pt-4 pb-4 mx-3 min-w-screen text-textPrimary">
			<div className="font-bold sm:text-2xl text-xl ">
				<a href="/PersonalWebsite">
					Home
				</a>
			</div>
			<div className="flex justify-end">
				<a href={"/PersonalWebsite/#/Challenges"}
					className="sm:px-2 sm:py-1 p-1 sm:text-m text-s sm:mx-6 mx-1 font-bold border rounded border-textPrimary hover:ease-out"
				>
					Challenges
				</a>
			</div>
		</div>
	)
}

export default Header;