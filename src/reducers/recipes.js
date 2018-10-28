//Recipes reducer
const recipesReducerDefaultState = [];
const recipesReducer = (state = recipesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_RECIPE':
        //return state.concat(action.recipe)
        return [
            ...state,
            action.recipe
        ];
        case 'REMOVE_RECIPE':
        return state.filter(({ id }) => id !== action.id);
        
        case 'EDIT_RECIPE':
        return state.map((recipe) => {
            if(recipe.id === action.id) {
                return {
                 ...recipe,
                 ...action.updates  
                };
            } else {
                return recipe;
            };
        });
        case 'SET_RECIPES':
            return action.recipes;
        default:
        return state;
    }
};
export default recipesReducer;