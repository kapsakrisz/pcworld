import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "Desktops",
      "imageUrl": "https://img.overclockers.co.uk/homepage/misc/2203-hp-feature-box-cases.jpg?auto=compress%2Cformat&fit=max&q=70&w=282"
    },
    {
      "id": 2,
      "title": "Graphics cards",
      "imageUrl": "https://img.overclockers.co.uk/products/OCUK-GX-1G0-GI/gam1.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=282&h=282"
    },
    {
      "id": 3,
      "title": "Monitors",
      "imageUrl": "https://img.overclockers.co.uk/products/MO-01V-MS/6-mpg-artymis-323cqr.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=282&h=282"
    },
    {
      "id": 4,
      "title": "Laptops",
      "imageUrl": "https://img.overclockers.co.uk/products/LT-2HA-AS/asuszephyrusm16.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=282&h=282"
    },
    {
      "id": 5,
      "title": "GAming Chairs",
      "imageUrl": "https://img.overclockers.co.uk/homepage/misc/2203-hp-feature-box-chairs-update.jpg?auto=compress%2Cformat&fit=max&q=70&w=282"
    }
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
