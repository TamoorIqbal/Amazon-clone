import React,{useEffect,useState,useContext} from 'react'
import {db} from '../../firebase'
import './Orders.css'
import { Order } from '../Order/Order';
import { GlobalContext } from "../../context/GlobalState";

export const Orders = () => {
    const [orders, setOrders] = useState([]);
    const  {basekt,user}  = useContext(GlobalContext);

    useEffect(() => {
      if(user) {
          db
          .collection('users')
          .doc(user?.uid)
          .collection('orders')
          .orderBy('created', 'desc')
          .onSnapshot(snapshot => (
              setOrders(snapshot.docs.map(doc => ({
                  id: doc.id,
                  data: doc.data()
              })))
          ))
      } else {
          setOrders([])
      }
  
    }, [user])
  
  return (
    <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
  )
}
