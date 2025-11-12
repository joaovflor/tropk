import { Hono } from "hono";
import { cors } from "hono/cors";

interface AppEnv extends Env {
  INSTAGRAM_ACCESS_TOKEN: string;
}

const app = new Hono<{ Bindings: AppEnv }>();

app.use("/*", cors());

// Instagram API endpoint
app.get("/api/instagram/posts", async (c) => {
  try {
    const accessToken = c.env.INSTAGRAM_ACCESS_TOKEN as string | undefined;
    
    if (!accessToken) {
      return c.json({ error: "Instagram access token not configured" }, 500);
    }

    // Instagram Graph API endpoint for user media
    // Using the Business Account endpoint to get media
    const instagramApiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`;
    
    const response = await fetch(instagramApiUrl);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Instagram API error:", errorData);
      return c.json({ error: "Failed to fetch Instagram posts" }, 500);
    }

    const data = await response.json() as { data: Array<{
      id: string;
      caption?: string;
      media_type: string;
      media_url: string;
      thumbnail_url?: string;
      permalink: string;
      timestamp: string;
    }> };
    
    // Transform the data to a simpler format
    const posts = data.data.map((post: any) => ({
      id: post.id,
      caption: post.caption || "",
      mediaUrl: post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url,
      permalink: post.permalink,
      timestamp: post.timestamp,
      mediaType: post.media_type
    }));

    return c.json({ posts });
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

export default app;
