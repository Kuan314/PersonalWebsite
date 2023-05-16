import React from "react";

const challengesList = [
	{
		name: "Counter",
		href: "./#/Challenges/Counter",
		status: true,
	},
	{
		name: "Todo",
		href: "./#/Challenges/Todo",
		status: true,
	},
	{
		name: "Lucky Wheel",
		href: "./#/Challenges/Wheel",
		status: true,
	},
	{
		name: "CountDown",
		href: "./#/Challenges/CountDown",
		status: true,
	},
];

function Challenges() {
	return (
		<div className="grid grid-cols-4 gap-6 mx-8 mt-4">
			{challengesList.map((challenge) => {
				return (
					<div className={`bg-textPrimary m-4 ${challenge.status ? '' : "opacity-60 pointer-events-none"}`}>
						<a href={challenge.href} className="flex justify-center text-xl py-8 text-textSecondary">
							{challenge.name}
						</a>
					</div>
				)
			})}
		</div>
	)
}

export default Challenges;