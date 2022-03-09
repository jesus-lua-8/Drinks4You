import React from 'react'
import { Row, Col, Input, Card } from 'antd';
import { useGetCocktailQuery } from '../services/cocktailsApi.js';
import { useParams } from 'react-router-dom';

/**
 * 
 * @returns returns the detailed instructions per drink and its ingredients page.
 */
const CocktailDetails = () => {

  //Using the hook useParams allows us to grab the parameters and in order to work with the id needed for search.
  const idDrink  = useParams();

  //Importing hook from services folder to have access to the endpoints of data.
  const data = useGetCocktailQuery();
  const cocktailsData = data?.data?.drinks;

  //Using findIndex to loop through object array, then we use a fucntion
  //that allows us to find the data and the index
  const index = cocktailsData?.findIndex(function(data,index){
    return data?.idDrink === idDrink?.idDrink;
  });

  //This array will contain the list of ingredients from the specific ID by drink.
  const ingredients = [
    cocktailsData?.[index]?.strIngredient1,
    cocktailsData?.[index]?.strIngredient2,
    cocktailsData?.[index]?.strIngredient3,
    cocktailsData?.[index]?.strIngredient4,
    cocktailsData?.[index]?.strIngredient5,
    cocktailsData?.[index]?.strIngredient6,
    cocktailsData?.[index]?.strIngredient7,
    cocktailsData?.[index]?.strIngredient8,
    cocktailsData?.[index]?.strIngredient9,
    cocktailsData?.[index]?.strIngredient10,
    cocktailsData?.[index]?.strIngredient11,
    cocktailsData?.[index]?.strIngredient12,
    cocktailsData?.[index]?.strIngredient13,
    cocktailsData?.[index]?.strIngredient14,
    cocktailsData?.[index]?.strIngredient15
  ]
  const ingredientList = [];

  //Here we exclude any ingredients that could be null
  for(let i = 0; i < ingredients.length; i++ )
  {
    if( ingredients[i] !== null){
      ingredientList.push( ingredients[i] );
    }
  }

  return (
    <>
      <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card className='card-ingredientList' title="Ingredients" bordered={false}>
                  {ingredientList?.map((ingredient) => (
                    <p>{`${ingredient}`}</p>
                  ))}
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Instructions" bordered={false}>
                {`${cocktailsData?.[index]?.strInstructions}`}
                </Card>
              </Col>
            </Row>
      </div>
    </>
  )

}

export default CocktailDetails; 