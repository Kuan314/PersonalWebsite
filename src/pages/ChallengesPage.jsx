import React from "react";
import challengesList from "../miniChallenges/challengesList.json";

const ChallengesPage = () => {
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
	);
};

export default ChallengesPage;