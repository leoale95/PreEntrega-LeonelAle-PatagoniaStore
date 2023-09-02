import React, { useState, useContext } from 'react';
import { db } from '../../Services/firebaseConfig';
import { writeBatch, Timestamp, collection, addDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import CheckoutForm from './CheckoutForm';
import { useToast } from '@chakra-ui/react';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { cart, total, clearCart } = useContext(CartContext);
  const toast = useToast();

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const orderObj = {
        buyer: {
          name: name,
          phone: phone,
          email: email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const ordersCollectionRef = collection(db, 'order');
      const orderRef = await addDoc(ordersCollectionRef, orderObj);

      setOrderId(orderRef.id);
      clearCart();

      setLoading(false);
    } catch (error) {
      console.error('Error creating order:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && (
        <div>
          {toast({
            title: 'Generando orden',
            description: 'Se está generando su orden...',
            status: 'info',
            duration: 1000,
            isClosable: true,
          })}
        </div>
      )}
      {orderId && (
        <div>
          {toast({
            title: 'ID de orden',
            description: `El ID de su orden es: ${orderId}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
          })}
        </div>
      )}
      <div>
        <CheckoutForm onConfirm={createOrder} />
      </div>
    </div>
  );
};

export default Checkout;
