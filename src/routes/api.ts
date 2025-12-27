import { Elysia, t } from "elysia";
import handlers from "../handlers";

const routes = new Elysia({ prefix: "/api" });

routes.post(
  "/upload",
  async ({ body, set }: { body: { file: File }; set: { status: number } }) => {
    try {
      const result = await handlers.upload(body.file);
      return {
        status: 200,
        result: {
          url: result.url
        }
      };
    } catch (err: any) {
      set.status = 400;
      return {
        status: 400,
        result: {
          url: ""
        }
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
      status: t.Number(),
      result: t.Object({
        url: t.String()
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
  "/status",
  () => ({
    status: 200,
    message: "miawww!"
  }),
  {
    response: t.Object({
      status: t.Number(),
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
