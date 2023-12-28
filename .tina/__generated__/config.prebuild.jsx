// .tina/config.ts
import { defineStaticConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineStaticConfig({
  branch,
  clientId: null,
  // Get this from tina.io
  token: null,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: () => "/"
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
                type: "string"
              },
              {
                label: "Link",
                name: "link",
                type: "string",
                required: true
              },
              {
                label: "Body",
                name: "body",
                type: "string"
              },
              {
                label: "Image",
                name: "image",
                type: "image"
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
