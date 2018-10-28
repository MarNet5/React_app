import React from 'react';
import RecipeList from './RecipeList';
import RecipeListFilters from './RecipeListFilters';
import RecipesSummary from './RecipesSummary';



const RecipeDashboardPage = () => (
    <div>
        <RecipesSummary />
        <RecipeListFilters />
        <RecipeList />
       
       
    </div>
);

export default RecipeDashboardPage;