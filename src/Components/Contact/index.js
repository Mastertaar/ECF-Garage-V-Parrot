import React from 'react'
import { styled } from 'styled-components'

function Contact() {
  return (

    <>
    <h2>Nous contacter : </h2>

    <Form>
      <fieldset>
        <legend>
          Merci de renseigner le formulaire :
        </legend>
        <div>
          <label for='nom' >Nom :</label>
          <input type='text' id='nom' name='nom' required placeholder='Veuillez renseigner votre nom'/>
        </div>
        <div>
          <label for='prenom' >Prénom :</label>
          <input type='text' id='prenom' name='prenom' required placeholder='Veuillez renseigner votre Prénom'/>
        </div>
        <div>
          <label for='email' >Email :</label>
          <input type='email' id='email' name='email'  required placeholder='Veuillez renseigner votre adresse mail'/>
        </div>
        <div>
          <label for='telephone' >Téléphone :</label>
          <input type='tel' id='telephone' name='telephone'    required placeholder='Veuillez renseigner votre téléphone'/>
        </div>
        <div className='btn'>
          <button className='send'>Envoyer</button>
          <button className='reinit'>Réinitialiser</button>
        </div>
      </fieldset>
    </Form>
    </>
  )
}

const Form = styled.form`
padding: 30px;
border: 1px solid #A01830;
background-color: #e6f5fe;
border-radius: 30px;
width: 50%;
margin: auto;


& fieldset{
    border-radius: 30px;
    border: none;
    margin: auto;     
  }

  & legend, label{
    color : #A01830;
  
  }
  & legend{
    border-bottom: 1px solid #A01830;
  }

& input{
  padding: 12px;
  margin:5px;
  width: 100%;
}

& input:hover{
 border-radius: 10px;
 border: 2px solid #8BD3FC;
 box-shadow: 5px 3px 4px 0px;
}

& input:focus{
  border-radius: 10px;
  background-color: lightgray;
   box-shadow: 3px 4px 5px 6px;
 }
 

& .send, .reinit{
  color : #A01830;
  padding: 3px 20px;
  font-size: 1.2em;
  background-color: #cdecfe;
  border-radius: 30px;
}

& .btn{
display: flex;
justify-content: space-between;
align-items: center;
margin: 5px;
}

& button:hover{
color: #FFF;
background-color: #8BD3FC;
cursor: pointer;
}

@media (max-width: 600px)  {
  margin: 0px;
  }

  & input{
    padding: 5px;
    margin:0px;
    display: block;
  }
  & .btn{
    display: block;
    margin: 5px;
    }

    & fieldset{
      border-radius: 30px;
      border: none;
      margin: 0px;     
    }
    
    
`;

export default Contact