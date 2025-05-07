import { TicketService } from "../services/ticket.service.js";

export const TicketController = {
	ticketValidation: (req, res) => {
		const { codUser } = req.params;
		const ticket = TicketService.serviceTicketValidation(codUser);
		if (!ticket) {
			res.status(404).json({
				payload: [],
				message: "No Ticket",
				ok: false,
			});
		}
		res.status(200).json({
			message: "Success",
			payload: ticket.id,
			ok: true,
		});
	},
};
