import { Elysia, t } from 'elysia'
import { swagger } from "@elysiajs/swagger";

export default new Elysia() 
    .get('/', () => 'Hello Vercel Function')
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