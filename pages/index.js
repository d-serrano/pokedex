import Head from 'next/head'
// layout
import Header from '../components/layout/header';
import Content from '../components/layout/content';
import Pokemon from '../components/layout/pokemon';


//styles
import styled from 'styled-components';

const StyledContent = styled.div`
  padding: 2rem 4rem 0rem 4rem;
`;

export default function Home() {
  
  return (
      <>
        <Header/>
      </>
  )
}
