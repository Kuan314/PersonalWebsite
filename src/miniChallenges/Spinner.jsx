import React, { useState } from "react";

const selections = [];

const PickerWheel = () => {

	const [selection, setSelection] = useState("");

	const addSelection = () => {
    if(selection.match(/^[\S]+$/)){
      selections.push(
				{
					name: selection,
				}
			);
    } else {
      alert("Your input is not valid!");
    }

    setSelection("");
	}

	return (
		<>
		<div className="flex flex-col items-center">
			<div className=" w-80 h-80 rounded-full bg-secondary">
				{selections.map((selection) => {
					return (
						<h1>{selection.name}</h1>
					)
				})}
			</div>

      <form onSubmit={addSelection} className="pt-4">
        <input className="px-1 border rounded-md" type="text" value={selection} onChange={e => setSelection(e.target.value)} />
        <button className="px-1 mx-2 border-textSecondary rounded-md border-2">Submit</button>
      </form>
				
		</div>
		</>
	)
}

export default PickerWheel;