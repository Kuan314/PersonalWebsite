import React from "react";

const selection = [
	
];

const PickerWheel = () => {
	return (
		<>
		<div className="flex justify-center">
				<div className="w-60 h-60 rounded-full bg-secondary">
					{selection}
				</div>
				
		</div>
		</>
	)
}

export default PickerWheel;