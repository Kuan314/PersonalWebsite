import React, { useState } from "react";

const PickerWheel = () => {

	const selections = [];
	const [selection, setSelection] = useState("");

	const addSelection = () => {
    if(selection.match(/^[\S]+$/)){
      selections.push(selection);
    } else {
      alert("Your input is not valid!");
    }

    setSelection("");
	}

	return (
		<>
		<div className="flex justify-center">
			<div className="w-60 h-60 rounded-full bg-secondary">
				{selection}
			</div>

      <form onSubmit={addSelection}>
        <input className="px-1 border rounded-md" type="text" value={selection} onChange={e => setSelection(e.target.value)} />
        <button className="px-1 mx-2 border-textSecondary rounded-md border-2">Submit</button>
      </form>
				
		</div>
		</>
	)
}

export default PickerWheel;