"use client";

import { gql, useQuery } from "@apollo/client";

const USER_QUERY = gql`
  query {
    me {
      email
    }
  }
`;

export default function Test() {
  const { data, error, loading } = useQuery(USER_QUERY);

  if (loading) {
    return <h1>Loading..............</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  if (data) {
    console.log(data);
  }

  return (
    <>
      <h1>User Email: {data?.me?.email}</h1>
    </>
  );
}
