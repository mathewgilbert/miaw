import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import apiRoutes from "./routes/api";
import { swagger } from "@elysiajs/swagger";

export default new Elysia()
.use(html())
.get(
    "/",
    () =>
      `
        <meta http-equiv="refresh" content="0; url=/docs">
      `
  )
  .use(apiRoutes)
  .use(
    swagger({
      path: "/docs",
      documentation: {
        info: {
          title: "Miaw API",
          version: "1.0.0",
          description: "Miaw API Fast With Elysia.js"
        }
      }
    })
  );
  