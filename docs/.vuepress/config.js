module.exports = {
    lang: 'en-US',
    title: '9A',
    description: '9A Workshop',

    themeConfig: {
        // logo: '/assets/images/logo.svg',
        // head: [
        //     ['link', { rel: 'icon', href: '/_assets/images/logo.svg' }],
        // ],
        // navbar: [{
        //         text: 'Teaching',
        //         children: [{ text: "web211", link: '/teaching/web211/' }],
        //     },
        //     {
        //         text: 'ORCID',
        //         link: 'https://orcid.org/0000-0003-1706-525X',
        //     },
        // ],
        repo: "https://github.com/iguyong/jiuei.git",
        editLinks: true,
        search: true,
        docsDir: 'docs',
        sidebar: false,
        // sidebar: {
        //     '/javascript/': ['index.md', 'introduction.md', 'collections.md', 'scope_and_closure.md', 'promise.md', 'object_prototype.md',
        //         'reading-notes.md',
        //         'misc.md',
        //     ],
        // },
    },

    extendsMarkdown: md => {
        md.set({ breaks: false })
    },
}