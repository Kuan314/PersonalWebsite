const challengesList = [
	{
		name: "Counter",
		href: "./#/miniChallenge/Counter",
	},
	{
		name: "Todo",
		href: "./#/miniChallenge/Todo"
	}
];

function MiniChallenge() {
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

export default MiniChallenge;