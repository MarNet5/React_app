const selectRecipesTotal = (recipes) => {
if(recipes.length === 0) {
    return 0;
} else {
    return recipes
    .map((recipe) => recipe.amount)
    .reduce((sum, value) => sum + value, 0);
}
}
export default selectRecipesTotal;

//or
// export default (expenses) => {
//     return expenses
//     .map((expense) => expense.amount)
//     .reduce((sum, value) => sum + value, 0);
// };