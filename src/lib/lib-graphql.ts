import { GraphQLClient } from 'graphql-request'

// Your WordPress GraphQL endpoint
const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://francisco-guardado-universewp.ddev.site:33300/graphql'

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
})

// GraphQL Queries
export const GET_ALL_POSTS = `
  query GetAllPosts {
    posts(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        title
        slug
        excerpt
        date
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`

export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      slug
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`

export const GET_MENU_ITEMS = `
  query GetMenuItems {
    menuItems(where: {location: PRIMARY}) {
      nodes {
        id
        label
        url
        path
        target
        parentId
      }
    }
  }
`
