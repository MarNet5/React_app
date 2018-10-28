import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import recipesReducer from '../reducers/recipes';

// const now = moment();
// console.log(now.format('MMM Do YYYY'));

export default class RecipeForm extends React.Component {
    constructor(props) {
      super(props);
  
    //   this.state = {
    //     description: props.recipe ? props.recipe.description : '',
    //     note: props.recipe ? props.recipe.note : '',
    //     amount: props.recipe ? (props.recipe.amount / 100).toString() : '',
    //     createdAt: props.recipe ? moment(props.recipe.createdAt) : moment(),
    //     calendarFocused: false,
    //     error: ''
    //   };
    // }

    this.state = {
        description: props.recipe ? props.recipe.description : '',
        note: props.recipe ? props.recipe.note : '',
        ingredients: props.recipe ? props.recipe.ingredients : '',
        directions: props.recipe ? props.recipe.directions : '',
        createdAt: props.recipe ? moment(props.recipe.createdAt) : moment(),
        calendarFocused: false,
        error: ''
      };
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))

        //another way
        // e.persist()
        // this.setState(() => ({ note: e.target.value}))
    };

    // onAmountChange = (e) => {
    //     const amount = e.target.value;
    //     if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
    //         this.setState(() => ({ amount }))
    //     }
    // };

    onIngredientsChange = (e) => {
        const ingredients = e.target.value;
        this.setState(() => ({ ingredients }))
    };

    onDirectionsChange = (e) => {
        const directions = e.target.value;
        this.setState(() => ({ directions }))
    };

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.ingredients || !this.state.directions) {
            //set error state equal to 'Please provide description and amount.'
            this.setState(() => ({ error: 'Please provide description, ingredients and directions to save the recipe.'}))
        } else {
            //clear the error
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                ingredients: this.state.ingredients,
                directions: this.state.directions,
                //amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };


    render() {
        return (
               <form className="form" onSubmit={this.onSubmit}>
               {this.state.error && <p className="form__error">{this.state.error}</p>}
                   <input 
                   type="text"
                   placeholder="Description"
                   autoFocus
                   className="text-input"
                   value={this.state.description}
                   onChange={this.onDescriptionChange}
                   />
                   {/* <input 
                   type="text"
                   placeholder="Amount"
                   className="text-input"
                   value={this.state.amount}
                   onChange={this.onAmountChange}
                   /> */}
                   <textarea
                    className="textarea"
                   placeholder="Add an ingredients"
                   value={this.state.ingredients}
                   onChange={this.onIngredientsChange}
                   >
                   </textarea>
                   <textarea
                    className="textarea"
                   placeholder="Add directions"
                   value={this.state.directions}
                   onChange={this.onDirectionsChange}
                   >
                   </textarea>
                   <SingleDatePicker
                   date={this.state.createdAt}
                   onDateChange={this.onDateChange}
                   focused={this.state.calendarFocused}
                   onFocusChange={this.onFocusChange}
                   numberOfMonths={1}
                   isOutsideRange={() => false} //ability to choose past dates
                   />
                    <textarea
                    className="textarea"
                   placeholder="Add a note for your recipe"
                   value={this.state.note}
                   onChange={this.onNoteChange}
                   >
                   </textarea>
                   <div>
                        <button className="button">Save Recipe</button>
                   </div>
               </form>
        )
    }
}