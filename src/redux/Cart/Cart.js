import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const [total,setTotal] = useState(0);
    //we have hook to access the redux store state
    const cart_data = useSelector((state)=>state.productsData.cartData)
    //  console.log(cart_data);
    //  setTotal(cart_data);
  return (
    <div>   
        <div className='product_total'>
            <p className='mt-2'>Total Price : {total}</p>
        </div>
        <div className='container mt-2 border border-dark'>
            {
                cart_data && cart_data.length ? (
                        cart_data.map((product)=>(
                            <div className='row mt-3'>
                                <div className='col-md-4'>
                                    <img className='w-100' src={product.image} alt={product.title} />
                                </div>
                                <div className='col-md-6'>
                                    <div><h2>Title :{product.title} </h2></div>
                                    <div>
                                    <span className='mt-2'>{product.category}</span>
                                    </div>
                                    <div>
                                    <span className='mt-2'>{product.description}</span>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <h2>Title :{product.title} </h2>
                                </div>
                            </div>
                        ))
                ) : (<p>Please add some products</p>) 
            }
        </div>
    </div>
  )
}

export default Cart