import express, { Request, Response } from "express";

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("bem vindo ao curso de nodejs 3");
});

let usuarios = [
  {
    nome: "Felipe",
    idade: 31,
  },
  {
    nome: "Ricardo",
    idade: 12,
  },
];

app.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});

app.post("/users", (req: Request, res: Response) => {
  usuarios.push(req.body);
  res.send({
    message: "Usuário criado com sucesso",
  });
});

app.listen(3000, () => {
  console.log("Servidor ativo na porta 3000");
});
