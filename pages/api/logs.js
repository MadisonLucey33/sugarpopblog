import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateLog($ip: String!, $city: String!, $state: String!) {
      createLog(data: {ip: $ip, city: $city, state: $state}) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    ip: req.body.ip,
    city: req.body.city,
    state: req.body.state,
  
  });

  return res.status(200).send(result);
}
