// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/DeBeer/projects/football-database/src/templates/blog-post.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/DeBeer/projects/football-database/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/DeBeer/projects/football-database/.cache/json/layout-index.json"),
  "my-second-post.json": require("gatsby-module-loader?name=path---my-second-post!/Users/DeBeer/projects/football-database/.cache/json/my-second-post.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/Users/DeBeer/projects/football-database/.cache/json/hello-world.json"),
  "hi-folks.json": require("gatsby-module-loader?name=path---hi-folks!/Users/DeBeer/projects/football-database/.cache/json/hi-folks.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/DeBeer/projects/football-database/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/DeBeer/projects/football-database/.cache/layouts/index.js")
}