import { Router } from "express";

import produtosRoutes from "./produtos.routes";

const router = Router();

router.use("/produtos", produtosRoutes);

export default router;
