import React from 'react'
import {styled} from 'styled-components/macro'
import GlobalStyle from './GlobalStyle';
import Header from '../Components/Header';
import Footer from './Footer';
import Main from './Main'



function Layout() {
  return (
    <Wrapper>
      <GlobalStyle/>
      <Header/>
      
      <Main/>
      <Footer/>
    </Wrapper>
  );
}


export default Layout;

const Wrapper = styled.div `
display: grid;
grid-template-rows: 0.5fr 4fr 0.5fr;
align-content: center;
justify-content: center;


@media (max-width: 600px)  {
  display: inline-block;
  font-size:0.75em;
}


`;

