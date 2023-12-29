import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'd77a16071597e7125dd5eb671d4571195eb8b5b6', queries,  });
export default client;
  