import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";
import rehypeKatex from "rehype-katex";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
	site: "https://njuptfreeexams.github.io",
	// base: '/NJUPT-General-Free-Exams',
	vite: {
		assetsInclude: ["**/*.ppt", "**/*.pptx", "**/*.doc", "**/*.docx"],
	},
	integrations: [
		starlight({
			title: "NJUPTFreeExams",
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
				{ label: "组织及项目简介", link: "home" },
				{
					label: "关于 NJUPT-General-Free-Exams 的特别说明",
					link: "home/about-general",
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
					label: "其他",
					autogenerate: {
						directory: "others",
					},
				},
				{
					label: "了解 Astro",
					link: "https://astro.build/",
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
