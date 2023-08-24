import React , { useState, useContext }  from 'react'
import { db } from '../../Services/firebaseConfig'
import { writeBatch, Timestamp, doc, collection } from 'firebase/firestore'; 
import { CartContext } from '../../context/CartContext';
import CheckoutForm from './CheckoutForm'
const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { cart, total, clearCart } = useContext(CartContext); 

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const orderObj = {
        buyer: {
          name: name,
          phone: phone,
          email: email
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date())
      };

      
      const batch = writeBatch(db);

            const orderRef = doc(collection(db, 'orders'));
      batch.set(orderRef, orderObj);

            
      setOrderId(orderRef.id);
      clearCart(); // Assuming you have a function to clear the cart in your CartContext

      setLoading(false);
    } catch (error) {
      console.error('Error creating order:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <h1>Se está generando su orden...</h1>}
      {orderId && <h1>El id de su orden es: {orderId}</h1>}
      <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder} />
      </div>
    </div>

  );
};
export default Checkout;