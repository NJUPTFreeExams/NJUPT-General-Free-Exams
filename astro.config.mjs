import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";
import rehypeKatex from "rehype-katex";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://njuptfreeexams.netlify.app",
  vite: {
    assetsInclude: ["**/*.ppt", "**/*.pptx", "**/*.doc", "**/*.docx"],
  },
  integrations: [
    starlight({
      title: "NJUPTFreeExams",
      description: "南京邮电大学课程资源与复习资料共享平台",
      defaultLocale: "root",
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: {
        github: "https://github.com/NJUPTFreeExams/NJUPT-General-Free-Exams",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "简介",
          items: [
            {
              label: "组织与项目介绍",
              link: "intro",
            },
          ],
        },
        {
          label: "指南",
          items: [
            {
              label: "资料分类说明",
              link: "guides/categories",
            },
            {
              label: "检索与下载指南",
              link: "guides/browse-and-download",
            },
            {
              label: "上传与贡献指南",
              link: "guides/upload-and-contribute",
            },
            {
              label: "问题与建议提交指南",
              link: "guides/report-issues",
            },
            {
              label: "关于 NJUPT-General-Free-Exams 的特别说明",
              link: "guides/about-general",
            },
          ],
        },
        {
          label: "Markdown 资料（保留目录）",
          autogenerate: {
            directory: "reserved",
          },
        },
        {
          label: "计算机学院",
          autogenerate: {
            directory: "computer-science",
          },
        },
        {
          label: "理学院",
          autogenerate: {
            directory: "science",
          },
        },
        {
          label: "通信与信息工程学院",
          autogenerate: {
            directory: "communications-and-information-engineering",
          },
        },
        {
          label: "经济学院",
          autogenerate: {
            directory: "economics",
          },
        },
        {
          label: "集成电路科学与工程学院",
          autogenerate: {
            directory: "integrated-circuit-science-and-engineering",
          },
        },
        {
          label: "管理学院",
          autogenerate: {
            directory: "management",
          },
        },
        {
          label: "马克思主义学院",
          autogenerate: {
            directory: "marxism",
          },
        },
        {
          label: "外国语学院",
          autogenerate: {
            directory: "foreign-languages",
          },
        },
        {
          label: "教育与技术学院",
          autogenerate: {
            directory: "education-and-technology",
          },
        },
        {
          label: "社会与人口学院",
          autogenerate: {
            directory: "sociology-and-population-studies",
          },
        },
        {
          label: "其他",
          autogenerate: {
            directory: "others",
          },
        },
      ],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fastly.jsdelivr.net/npm/katex@0.15.1/dist/katex.css",
            defer: true,
            integrity:
              "sha384-WsHMgfkABRyG494OmuiNmkAOk8nhO1qE+Y6wns6v+EoNoTNxrWxYpl5ZYWFOLPCM",
            crossorigin: "anonymous",
          },
        },
        {
          tag: "script",
          attrs: {
            "is:inline": true,
            src: "https://cdn.staticfile.org/twikoo/1.6.30/twikoo.all.min.js",
          },
        },
      ],
      expressiveCode: {
        styleOverrides: {
          borderRadius: "0.5rem",
        },
      },
      components: {
        Footer: "./src/components/Footer.astro",
        MarkdownContent: "./src/components/MarkdownContent.astro",
      },
      editLink: {
        baseUrl:
          "https://github.com/NJUPTFreeExams/NJUPT-General-Free-Exams/edit/master",
      },
      lastUpdated: true,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkEmoji],
    rehypePlugins: [rehypeKatex, [rehypeExternalLinks, { target: "_blank" }]],
  },
});
