import React from 'react'
import { Layout, Typography, Space, Menu } from 'antd';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom'
import { Navbar, Homepage, Cocktails, CocktailDetails, Recipes, RecipesDetails } from './components';
import './App.css' 
//import './index.css'

/**
 * 
 * @returns This contains the layout of the application with a navbar, components, and footer.
 */
const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="/cocktails" element={<Cocktails />} />
                        <Route exact path='/cocktail/:idDrink' element={<CocktailDetails />} />
                        <Route exact path="/recipes" element={<Recipes />} />
                        <Route exact path='/recipe/:id' element={<RecipesDetails />} />
                    </Routes>
                </div>
            </Layout>
            <div className='footer' >
                <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                    Drinks4U <br/>
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/cocktails">Cocktails</Link>
                    <Link to="/Recipes">Recipes</Link>
                </Space>
            </div>
        </div>
    </div>
  )
}

export default App