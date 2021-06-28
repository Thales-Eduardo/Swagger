import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

import router from "./routes";

const app = express();
const port = 3333;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

app.listen(port, () => {
  console.log(`no ar http://localhost:${port} 🔥🔥🚒`);
  console.log(`docs http://localhost:${port}/api-docs`);
});
