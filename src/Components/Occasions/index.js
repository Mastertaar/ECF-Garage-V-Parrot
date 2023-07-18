import React from 'react'
import { styled } from 'styled-components/macro';
import Car1 from '../../assets/img/Car1.jpg';



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
          <img src= {Car1} alt='' />
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
        <div className='car' >Car3</div>
        <div className='car' >Car4</div>  
        <div className='car' >Car5</div>  
        <div className='car' >Car6</div>        
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