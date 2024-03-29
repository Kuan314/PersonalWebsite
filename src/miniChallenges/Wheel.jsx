import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const Spinner = () => {

	const [selections, setSelections] = useState([
		{
			option: "Eat"
		}, 
		{
			option: "Sleep"
		}, 
		{
			option: "Code"
		},
	]);

	const [selection, setSelection] = useState("");
	const [mustSpin, setMustSpin] = useState(false);
	const [priceNumber, setPriceNumber] = useState(0);

	const handleSpinClick = () => {
		setPriceNumber(Math.floor(Math.random() * selections.length))
		setMustSpin(true);
	}

	const handleAddSelection = (event) => {
    if(selection.match(/^[\S]+$/)){
      const updatedSelections = selections;
			updatedSelections.push(
				{
					option: selection
				}
			);
			console.log(updatedSelections)
			setSelections(updatedSelections);
    } else {
      alert("Your input is not valid!");
    }

    setSelection("");
		event.preventDefault();
	}

	const handleDeletedSelection = (deletedSelection) => {
		const updatedSelections = selections.filter(value => value !== deletedSelection);
		setSelections(updatedSelections);
	}

	const handleFinishSpin = () => {
		setMustSpin(false);
		alert("The result is " + selections[priceNumber].option);
	}

	return (
		<div className="flex justify-center">
			<div className="flex flex-col">
				<Wheel
					mustStartSpinning = {mustSpin}
					prizeNumber={priceNumber}
					data={selections}
					backgroundColors={['#6D7E85', '#243638']}
					textColors={['#FFFFFF']}
					onStopSpinning={handleFinishSpin}
				/>

				<button type="button" onClick={handleSpinClick} className="bg-textSecondary text-textPrimary px-1 w-20 rounded self-center">
					Spin
				</button>
			</div>
			
			<div className="flex flex-col items-center px-4">
				<div className="h-80 w-72 bg-textPrimary rounded text-textSecondary overflow-y-auto">
					{selections.map((selection) => {
						return (
							<>
							<div className="px-2 py-0.5 flex flex-row justify-between">
								<h1>
									{selection.option}
								</h1>
								
								<div className="flex">
									<button type="button" onClick={() => handleDeletedSelection(selection)}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</button>
								</div>
							</div>
							</>
						)
					})}
				</div>

				<form onSubmit={handleAddSelection} className="pt-4">
					<input className="px-1 border rounded-md" type="text" value={selection} onChange={e => setSelection(e.target.value)} />
					<button className="px-1 mx-2 border-textPrimary text-textPrimary rounded-md border-2">Submit</button>
				</form>
			</div>
				
		</div>
	)
}

export default Spinner;