class RecipeResults extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      currentStep: 0
    };
  }

  render () {
    return (
      <div>
        <div style={{fontWeight: 400, fontSize: '1.5em', marginBottom: '30px'}}><i>Results for "chicken"</i></div>
        <table>
          <tbody>
          <tr>
            <td id="grid_box"><a href="/recipe.html">one</a></td>
            <td id="grid_box">two</td>
            <td id="grid_box">three</td>
          </tr>
          <tr>
            <td id="grid_box">one</td>
            <td id="grid_box">two</td>
            <td id="grid_box">three</td>
          </tr>
        </tbody>
        </table>
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
  <RecipeResults recipeData={recipeData} />,
  document.getElementById('recipeResults')
);