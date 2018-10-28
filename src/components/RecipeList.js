import React from 'react';
import { connect } from 'react-redux';
import RecipeListItem from './RecipeListItem';
import selectRecipes from '../selectors/recipes';

export const RecipeList = (props) => (
    <div class="content-container">
    <div className="list-header">
    <div className="show-for-mobile">Recipes</div>
    <div className="show-for-desktop">Recipe</div>
    {/* <div className="show-for-desktop">Amount</div> */}
    </div>
      <div className="list-body">
       {
           props.recipes.length === 0 ? (
               <div className="list-item list-item--message">
                    <span>No recipes</span>
               </div>
           ) : (
            props.recipes.map((recipe) => {  //adding an individual recipe
                return <RecipeListItem key={recipe.id} {...recipe} />   
             })
       )}
       </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        recipes: selectRecipes(state.recipes, state.filters)
    };
};

const ConnectedRecipeList = connect(mapStateToProps)(RecipeList);

export default ConnectedRecipeList;

//or
// export default connect((state) => {
//     return {
//         expenses: state.expenses
//     };
//     })(ExpenseList);
    
    
