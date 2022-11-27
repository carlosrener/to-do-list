import express from "express";
import routes from "./routes/routes.js";
import connectToDb from "./database/db.js"


const app = express();
const port = 5000;
connectToDb();

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.use(routes);



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} `);
});
