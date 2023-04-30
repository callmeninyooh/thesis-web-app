let contents = [
	{
		id: 0,
		title: 'Install Smoke Detectors',
		content: 'Ensure that your building has smoke detectors installed and that they are tested regularly to ensure that they are functioning properly.',
		image: 'https://www.svgrepo.com/show/288912/smoke-detector.svg'
	},
	{
		id: 1,
		title: 'Have Fire Extinguishers',
		content: 'Make sure that you have the appropriate fire extinguishers installed in your building and that they are regularly inspected and serviced.',
		image: 'https://www.svgrepo.com/download/288971/fire-extinguisher.svg'
	},
	{
		id: 2,
		title: 'Develop an Evacuation Plan',
		content: 'Create and practice a fire evacuation plan with the administration, students, employees, staffs and the local government unit, so everyone knows what to do in case of fire. Ensure that emergency exits are clearly marked and that there are no obsctructions booking.',
		image: 'https://www.svgrepo.com/show/509522/safety-evacuation-shelter.svg'
	},
	{
		id: 3,
		title: 'Conduct fire drills',
		content: 'Regularly conduct fire drills to test the evacuation plan with your employees and tenants, so everyone knows what to do in case of a fire. Ensure that emergency exits are clear clearly marked and that there are no obstructions blocking escapes routes.',
		image: 'https://www.svgrepo.com/show/180311/fire-truck-transport.svg'
	},
	{
		id: 4,
		title: 'Avoid overloading electrical outlets.',
		content: 'Do not overload electrical outlets or use extension cords excessively, as this can cause overheating and lead to a fire.',
		image: 'https://www.svgrepo.com/show/29847/plug.svg'
	},
	{
		id: 5,
		title: 'Keep flammable materials away from heat sources',
		content: 'Store flammable materials such as gasoline, solvents, and cleaning chemicals, in a cool, dry place and away from heat sources.',
		image: 'https://www.svgrepo.com/show/244240/flammable-flame.svg'
	}
]

export const load = async () => {
	return {
		contents
	}
}
