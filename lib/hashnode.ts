export interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
  readTimeInMinutes: number;
  views: number;
  reactionCount: number;
  url: string;
}

export interface HashnodeResponse {
  data: {
    publication: {
      posts: {
        edges: {
          node: HashnodePost;
        }[];
      };
    };
  };
}

const HASHNODE_USERNAME = 'shahidafridii';
const HASHNODE_HOST = 'afridis-blog.hashnode.dev';
const HASHNODE_API_URL = 'https://gql.hashnode.com';

export async function getHashnodePosts(): Promise<HashnodePost[]> {
  const query = `
    query Publication {
      publication(host: "${HASHNODE_HOST}") {
        posts(first: 6) {
          edges {
            node {
              id
              title
              brief
              slug
              coverImage {
                url
              }
              publishedAt
              readTimeInMinutes
              views
              reactionCount
              url
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
      next: { revalidate: 3600 }
    });

    const result: HashnodeResponse = await response.json();
    
    if (result.data?.publication?.posts?.edges) {
      return result.data.publication.posts.edges.map(edge => edge.node);
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching Hashnode posts:', error);
    return [];
  }
}