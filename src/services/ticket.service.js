import { TicketRepository } from "../repository/ticket.repository";

export const TicketService = {
	serviceTicketValidation: (id) => {
		const codigoUser = TicketRepository.getById(id);
		if (!codigoUser) return null;
		return codigoUser;
	},
};
