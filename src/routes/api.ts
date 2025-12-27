import { Elysia, t } from "elysia";

const routes = new Elysia();

routes.get("/hello", () => "Hello from routes Route");

export default routes;
