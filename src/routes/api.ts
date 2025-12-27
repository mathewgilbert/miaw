import { Elysia, t } from "elysia";
import handlers from "../handlers";

const routes = new Elysia({ prefix: "/api" });

routes.post(
  "/upload",
  async ({ body, set }) => {
    try {
      const result = await handlers.upload(body.file);
      return {
        status: 200,
        result
      };
    } catch (err: any) {
      set.status = 400;
      return {
        status: 400,
        message: err.message
      };
    }
  },
  {
    body: t.Object({
      file: t.File({
        description: "File to be uploaded"
      })
    }),
    response: t.Object({
        status: t.Boolean(),
        result: t.String()
    }),
    detail: {
      summary: "Upload File",
      description: "Endpoint for uploading a file to an external server",
      tags: ["Tools"]
    }
  }
);

routes.get(
  "/status",
  () => ({
    status: true,
    message: "miawww!"
  }),
  {
    response: t.Object({
      status:  t.Boolean(),
      message: t.String()
    }),
    detail: {
      summary: "Ping",
      description: "Ping to Server",
      tags: ["Others"]
    }
  }
);

export default routes;
