import React, { Fragment } from 'react'

function Quote({ quoteObject }) {

  const {quote, author} = quoteObject;

  return (
    <Fragment>
      <h1>{quote}</h1>
      <h3>{author}</h3>
    </Fragment>
  )
}

export default Quote
