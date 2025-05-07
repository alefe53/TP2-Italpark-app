import { TicketRepository } from "../repository/ticket.repository.js";

export const TicketService = {
	serviceTicketValidation: (id) => {
		const codigoUser = TicketRepository.getById(id);
		if (!codigoUser) return null;
		return codigoUser;
	},
};
