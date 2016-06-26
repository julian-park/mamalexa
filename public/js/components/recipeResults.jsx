class RecipeResults extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      currentStep: 0
    };
  }

  render () {
    var recipeRows = [[]];
    var i = 0;

    {this.props.recipeList.results.map((item,index)=> {
      var ele = <td id="grid_box" key={index}>{item}</td>
      if (index <= 5) {
        if (index !== 0 && index % 3 === 0) {
          recipeRows.push([ele])
          i++;
        } else {
          recipeRows[i].push(ele);
        }
      }
    })}
    return (
      <div>
        <div style={{fontWeight: 400, fontSize: '1.5em', marginBottom: '30px'}}><i>Results for "{this.props.recipeList.searchQuery}"</i></div>
        <table>
          <tbody>
            {recipeRows.map((item, index)=>{
              return (<tr key={index}>{item}</tr>)
            })}
        </tbody>
        </table>
      </div>
    );
  }
}


var recipeList = {
  searchQuery: "cookie",
  results: ['chikkun 1', 'something', 'chicken 2', 'lotsa chikcne', 'more chicken', 'chikun 4 days', 'lol', 'bob']
}

// some script to generate recipe data here!

ReactDOM.render(
  <RecipeResults recipeList={recipeList} />,
  document.getElementById('recipeResults')
);