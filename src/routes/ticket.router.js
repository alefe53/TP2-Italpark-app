import {Router} from "express";
import { TicketController } from "../controller/ticket.controller.js";

const ticketRouter = Router()

ticketRouter.post("/ticket-valid/:codUser",TicketController.ticketValidation)
ticketRouter.get("/ticket",(req,res)=>{})
ticketRouter.put("/update-exp-Date",(req,res)=>{})
ticketRouter.delete("/ticket",(req,res)=>{})

export {ticketRouter}



