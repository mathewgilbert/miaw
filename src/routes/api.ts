import { Elysia, t } from "elysia";
import handlers from "../handlers";

const routes = new Elysia({ prefix: '/api' })
routes.post(
  "/upload",
  async ({ body }) => {
    return handlers.upload(body.file);
  },
  {
    body: t.Object({
      file: t.File({
        description: "File to be uploaded"
      })
    }),
    detail: {
      summary: "Upload File",
      description: "Endpoint for uploading a file to an external server",
      tags: ["Tools"]
    }
  }
);

routes.get(
    '/status',
    () => ({
        status: 200,
        message: 'pong'
    }),
    {
        response: t.Object({ message: t.String() }),
        detail: { tags: ['Others'], summary: 'Ping', description: 'Ping To Server' }
    }
)

export default routes;
