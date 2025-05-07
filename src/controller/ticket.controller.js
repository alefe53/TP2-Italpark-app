export const TicketController = {
	ticketValidation: (req, res) => {
		const { codUser } = req.params;

		res.json({ codUser });
	},
};
