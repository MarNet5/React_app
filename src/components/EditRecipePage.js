import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { startEditRecipe, startRemoveRecipe } from '../actions/recipes';

export class EditRecipePage extends React.Component {
    onSubmit = (recipe) => {
        this.props.startEditRecipe(this.props.recipe.id, recipe);
        this.props.history.push('/');
 };
 onClick = () => {
    this.props.startRemoveRecipe({ id: this.props.recipe.id });
    this.props.history.push('/'); 
 }
 render() {
     return (
        <div>
            <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Recipe</h1>
                        </div>
                        </div>
                        <div className="content-container">
                        <RecipeForm
                            recipe={this.props.recipe}
                            onSubmit={this.onSubmit}
                            />
        <button className="button button--secondary" onClick={this.onClick}>Remove Recipe</button>
        </div>
    </div>
     );
 }   
}

// const EditExpensePage = (props) => {
//     return (
//         <div>
//             <ExpenseForm
//             expense={props.expense}
//             onSubmit={(expense) => {
//                 //Dispatch the action to edit the expense
//                 //props.dispatch(editExpense(props.expense.id, expense));
//                 props.onSubmit(expense)
//                 //Redirect to the dashboard
//                 props.history.push('/');
                
//             }}
//             />
//             <button onClick={() => { 
//         props.dispatch(removeExpense({ id: props.expense.id }));
//         props.history.push('/');
//       }}>Remove</button>
//         </div>
//     );
// };

const mapStateToProps = (state, props) => ({
    recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id)
    
});
    
        
const mapDispatchToProps = (dispatch, props) => ({
    startEditRecipe: (id, recipe) => dispatch(startEditRecipe(id, recipe)),
    startRemoveRecipe: (data) => dispatch(startRemoveRecipe(data))
});


export default connect (mapStateToProps, mapDispatchToProps)(EditRecipePage);



