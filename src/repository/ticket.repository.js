import { JsonHandler } from "../utils/JsonManager.js";

export const TicketRepository = {
	getById: async (id) => {

		const tickets = await JsonHandler.read();

		if (!tickets) return null;

		const ticket = tickets.find((ticket) => ticket.codUser === id);

		if (!ticket) return null;

		return ticket;
	},

	getAll: async () => await JasonHandler.read(),
};
