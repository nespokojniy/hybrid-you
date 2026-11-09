
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    };

    const json = (data, status = 200) =>
      new Response(JSON.stringify(data), {
        status,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          ...corsHeaders
        }
      });

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (url.pathname === "/api/health" && request.method === "GET") {
      return json({
        status: "online",
        name: "HYBRID YOU",
        version: "0.1.0",
        brain: "initializing"
      });
    }

    if (url.pathname === "/api/chat" && request.method === "POST") {
      return json({
        error: "AI provider is not connected yet",
        status: "initializing"
      }, 503);
    }

    return json({
      name: "HYBRID YOU",
      message: "Digital twin is awakening.",
      version: "0.1.0"
    });
  }
};
