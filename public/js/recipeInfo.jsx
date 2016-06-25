
var HelloMessage = React.createClass({
  getInitialState: function() {
    return {currentStep: 0};
  },
  render: function() {
    return (
      <div>
        <h1> INGREDIENTS </h1>
        <ul>
          {this.props.recipeData.ingredients.map((item)=>{
            return (<li> {item} </li>)
          })}
        </ul>
        <h1> STEPS </h1>
        <ul>
          {this.props.recipeData.steps.map((item, i)=>{
            var text = "Step #" + i + ": " + item;
            return (i === this.state.currentStep ? 
              <li> <h2> {text} </h2> </li> : 
              <li> {text} </li>);
          })}
        </ul>
        <button 
          type="button" 
          onClick={()=>{this.setState({currentStep: this.state.currentStep + 1})}}>
            Next step 
        </button>  
      </div>
    );
  }
});


var recipeData = {
  recipeName: 'cookie',
  ingredients: [
    'flour',
    'sugar',
    'somethin'
  ],
  steps: ['do something', 'do something else', 'youre done']
}

ReactDOM.render(
  <HelloMessage recipeData={recipeData} />,
  document.getElementById('recipeInfo')
);