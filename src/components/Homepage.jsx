import React from 'react';
import { Row, Col, Input, Card } from 'antd';
import image from '../images/mojito.jpg';
import {Recipes} from '../components';

/**
 * 
 * @returns returns the home page with a featured favorite drink and some recipe options
 */
const Homepage = () => {
  return (
    <>
        <div className='home-favorite-drink'>
          <h1 className='home-header-one'>Your Favorite Drink is Waiting!</h1>
        </div>
        <div className='home-favorite-drink-tab'>
          <Row gutter={[32,32]}>
          <Col span={12}>
          <p className='home-favoite-drink-description'>The classic rum smash and everyone's favourite 
          minty cocktail, the Mojito is made from fresh mint, muddled limes, 
          sugar syrup and white rum, which is combined and mixed using crushed ice to 
          form a long, refreshing, summery cocktail.</p>
          </Col>
          <Col span={12}>
            <img  src='https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg'
              width='400'
              height='400'
            />
          </Col>
          </Row>
        </div>
        <div className='home-favorite-recipe'>
          <h2 className='home-heading-two'>Most Popular Recipes that you'll love!</h2>
        </div>
        <Recipes simplified/>
    </>
  )
}

export default Homepage;