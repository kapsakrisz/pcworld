


const App = () => {

const categories =[
  {
    id:1,
    title:'Hats',
  },
  {
    id:2,
    title:'Jackets',
  },
  {
    id:3,
    title:'Sneakers',
  },
  {
    id:4,
    title:'womans',
  },
  {
    id:5,
    title:'mens',
  }
]

  return (
    <div className="categories-container">
    {categories.map(({title}) => (
      <div classNAme="category-container">
      <div className="background-image"/>
      <div className="category-body-container">
      <h2>{title}</h2>
      <p>shop now</p>
      </div>
    </div>
    ))}
    
    </div>
    
  );
}

export default App;
