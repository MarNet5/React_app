import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { startAddRecipe } from '../actions/recipes';

export class AddRecipePage extends React.Component {
    onSubmit = (recipe) => {
        this.props.startAddRecipe(recipe);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Recipe</h1>
                    </div>
                </div>
                <div className="content-container">
                    <RecipeForm 
                    onSubmit={this.onSubmit}
                    />
                </div>
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddRecipe: (recipe) => dispatch(startAddRecipe(recipe))
});

export default connect (undefined, mapDispatchToProps)(AddRecipePage);