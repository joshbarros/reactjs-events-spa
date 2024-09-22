import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents {
    onlineEvents {
      nodes {
        id
        title
        onlineEventDate
        onlineEventDescription
      }
    }
  }
`;
