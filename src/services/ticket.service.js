export const TicketService = {
	serviceTicketValidation: (id) => {
		const codigoUser = getById(id);
		if (!codigoUser) return null;
		return codigoUser;
	},
};
