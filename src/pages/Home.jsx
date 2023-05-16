import React from "react";
import { TypeAnimation } from "react-type-animation";
import Header from '../component/Header';

function Home() {
		return (
			<div className='bg-black h-screen'>
				<Header />
				<div className="mt-4 flex sm:justify-center justify-start items-center">
					<h2 className="text-textPrimary text-2xl font-bold">
						<TypeAnimation
							sequence={[
								'H', 400, 
								'Hi', 600, 
								'Hi, ', 400, 
								'Hi, I', 300, 
								'Hi, I\'', 300, 
								'Hi, I\'m', 300, 
								'Hi, I\'m ', 500, 
								'Hi, I\'m L', 300, 
								'Hi, I\'m LI', 300, 
								'Hi, I\'m LIM', 300, 
								'Hi, I\'m LIM ', 500, 
								'Hi, I\'m LIM Z', 300, 
								'Hi, I\'m LIM ZH', 300, 
								'Hi, I\'m LIM ZHE', 300, 
								'Hi, I\'m LIM ZHEN', 300, 
								'Hi, I\'m LIM ZHENG', 300, 
								'Hi, I\'m LIM ZHENG ', 500, 
								'Hi, I\'m LIM ZHENG K', 300, 
								'Hi, I\'m LIM ZHENG KU', 300, 
								'Hi, I\'m LIM ZHENG KUA', 300, 
								'Hi, I\'m LIM ZHENG KUAN'
							]}
							
							wrapper="span"
						/>
					</h2>
				</div>
			</div>
		);
};

export default Home;