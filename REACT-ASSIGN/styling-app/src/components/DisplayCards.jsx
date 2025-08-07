import React from 'react'
import Cards from './Cards.jsx'
import './DisplayCards.css'
import { Container } from 'react-bootstrap'

export default function DisplayCards() {
  return (
    <Container className='d-flex flex-row justify-content-center gap-3 py-5'>
         <Cards num={1}/>
    <Cards num={2}/>
    <Cards num={3}/>
    </Container>
    
    

    
  )
}
