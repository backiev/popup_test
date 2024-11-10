// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxt/fonts'],
    app: {
        baseURL: '/popup_test/',
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                    additionalData: '@use "~/assets/styles/_variables.scss" as *;',
                },
            },
        },
    },
    runtimeConfig: {
        public: {
            api_news: process.env.API_NEWS,
        },
    },
    css: ['~/assets/styles/index.scss'],
    fonts: {
        defaults: {
            weights: [400],
            styles: ['normal', 'italic'],
            subsets: ['cyrillic-ext', 'cyrillic', 'greek-ext', 'greek', 'vietnamese', 'latin-ext', 'latin'],
        },
        families: [
            {name: 'Unbounded', provider: 'google'},
            {name: 'Onest', provider: 'google'},
        ],
    },
})
