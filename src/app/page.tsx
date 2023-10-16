import { gql } from "@apollo/client";
import { getClient } from '../../lib/graphql-client';
import SvgWorldComponent from '@/components/Worldmap/Worldmap'
const query = gql`query Now {
  countries {
    code
    name
    native
    phone
    currency
    emoji
    emojiU
  }
}`;


export default async function Home() {
  const { data } = await getClient().query({ query });
  console.log(data)
  return (<>
      <h1>Hello World {data.countries[0].name}</h1>
      <h2>mapa</h2>
      <SvgWorldComponent/>
    </>)
}
