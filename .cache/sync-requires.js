// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/DeBeer/projects/football-database/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/DeBeer/projects/football-database/src/templates/blog-post.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/DeBeer/projects/football-database/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/DeBeer/projects/football-database/.cache/json/layout-index.json"),
  "hello-world.json": require("/Users/DeBeer/projects/football-database/.cache/json/hello-world.json"),
  "hi-folks.json": require("/Users/DeBeer/projects/football-database/.cache/json/hi-folks.json"),
  "my-second-post.json": require("/Users/DeBeer/projects/football-database/.cache/json/my-second-post.json"),
  "index.json": require("/Users/DeBeer/projects/football-database/.cache/json/index.json")
}