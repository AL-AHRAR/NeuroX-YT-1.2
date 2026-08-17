export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/downloads/")) {
      return env.ASSETS.fetch(request);
    }

    const response = await env.ASSETS.fetch(request);

    if (response.status === 404 && !url.pathname.includes(".")) {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url.origin), request));
    }

    return response;
  },
};