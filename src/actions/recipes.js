import uuid from 'uuid';
import database from '../firebase/firebase';
//ADD_RECIPES
export const addRecipe = (recipe) => ({
    type: 'ADD_RECIPE',
    recipe
});

export const startAddRecipe = (recipeData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            //amount = 0, 
            ingredients = '',
            directions = '',
            createdAt = 0  
        } = recipeData;
        const recipe = { description, note, ingredients, directions, createdAt };

        return database.ref(`users/${uid}/recipes`).push(recipe).then((ref) => {
            dispatch(addRecipe({
                id: ref.key,
                ...recipe
            }));
        })
    };
};

//REMOVE_RECIPES
export const removeRecipe = ({ id } = {}) => ({
    type: 'REMOVE_RECIPE',
    id
});

//START_REMOVE_RECIPES
export const startRemoveRecipe = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/recipes/${id}`).remove().then(() => {
            dispatch(removeRecipe({ id }));
        });
    };
};

//EDIT_RECIPES

export const editRecipe = (id, updates) => ({
   type: 'EDIT_RECIPE',
   id,
   updates 
});

//START_EDIT_RECIPES

export const startEditRecipe = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/recipes/${id}`).update(updates).then(() => {
            dispatch(editRecipe(id, updates));
        });
    };
};

//SET_RECIPES
export const setRecipes = (recipes) => ({
    type: 'SET_RECIPES',
    recipes
});

//START_SET_RECIPES
export const startSetRecipes = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/recipes`).once('value').then((snapshot) => {
      const recipes = [];

      snapshot.forEach((childSnapshot) => {
                  recipes.push({
                      id: childSnapshot.key,
                      ...childSnapshot.val()
                  });
              });
              dispatch(setRecipes(recipes));
          });
    };
};


