import React from 'react';
import  styled  from 'styled-components/macro';
import {Link} from 'react-router-dom/cjs/react-router-dom'
import LogoPicture from '../../assets/img/logo.png';
import UserPicture from '../../assets/img/user.png';
import FavoritePicture from '../../assets/img/favorite.png';
import NewsletterPicture from '../../assets/img/newsletter.png'

function Header() {
  return (
   
      <Wrapper>
        <div>
        <Link to="/"><img src= {LogoPicture} alt=''/> </Link>
        </div>

        <Nav> 
          <div className='navMenu'>
            <Link to="/">Accueil </Link>
            <Link to="/mecanique">Mécanique</Link>
            <Link to="/carrosserie">Carrosserie</Link>
            <Link to="/occasions">Occasions</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/planning">Planning</Link>
            <Link to="/preferences">Preferences</Link>

          </div>
          <div className='memberSpace'>
          <Link to="/"><img src= {UserPicture} alt=''/></Link>
          <Link to="/"><img src= {FavoritePicture} alt=''/></Link>
          <Link to="/"><img src= {NewsletterPicture} alt=''/></Link>
          </div>
        </Nav>
      </Wrapper>
  
  )
}



export default Header
const Wrapper = styled.div `
display: flex;
justify-content:space-around;
align-items:center;
border-radius: 30px;
background-color:	#e6f5fe;
padding: 0px 0px 0px 20px;;
  
& img{
  width: 100%;
  border-radius: 10px;
}

  & .logo{
    border-radius:20px;
    border: 1px solid green;
   
  } 
 
  }
  @media (max-width: 600px)  {
    display: inline-block;
    }

`;


const Nav = styled.nav`
display: grid;
grid-template-columns: 3fr 1fr;
align-items: center;
justify-items: center;

& a:hover{
  color: #FFF;
  background-color: #8BD3FC;
  border-radius:20px;
}

& a{
  text-decoration: none;
  color:#A01830;
  margin: 10px;
  padding: 10px;
}

& .memberSpace{
  display: flex;
  justify-content: space-around;


}
@media (max-width: 600px)  {
    display: inline-block;
    font-size:0.75em;

    & .memberSpace img{
      width: 8%;
    }

    & a{
      text-decoration: none;
      color:#A01830;
      margin: 3px;
      padding: 3px;
    }

    & a:hover{
      color: #FFF;
      border-radius:10px;
      
    }
  }




`;