export class Ticket {
	constructor(
		id,
		userCode,
		tipoEntrada = "classic",
		expDate = new Date(new Date.getDate() + 7 * 24 * 60 * 60 * 1000),
	) {
		this.id;
		this.tipoEntrada;
		this.userCode;
		this.expDate;
	}
}
