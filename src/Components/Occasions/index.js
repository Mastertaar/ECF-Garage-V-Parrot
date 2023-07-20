import React from 'react'
import { styled } from 'styled-components/macro';
import Car1 from '../../assets/img/Car1.jpg';
import Car2 from '../../assets/img/Car2.jpg';
import Car3 from '../../assets/img/Car3.jpg';
import Car4 from '../../assets/img/Car4.jpg';
import Car5 from '../../assets/img/Car5.jpg';
import Car6 from '../../assets/img/Car6.jpg';



function Occasions() {
  return (
      <Grid>  
        <div className='car car1' >
          <div className='price'>
          25 000 €
          </div>
          <div>
          <img src= {Car1} alt='' />
          </div>
          <div className='description'>
            <div>
            FORD Fiesta <br/>
            Année : 1958<br/>
            Disesel<br/>
            120 000 km
            </div>
            <div>
          <button>En savoir plus</button>
            </div>
            </div>
        </div> 
        <div className='car car2' >
          <div className='price'>
          35 000 €
          </div>
          <div>
          <img src= {Car2} alt='' />
          </div>
          <div className='description'>
            <div>
            Renault  <br/>
            Année : 1958<br/>
            Disesel<br/>
            120 000 km
            </div>
            <div>
          <button>En savoir plus</button>
            </div>
            </div>
        </div>
        <div className='car car3' >
        <div className='price'>
          25 000 €
          </div>
          <div>
          <img src= {Car3} alt='' />
          </div>
          <div className='description'>
            <div>
            Renault  <br/>
            Année : 1954<br/>
            Disesel<br/>
            20 000 km
            </div>
            <div>
          <button>En savoir plus</button>
            </div>
            </div>
        </div>
        <div className='car car4' >
        <div className='price'>
          5 000 €
          </div>
          <div>
          <img src= {Car4} alt='' />
          </div>
          <div className='description'>
            <div>
            Citroen  <br/>
            Année : 1974<br/>
            Disesel<br/>
            1 000 km
            </div>
            <div>
          <button>En savoir plus</button>
            </div>
            </div>  
        </div>  
        <div className='car car5' >
        <div className='price'>
          45 000 €
          </div>
          <div>
          <img src= {Car5} alt='' />
          </div>
          <div className='description'>
            <div>
            Mazda  <br/>
            Année : 2015<br/>
            Disesel<br/>
            25 000 km
            </div>
            <div>
          <button>En savoir plus</button>
            </div>
            </div> 
        </div>  
        <div className='car car6' >
        <div className='price'>
          50 000 €
          </div>
          <div>
          <img src= {Car6} alt='' />
          </div>
          <div className='description'>
            <div>
            Ford  <br/>
            Année : 2010<br/>
            Disesel<br/>
            20 000 km
            </div>
            <div>
          <button>En savoir plus</button>
            </div>
            </div> 
        </div>        
      </Grid>

  )
}

export default Occasions


const Grid = styled.div`
display:grid;
grid-gap: 10px;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr;
border-radius: 30px;
text-align: center;

& .car{
  box-shadow: 5px 5px 5px blue;
  border-radius: 30px;
  background-color:	#e6f5fe;

  
}

& .car1 img{
  width: 100%;
  border-radius: 30px;
  
}

& .car2 img{
  width: 100%;
  border-radius: 30px;
  
}
& .price {
  position: absolute;
  margin: 15px 0 0 15px;
  z-index: 0;
  color : #A01830;
  background-color:#e6f5fe;
  border-radius: 30px;
  padding: 5px;
  
}

& .description{
display:flex;
justify-content: space-around;
align-items: center;
}

`;