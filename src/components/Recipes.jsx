import React from 'react'
import { useGetRecipeListQuery } from '../services/recipesApi';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

const { Meta } = Card;

/**
 * 
 * @param simplified whenever simplified is passed communicates with the endpoint to only pass a lower amount of data.
 * @returns returns page of all most popular recipes
 */
const Recipes = ({simplified}) => {
    const count = simplified ? 4 : 20;

    const data = useGetRecipeListQuery(count);
    const recipeData = data?.data?.results;
    

  return (
    <>
    <Row gutter={[32,32]} className='recipe-card-container'>
            {recipeData?.map((recipe) => (
                <Col xs={24} sm={12} lg={6} className='recipe-card'>
                    <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                        <Card 
                        cover={
                            <img className="recipe-image" src={`${recipe?.thumbnail_url}`}/>
                        }
                        style={{ height: 400 }}
                        hoverable
                        >
                        <Meta
                            title={`${recipe?.name}` }
                        />
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default Recipes