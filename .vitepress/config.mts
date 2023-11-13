import { defineConfig, type DefaultTheme } from "vitepress"

// https://vitepress-plugins.sapphi.red/tabs/
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Yazi",
	description: "Blazing fast terminal file manager written in Rust, based on async I/O.",

	lastUpdated: true,
	cleanUrls: true,

	sitemap: {
		hostname: "https://yazi-rs.github.io/",
	},

	head: [
		["link", { rel: "icon", type: "image/svg+xml", href: "/logo-mini.svg" }],
		["link", { rel: "icon", type: "image/png", href: "/logo-mini.png" }],
		["meta", { name: "og:type", content: "website" }],
		["meta", { name: "og:locale", content: "en" }],
		["meta", { name: "og:site_name", content: "Yazi" }],
	],

	themeConfig: {
		logo: { src: "/logo.png", width: 24, height: 24 },

		editLink: {
			pattern: "https://github.com/yazi-rs/yazi-rs.github.io/edit/main/:path",
		},

		nav: nav(),

		sidebar: {
			"/guide/": { base: "/guide/", items: sidebarGuide() },
			"/reference/": { base: "/reference/", items: sidebarReference() },
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/sxyazi/yazi" },
			{ icon: "discord", link: "https://discord.gg/qfADduSdJu" },
			{
				icon: {
					svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
				},
				link: "https://t.me/yazi_rs",
			},
		],

		footer: {
			copyright: `Copyright © ${new Date().getFullYear()} Yazi. Built with ❤️️.`,
		},
	},

	markdown: {
		config(md) {
			md.use(tabsMarkdownPlugin)
		},
	},

	srcDir: "src",
	vite: {
		publicDir: "../public/",
	},
})

function nav(): DefaultTheme.NavItem[] {
	return [
		{
			text: "Guide",
			link: "/guide/getting-started",
			activeMatch: "/guide/",
		},
		{
			text: "Reference",
			link: "/reference/configuration",
			activeMatch: "/reference/",
		},
	]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Introduction",
			collapsed: false,
			items: [
				{ text: "Getting Started", link: "getting-started" },
				{ text: "Installation", link: "installation" },
			],
		},
		{ text: "Tips", link: "tips" },
		{ text: "FAQ", link: "faq" },
	]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Reference",
			base: "/reference/configuration/",
			items: [
				{ text: "General Settings", link: "yazi" },
				{ text: "Themes", link: "theme" },
				{ text: "Keyboard Shortcuts", link: "keymap" },
			],
		},
	]
}
