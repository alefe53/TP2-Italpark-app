import { Router } from "express";
import { TicketController } from "../controller/ticket.controller.js";

const ticketRouter = Router();

ticketRouter.get("/ticket-valid/:codUser", TicketController.ticketValidation);
ticketRouter.post("/ticket", (req, res) => {});
ticketRouter.put("/update-exp-Date", (req, res) => {});
ticketRouter.delete("/ticket", (req, res) => {});

export { ticketRouter };
