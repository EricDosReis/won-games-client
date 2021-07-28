import { gql } from '@apollo/client';

const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(limit: $limit) {
      name
      slug
      price
      cover {
        url
      }
      developers {
        name
      }
    }
  }
`;

const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
      name
      description
      short_description
      price
      rating
      release_date
      cover {
        src: url
      }
      gallery {
        src: url
        label: alternativeText
      }
      developers {
        name
      }
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
`;

export { QUERY_GAMES, QUERY_GAME_BY_SLUG };
