import React from "react";

const challengesList = [
	{
		name: "Counter",
		href: "./#/Challenges/Counter",
	},
	{
		name: "Todo",
		href: "./#/Challenges/Todo"
	},
	{
		name: "Lucky Wheel",
		href: "./?#/Challenges/Wheel"
	},
];

function Challenges() {
	return (
		<div className="grid grid-cols-4 gap-6 bg-primary mx-8 mt-4">
			{challengesList.map((challenge) => {
				return (
					<div className="bg-secondary m-4">
						<a href={challenge.href} className="flex justify-center text-xl py-8">
							{challenge.name}
						</a>
					</div>
				)
			})}
		</div>
	)
}

export default Challenges;