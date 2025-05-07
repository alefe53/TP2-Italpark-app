import { Router } from "express";

const statusRouter = Router();

statusRouter.get("/v01/status", (req, res) => {
	res.json({
		status: 200,
		timestatus: new Date().toISOString(),
		message: "Bienvenidos al Italpark",
	});
});
statusRouter.get("/v02/status", (req, res) => {
	res.json({
		status: 200,
		timestatus: new Date().toISOString(),
		message: "Bienvenidos al Italpark",
        location:["¡En algun lugar del infinito!"]
	});
});


export { statusRouter };
