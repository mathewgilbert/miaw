import { Elysia, t } from 'elysia'
import { swagger } from "@elysiajs/swagger";
import { staticPlugin } from '@elysiajs/static';
import apiRoutes from "./routes/api";

export default new Elysia() 
    .use(staticPlugin())
    .use(apiRoutes)
    .use(
      swagger({
        path: "/docs",
        documentation: {
          info: {
            title: "Miaw API",
            version: "1.0.0",
            description: 'Miaw API Fast With Elysia.js'
          }
        }
      })
    );