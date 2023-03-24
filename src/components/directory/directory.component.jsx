import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';
const categories = [
  {
    "id": 1,
    "title": "Graphics cards",
    "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEArwApp_M0t-_cMQG0SMsSyOdq6sOiiwW3GeijH61icTh441QK5hj3rNwB-BE5wtryho&usqp=CAU=solid&w=282&h=282",
    route:'shop/graphics cards'
  },
  {
    "id": 2,
    "title": "Processors",
    "imageUrl": "https://img.overclockers.co.uk/products/OCUK-CP-6B6-IN/intel-i9kf.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=244&h=244",
    route:'shop/processors'
  },
  {
    "id": 3,
    "title": "Monitors",
    "imageUrl": "https://img.overclockers.co.uk/products/MO-01V-MS/6-mpg-artymis-323cqr.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=282&h=282",
    route:'shop/monitors'
  },
  {
    "id": 4,
    "title": "Keyboards",
    "imageUrl": "https://img.overclockers.co.uk/homepage/misc/Keyboards-hp-banner.jpg?auto=compress%2Cformat&fit=max&q=70&w=380",
    route:'shop/keyboards'
  },
  {
    "id": 5,
    "title": "Gaming Chairs",
    "imageUrl": "https://img.overclockers.co.uk/homepage/misc/2203-hp-feature-box-chairs-update.jpg?auto=compress%2Cformat&fit=max&q=70&w=282",
    route:'shop/gaming chairs'
  }
];

const Directory = () => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
