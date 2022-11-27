import express from "express";
import routes from "./routes/routes.js";


const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(routes);



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} `);
});
