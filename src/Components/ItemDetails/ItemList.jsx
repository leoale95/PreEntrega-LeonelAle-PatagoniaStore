import Item from './Item';

const ItemList = ({ products }) => { // Destructure the 'products' prop here
  return (
    <div>
      {products.map(prod => <Item key={prod.nombre} {...prod} />)}
    </div>
  );
};

export default ItemList; // Export as default
