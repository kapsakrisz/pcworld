
import Directory from './components/directory/directory.component'

const App = () => {

const categories =[
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://img.overclockers.co.uk/homepage/misc/2203-hp-feature-box-cases.jpg?auto=compress%2Cformat&fit=max&q=70&w=282"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
];

  return (
    <Directory categories={categories}/>
    
  );
}

export default App;
