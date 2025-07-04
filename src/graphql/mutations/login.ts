import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $senha: String!) {
    login(email: $email, senha: $senha) {
      token
      usuario {
        id
        nome
        email
      }
    }
  }
`;
