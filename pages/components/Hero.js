import React from 'react'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Style from '@styles/Hero.module.css'

const Hero = () => (
  <div className={Style.hero}>
    <Jumbotron className={Style.bgreset}>
      <h1 className={Style.herotitle}>Kimchi or DimSum</h1>
      <p>Your dynamic KPOP analytics and news YouTube channel! </p>
      <Button variant="danger">Subscribe now!</Button>
    </Jumbotron>
  </div>
);

export default Hero;
