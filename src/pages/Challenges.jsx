import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Challenges = () => {
	return (
		<div className='bg-black h-screen'>
			<Header />
			<Outlet />

		</div>
	)
}

export default Challenges;