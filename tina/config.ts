import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          router: () => "/",
        },
        fields: [
          {
            type: "object",
            label: "Cards",
            name: "cards",
            list: true,
            required: true,
            fields: [
              {
                label: "Title",
                name: "title",
                type: "string",
              },
              {
                label: "Link",
                name: "link",
                type: "string",
                required: true,
              },
              {
                label: "Body",
                name: "body",
                type: "string",
              },
              {
                label: "Image",
                name: "image",
                type: "image",
              },
            ],
          },
        ],
      },
    ],
  },
});
