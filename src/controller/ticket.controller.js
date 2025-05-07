export const TicketController = {
	ticketValidation: (req, res) => {
		const { codUser } = req.params;
		console.log(codUser);
        console.log("Ale");
		res.json({ codUser });
	},
};
