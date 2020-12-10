import React, { Fragment } from 'react'
import styled from '@emotion/styled'

const QuoteContainer = styled.div`
  padding: 3rem;
  border-radius: .5rem;
  background-color: #ffffff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 15rem;
  }

  h1{
    font-family: Arial, Helvetica, sans-serif;
    text-align:center;
    position:relative;
    font-size: 1.5rem;
    padding-left: .5rem;

  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2rem;
    font-weight:bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

function Quote({ quoteObject }) {

  const {quote, author} = quoteObject;

  if (quote.length === 0) {
    return null;
  }

  return (
    <QuoteContainer>
      <h1>{quote}</h1>
      <p>- {author}</p>
    </QuoteContainer>
  )
}

export default Quote
