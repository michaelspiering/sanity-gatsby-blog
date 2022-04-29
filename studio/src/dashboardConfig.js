export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "626c122eac43f63cc9f5245e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-humff55y",
                  apiId: "a06a9b65-e5f6-44c0-849a-78a83919136e",
                },
                {
                  buildHookId: "626c122e780570292541c2b9",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wmkmwhu2",
                  apiId: "b4c86041-0e42-4a9e-b801-780e33fd204c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/michaelspiering/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wmkmwhu2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
