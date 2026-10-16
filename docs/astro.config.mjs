// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import starlightThemeVintage from 'starlight-theme-vintage'

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Intro to Coding Series',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/NouveauReece/Intro-to-Coding-Series' }],
        plugins: [starlightThemeVintage()],
        sidebar: [
            {
                label: 'Coding 101',
                items: [{ autogenerate: { directory: 'coding-101' } }],
            },
            {
                label: 'Snippets',
                items: [{ autogenerate: { directory: 'snippets' } }],
            },
        ],
		}), expressiveCode(), mdx()],
});