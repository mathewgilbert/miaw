import { Elysia, t } from "elysia";

const app = new Elysia() 
    .get('/', () => 'Hello Vercel Function')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
      })

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
