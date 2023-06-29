const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];
  
  function Recipe({recipe}) {
    const recipeLists = recipe.ingredients.map(ingredient =>
      <li key={ingredient}>{ingredient}</li>
    );
    return(
      <>
        <h2>{recipe.name}</h2>
        <ul>{recipeLists}</ul>
      </>
    );
  }
  
  export default function RecipeList() {
    return (
      <div>
        <h1>Recipes</h1>
        {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
      </div>
    );
  }
  