import { Elysia } from "elysia";
import { readFile } from "fs/promises";
import path from "path";
import apiRoutes from "./routes/api";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia();

app.get("/", async ({ set }) => {
  const filePath = path.join(process.cwd(), "public", "index.html");
  const content = await readFile(filePath, "utf-8");

  set.headers = {
    "Content-Type": "text/html"
  };

  return content;
});

app.get("/:file", async ({ params }) => {
  const filePath = path.join(process.cwd(), "public", params.file);
  try {
    const content = await readFile(filePath);
    return content;
  } catch {
    return { status: 404, message: "File not found" };
  }
});

app.use(apiRoutes);

app.use(
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

export default app;
