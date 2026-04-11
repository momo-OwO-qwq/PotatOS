// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightImageZoomPlugin from 'starlight-image-zoom';


// https://astro.build/config
export default defineConfig({
	outDir: "./build",
	integrations: [
		starlight({
			plugins: [starlightScrollToTop(), starlightImageZoomPlugin(),],
			customCss:['./src/styles/global.css',],
			title: 'potatos',
			favicon: '/src/assets/potato.png',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            defaultLocale: 'root',
            locales: {root: { label: '简体中文', lang: 'zh-CN',},},
			sidebar: [
				{
					label: '介绍',
					items: [
						{ label: '简介', slug: 'introduction/introduction' },
						{ label:'规则', slug: 'introduction/rules' },
					],
				},
				{
					label: '公告',
					items: [
						{ label: '公告', slug: 'announcement/announcement' },
					],
				},
				{
					label: '社区',
					items: [
						{ label: '社区', slug: 'community/community' },
					],
				},
				{
					label: '帮助',
					items: [
						{ label: '帮助', slug: 'help/help' },
					],
				}
			],
		}),
	],
});
