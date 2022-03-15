import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          description: "Desenvolvimento de site",
          amount: 3000,
          type: "deposit",
          category: "Trabalho",
          createdAt: new Date("2022-02-02 08:00:00"),
        },
        {
          id: 2,
          description: "Desenvolvimento de aplicativo",
          amount: 3500,
          type: "deposit",
          category: "Trabalho",
          createdAt: new Date("2022-06-02 08:00:00"),
        },
        {
          id: 3,
          description: "Compra de teclado",
          amount: 100,
          type: "withdraw",
          category: "Trabalho",
          createdAt: new Date("2022-06-02 08:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transaction", () => {
      return this.schema.all("transaction");
    });

    this.post("/transaction", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
