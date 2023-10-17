import { gql } from "@apollo/client";
import { getClient } from '../../lib/graphql-client';
import SvgWorldComponent from '@/components/Worldmap/Worldmap';
import Search from '@/components/Search/Search';

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
      <Search countries={data.countries}></Search>
      <SvgWorldComponent/>
    </>)
}
