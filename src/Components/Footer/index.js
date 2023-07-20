import React from 'react';
import { styled } from 'styled-components/macro';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FacebookPicture from '../../assets/img/facebook.png';
import SnapPicture from '../../assets/img/snapchat.png';
import TwitterPicture from '../../assets/img/twitter.png'





function Footer() {
  return (
    <Wrapper>
      <div className='socialNetwork'>
      <Link to="/user"> <img src= {FacebookPicture} alt='' className='facebook'/> </Link>
      <Link to="/user"> <img src= {SnapPicture} alt='' className='snap'/> </Link>
      <Link to="/user"> <img src= {TwitterPicture} alt='' className='twitter'/> </Link>
      </div>

      <div className='openHour'>
        <span>Horaire d'ouvertures</span><br/>
        <span>Lundi à Jeudi</span> : 8h00 - 12h00 et 13h30-18h00 <br/>
        <span>Vendredi</span> : 8h00 - 12h00 et 13h30-16h00 <br/>
        <span>Samedi </span>: 8h00 - 12h00
        
      </div>
    
      <div className='adress'>   
        Garage V.PARROT <br/>
        77 impasse des Invalides - 31500 Toulouse
      </div>
 
    </Wrapper>
  )
}

const Wrapper = styled.footer `
display: grid;
grid-template-columns: 1fr 2fr 1fr;
align-items: center;
justify-items: center;
border-radius: 30px;
background-color:	#e6f5fe;
padding: 5px;
border:1px solid red;

& .socialNetwork{
  display: flex;
  & img{
    width : 60%;
  };

}

  & span{
    font-weight: bold;
  }
}

@media (max-width: 600px) {
  display: inline-block;
  font-size:0.75em;

  & .socialNetwork img{
    width: 8%;
  }


`;




export default Footer