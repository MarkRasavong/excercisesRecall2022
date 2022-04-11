import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

export default function TarjetaCliente({ id, name, food }: CustomerCardType) {
  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState('');

  return (
  <div className="customer-food-card-container" key={id}>
  <p>{name}</p>
  <div className="customer-foods-container">
    <div className="customer-food">
      {food.map(item => {
        return <p>{item}</p>
      })}
    </div>
    <div className="customer-food-input-container">
      <input 
      value={customerFoodInput} 
      onChange={(e) => setCustomerFoodInput(e.target.value)}
      />
      <button onClick={() => {
        if(!customerFoodInput) return
        dispatch(addFoodToCustomer({
          id,
          food: customerFoodInput
        }))
      }}>Add</button>
    </div>
  </div>
</div>
  )
}
