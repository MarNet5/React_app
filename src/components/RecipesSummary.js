import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectRecipes from '../selectors/recipes';
import selectRecipesTotal from '../selectors/recipes-total';

export const RecipesSummary = ({ recipeCount, recipesTotal }) => {
    const recipeWord = recipeCount === 1 ? 'recipe' : 'recipes' ;
    //const formattedRecipesTotal = numeral(recipesTotal / 100).format('$0,0.00');
    
    return (
      <div className="page-header">
      <div className="content-container">
        {/* <h1 className="page-header__title">Viewing <span>{recipeCount}</span> {recipeWord} totalling <span>{formattedRecipesTotal}</span></h1> */}
      
        <h1 className="page-header__title">Viewing <span>{recipeCount}</span> {recipeWord}</h1>
        <div className="page-header__actions">
        <Link className="button" to="/create">Add Recipe</Link>
      </div>
      </div>
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    const visibleRecipes = selectRecipes(state.recipes, state.filters);

    return {
      recipeCount: visibleRecipes.length,
      recipesTotal: selectRecipesTotal(visibleRecipes)
    };
  };
  export default connect(mapStateToProps)(RecipesSummary);