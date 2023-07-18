import React from 'react'
import { styled } from 'styled-components/macro'
import { Switch, Route} from 'react-router-dom/cjs/react-router-dom';
import Home from '../Home';
import Mecanique from '../Mecanique';
import Occasions from '../Occasions';
import Carrosserie from '../Carrosserie';
import Contact from '../Contact'
function Main() {
  return (
    <MainHeight>
      <div className='aside'>
        <h2>
        Notre service Voitures d'occasions :
        </h2>

        <Nav>
          <fieldset>
            <legend>
            Faites votre choix :
            </legend>
            <div className='kilometrage'>
              <div >
                  <label for="kilometrage">Kilométrage</label>
              </div>
                  <input type="range" id="kilometrage" name="kilometrage" min="0" max="350000"/>
              <div>
              </div>
              
                <div className='kilometre'>
                  <input type="number" id="minNum" name="minNum" min="0" max="350000" size="20" />
                  <input type="number" id="maxNum" name="maxNum" min="0" max="350000" size="20" />
                  <button className='reinit' >Réinitialiser</button>
              </div>
            </div>
            <div className='price'>
              <div>
                  <label for="price">Prix</label>
              </div>
              <div>
                  <input type="range" id="price" name="price" min="0" max="350000"/>
              </div>              
                <div className='prices'>
                  <input type="number" id="minNum" name="minNum" min="0" max="350000" size="20" />
                  <input type="number" id="maxNum" name="maxNum" min="0" max="350000" size="20" />
                  <button className='reinit' >Réinitialiser</button>
              </div>
              
            </div>
            <div className='year'>
              <div>
                  <label for="year">Année</label>
              </div>
              <div>
                  <input type="range" id="year" name="year" min="0" max="350000"/>
              </div>              
                <div className='years'>
                  <input type="number" id="minNum" name="minNum" min="0" max="350000" size="20" />
                  <input type="number" id="maxNum" name="maxNum" min="0" max="350000" size="20" />
                  <button className='reinit' >Réinitialiser</button>
              </div>           
            </div>
            <div className='fisc'>
              <div>
                  <label for="fiscpower">Puissance Fiscale</label>
              </div>
              <div>
                  <input type="range" id="fiscpower" name="fiscpower" min="0" max="350000"/>
              </div>              
                <div className='power'>
                  <input type="text" id="minNum" name="minNum" min="0" max="350000" size="20" />
                  <input type="text" id="maxNum" name="maxNum" min="0" max="350000" size="20" />
                  <button className='reinit' >Réinitialiser</button>
              </div>
              
            </div>
        </fieldset>
        </Nav>
      </div>
        
      <div className='mainPage'>
        <Switch>
          
          <Route component={Mecanique} path="/mecanique" />
          <Route component={Occasions} path="/occasions" />
          <Route component={Carrosserie} path="/carrosserie" />
          <Route component={Contact} path="/contact" />
          <Route component={Home} path="/" />
       
          </Switch>
      
      </div>
 

    </MainHeight>
  )
}

export default Main

const MainHeight = styled.div`
display:grid;
grid-gap: 5px;
grid-template-columns:1fr 3fr;

& .aside{
    color: #A01830;
    background-color: #b4e2fd;
    border-radius:30px;
    margin: 5px 0px;
    padding: 20px;

    & input {
      margin: 5px;
    }
   
}

& .mainPage{
    background-color:	#cdecfe;
    border-radius:30px;
    margin: 5px 0px;
    padding: 20px;
    color: #A01830;

}

@media (max-width: 600px) {
  display: block;

  & .mainPage, .aside{
    margin: 0px;
    padding: 5px;
  }

  & .aside, .mainPage{
    & h2 {
      font-size: 0.8em;
    }
  }


}
`;

const Nav= styled.form`

padding: 30px;
border: 1px solid #A01830;
background-color: #e6f5fe;
border-radius: 30px;



& fieldset{
  border-radius: 30px;
  border: none;
  width: 100%;
  margin: auto;
  padding: 10px;

  & .kilometre, .prices, .years, .power{
    display: flex;
     justify-content: center;
    align-items: center;
  }

  & .kilometrage, .year{
    margin: 15px 0px;
  
  }
 
}

  & .reinit{
    color : #A01830;
  padding: 3px 20px;
  background-color: #cdecfe;
  border-radius: 30px;
  }

  & .reinit:hover{
    color: #FFF;
    background-color: #8BD3FC;
    cursor: pointer;
    }

    & input{
      width:30%;
    }

    @media (max-width: 600px)  {
      & fieldset{
        border: none;
        width: 100%;
        margin: 0px;
        padding: 5px;
      
        & .kilometre, .prices, .years, .power{
          display: block;
        }
      }

    
    }

`;