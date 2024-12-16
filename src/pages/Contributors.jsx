import React from "react";

const contributors = [
	{
		name: "apexcoder007",
		github: "https://github.com/apexcoder007",
		avatar: "https://avatars.githubusercontent.com/u/155891907?s=400&u=b074c4b80f8146e0d1959110ea680af8468792d1&v=4",
	},
	{
		name: "Ashish",
		github: "https://github.com/Asheeesh9",
		avatar: "https://avatars.githubusercontent.com/u/149046896?v=4",
	},
	{
		name: "Vinayak",
		github: "https://github.com/07CalC",
		avatar: "https://avatars.githubusercontent.com/u/96346957?s=48&v=4"
  },
  {
		name: "Ritesh",
		github: "https://github.com/rndastech",
		avatar: "https://avatars.githubusercontent.com/u/148974606?v=4",
	},
{
		name: "Sharuka",
		github: "https://github.com/SHARUKA-2005",
		avatar: "https://avatars.githubusercontent.com/u/157145133?v=4",
	},
	// Add more contributors here
];

const Contributors = () => {
	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<h1 className="text-3xl font-bold text-center mb-6">
				Our Amazing Contributors of FandomFusion
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{contributors.map((contributor, index) => (
					<div
						key={index}
						className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4"
					>
						<img
							src={contributor.avatar}
							alt={`${contributor.name}'s avatar`}
							className="w-20 h-20 rounded-full mb-4"
						/>
						<h2 className="text-lg font-semibold">{contributor.name}</h2>
						<a
							href={contributor.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline mt-2"
						>
							View GitHub Profile
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Contributors;
