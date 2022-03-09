import React from 'react';
import { useGetCocktailQuery } from '../services/cocktailsApi.js';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

const { Meta } = Card;

/**
 * 
 * @returns returns the page for Cocktails
 */
const Cocktails = () => {

    //Using created hook to fetch data from endpoint
    const data = useGetCocktailQuery();
    const cocktailsData = data?.data?.drinks;

    return (
        <>
        <Row gutter={[32,32]} className='cocktail-card-container'>
            {cocktailsData?.map((drinks) => (
                <Col xs={24} sm={12} lg={6} className='cocktail-card' key={drinks.idDrink}>
                    <Link key={drinks.idDrink} to={`/cocktail/${drinks.idDrink}`}>
                        <Card 
                            cover={
                                <img className="cocktail-image" src={`${drinks.strDrinkThumb}`}/>
                            }
                            hoverable
                        >
                        <Meta
                            title={`${drinks.strDrink}` }
                        />
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Cocktails;