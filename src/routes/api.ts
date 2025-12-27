import { Elysia, t } from "elysia";

const routes = new Elysia({ prefix: '/api' })

routes.get(
    '/ping',
    () => ({ message: 'pong' }),
    {
        response: t.Object({ message: t.String() }),
        detail: { tags: ['Others'], summary: 'Ping' }
    }
)

export default routes;
