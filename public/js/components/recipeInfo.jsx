class RecipeInfo extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      currentStep: 0
    };
  }

  render () {
    return (
      <div>
        <h3> {this.props.recipeData.recipeName} </h3>
        <h1> INGREDIENTS </h1>
        <ul>
          {this.props.recipeData.ingredients.map((item, i)=>{
            return (<li key={i}> {item} </li>)
          })}
        </ul>
        <h1> STEPS </h1>
        <ul>
          {this.props.recipeData.steps.map((item, i)=>{
            var text = "Step #" + i + ": " + item;
            return (i === this.state.currentStep ?
              <li key={i}> <h2> {text} </h2> </li> :
              <li key={i}> {text} </li>);
          })}
        </ul>
        <button
          type="button"
          onClick={()=>{this.setState({currentStep: this.state.currentStep + 1})}}>
            Next Step
        </button>
        
        <button
          type="button"
          onClick={()=>{}}>
            Start Mamalexa
        </button>
      </div>
    );
  }
}


var recipeData = {
  recipeName: 'cookie',
  ingredients: [
    'flour',
    'sugar',
    'somethin'
  ],
  steps: ['do something', 'do something else', 'youre done']
}

// some script to generate recipe data here!

ReactDOM.render(
  <RecipeInfo recipeData={recipeData} />,
  document.getElementById('recipeInfo')
);
