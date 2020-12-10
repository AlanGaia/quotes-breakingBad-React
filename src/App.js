import React, {useState, } from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  cursor: pointer; 
  transition: background-size .8s ease;

  :hover{
  background: -webkit-linear-gradient(top left, #09b350 0%, #09b350 40%, #1ca393 100%);
  background-size: 400px;
  }
`;


function App() {

  //Quote State
  const [quote, setQuote] = useState({
    quote: '',
    author: '',
  })

  const requestAPI = async () => {
    const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quoteArray =  await response.json();
    setQuote(quoteArray[0])
  }



  return (
    <Container>
      <Quote
        quoteObject={quote}
      />
      <Button onClick={requestAPI}>Get Quote</Button>
    </Container>
  );
}

export default App;
