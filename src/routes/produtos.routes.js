import { Router } from "express";
import { v4 as uuid } from "uuid";

const produtoRouter = Router();

const produtos = [];

produtoRouter.get("/findByName", (req, res) => {
  const { name } = req.query;
  const results = produtos.filter((valores) =>
    valores.name.includes(String(name))
  );
  return res.json(results);
});

produtoRouter.post("/", (req, res) => {
  const { name, preco } = req.body;
  const produto = { id: uuid(), name, preco };

  const isProductExists = produtos.find((produto) => produto.name === name);

  if (isProductExists) {
    return res.status(400).json({ message: "Esse produto já existe." });
  }

  produtos.push(produto);

  return res.json(produto);
});

produtoRouter.put("/:id", (req, res) => {
  const { id } = req.params;

  const { name, preco } = req.body;

  const produtoIndex = produtos.findIndex((produtos) => produtos.id === id);

  if (produtoIndex < 0) {
    return res.status(400).json({ erro: "Deu erro, esse produto não existe." });
  }

  const produto = { id, name, preco };

  produtos[produtoIndex] = produto;

  return res.json(produto);
});

produtoRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  const produtoIndex = produtos.findIndex((produtos) => produtos.id === id);

  if (produtoIndex < 0) {
    return res.status(400).json({ erro: "Deu erro, esse produto não existe." });
  }

  produtos.splice(produtoIndex, 1);

  return res.send();
});

export default produtoRouter;
