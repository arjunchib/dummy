Bun.serve({
  fetch() {
    return new Response("Hello, world!");
  },
});
