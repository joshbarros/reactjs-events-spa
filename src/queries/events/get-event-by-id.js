import { gql } from '@apollo/client';

export const GET_EVENT_BY_ID = gql`
  query GetEventById($id: ID!) {
    onlineEvent(id: $id) {
      id
      title
      onlineEventDate
      onlineEventDescription
    }
  }
`;
