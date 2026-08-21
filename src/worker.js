export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const assetRequest = url.pathname === "/"
      ? new Request(new URL("/index.html", url), request)
      : request;

    if (env.ASSETS?.fetch) {
      const response = await env.ASSETS.fetch(assetRequest);
      if (response.status !== 404) return response;
    }

    return new Response("Not found", { status: 404 });
  },
};
