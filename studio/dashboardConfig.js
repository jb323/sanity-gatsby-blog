export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd05b209c516140aab197f0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cpwbkq36',
                  apiId: 'c69053f9-57c9-4e51-8854-b2b31790e59b'
                },
                {
                  buildHookId: '5dd05b20fa0eea22ade86595',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bqfpf1i1',
                  apiId: '7df7977b-fc30-4571-8039-c4c0280088d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jb323/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bqfpf1i1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
