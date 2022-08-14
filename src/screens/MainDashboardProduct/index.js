import React from 'react';
import { useNavigate } from 'react-router-dom';
import { k } from '../../utils';

const MainDashboardProduct = () => {
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate(`${k.navigations.detailsProduct}1`);
  };

  return (
    <div className="screens_root">
      <h1>Hola mundo MainDashboardProduct </h1>
      <button onClick={() => goToDetails()} >detalle</button>
      <p>hola mundo</p>
    </div>
  );
};

export default MainDashboardProduct;
