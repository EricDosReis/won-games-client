import Games, { GamesTemplateProps } from 'templates/Games';
import filterItemsMock from 'components/ExploreSidebar/mock';
import { initializeApollo } from 'utils/apollo';
import { formatCurrency } from 'utils/currency';
import { QUERY_GAMES } from 'graphql/queries/games';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';

export default function GamesPage(props: GamesTemplateProps) {
  return <Games {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  });

  return {
    props: {
      games: data.games.map(({ name, developers, cover, price, slug }) => ({
        title: name,
        developer: developers[0].name,
        img: `http://localhost:1337${cover!.url}`,
        price: formatCurrency(price),
        slug,
      })),
      filterItems: filterItemsMock,
    },
  };
}
