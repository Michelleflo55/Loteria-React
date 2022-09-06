import React from 'react'

function GameBegins() {
  return (
    <div>
       <Container>
    <Col >
      <PlayIntro />
    </Col>
     <Col lg>
      <CardDeck />
    </Col>
    <Col sm>
      <LoteriaCard />
    </Col>
    </ Container>
    </div>
  )
}

export default GameBegins
