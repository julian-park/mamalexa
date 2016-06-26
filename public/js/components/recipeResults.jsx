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
      var ele = <td id="grid_box" key={index}>
        <img src={item.picture} alt="Mountain View" style={{margin:'5px',width:'80%',height:'70%'}} />
        <a href="/recipe.html"><h4>{item.name}</h4></a>
        {item.description}
      </td>
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
  results: [{name:'chikkun 1',picture:'http://www.taste.com.au/images/recipes/nb/2009/08/country-chicken-pie-17940_l.jpeg',description:'noodles noodles noodlesnoodles noodles noodlesnoodles noodles noodlesnoodles noodles noodles'},
    {name:'chikkun 2',picture:'http://www.taste.com.au/images/recipes/nb/2009/08/country-chicken-pie-17940_l.jpeg',description:'noodles noodles noodlesnoodles noodles noodlesnoodles noodles noodlesnoodles noodles noodles'},
    {name:'chikkun 3',picture:'http://www.taste.com.au/images/recipes/nb/2009/08/country-chicken-pie-17940_l.jpeg',description:'noodles noodles noodlesnoodles noodles noodlesnoodles noodles noodlesnoodles noodles noodles'},
    {name:'chikkun 4',picture:'http://www.taste.com.au/images/recipes/nb/2009/08/country-chicken-pie-17940_l.jpeg',description:'noodles noodles noodlesnoodles noodles noodlesnoodles noodles noodlesnoodles noodles noodles'},
    {name:'chikkun 5',picture:'http://www.taste.com.au/images/recipes/nb/2009/08/country-chicken-pie-17940_l.jpeg',description:'noodles noodles noodlesnoodles noodles noodlesnoodles noodles noodlesnoodles noodles noodles'},
    {name:'chikkun 6',picture:'http://www.taste.com.au/images/recipes/nb/2009/08/country-chicken-pie-17940_l.jpeg',description:'noodles noodles noodlesnoodles noodles noodlesnoodles noodles noodlesnoodles noodles noodles'},
    {name:'chikkun 11',picture:'http://www.taste.com.au/images/recipes/nb/2009/08/country-chicken-pie-17940_l.jpeg',description:'noodles noodles noodlesnoodles noodles noodlesnoodles noodles noodlesnoodles noodles noodles'},
  ]
}

// some script to generate recipe data here!

ReactDOM.render(
  <RecipeResults recipeList={recipeList} />,
  document.getElementById('recipeResults')
);