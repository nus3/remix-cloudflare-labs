import { logDevReady } from "@remix-run/cloudflare";
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

// @ts-ignore
if (process.env.NODE_ENV === "development") {
  logDevReady(build);
}

export const onRequest: PagesFunction = createPagesFunctionHandler({
  build,
  getLoadContext: (context) => ({ env: context.env }),
  mode: build.mode,
});
