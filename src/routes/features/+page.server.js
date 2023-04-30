let contents = [
	{
		id: 0,
		alt: 'sms logo',
		content: 'A fire alarm system that sends SMS message to a list of mobile phone numbers when a fire breaks out at a specific location.',
		image: 'https://www.svgrepo.com/show/249728/sms.svg'
	},
	{
		id: 1,
		alt: 'school fire png',
		content: 'Automatic triggering: A fire alarm system is designed to automatically trigger when it detects smoke, heat, or flames. This triggers an audible and visible alarm to alert occupants and initiate the process of sending a message to the fire department.',
		image: 'https://thumb.ac-illust.com/12/12e7bd64c2e007cca20201a5bb24b1e9_t.jpeg'
	},
	{
		id: 2,
		alt: 'alarm logo',
		content: 'Notifications to occupants: Once the fire alarm system is triggered , it can send a message to the occupants of the building through a loudspeaker or an intercom system. The message can provide information on the location of fire, the evacuation procedures, and other important instructions.',
		image: 'https://static.vecteezy.com/system/resources/previews/014/628/063/original/red-fire-alarm-bell-icon-an-electric-bell-sounds-to-alert-you-in-the-event-of-a-fire-png.png'
	},
	{
		id: 3,
		content: 'Notification to the fire department: A fire alarm system can also be set up to send a message directly to the fire department. The message can provide details about the location and severity of the fire, the number of occupants in the building, and other critical information that can help the fire department respond effectively.'
	}
]


export const load = async () => {
	return {
		contents
	}
}
