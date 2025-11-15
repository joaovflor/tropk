import { Hono } from "hono";
import { cors } from "hono/cors";

interface AppEnv {
  INSTAGRAM_ACCESS_TOKEN: string;
}

const app = new Hono<{ Bindings: AppEnv }>();

app.use("/*", cors());

// Instagram API endpoint


export default app;
