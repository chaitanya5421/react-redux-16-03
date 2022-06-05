import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCart } from '../../redux/productactions/ProductActions';


function Product() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [product,setProduct] = useState({});

    const getProductData = async () =>{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        // console.log(data);
    }

    useEffect(()=>{
        getProductData();
    },[])

  return (
    <div className='container'>
        <h2>product Page</h2>
        {Object.keys(product).length ? (
            <div className='row border border-primary mt-2'>
                <div className='col-lg-6 p-5 mt-2'>
                    <div>
                        <img className='w-100' src={product.image} alt={product.title} />
                    </div>
                </div>
                <div className='col-lg-6 border-primary' >
                    <div className='mt-5'>
                        <h3 className='text-center'>{product.title}</h3>
                    </div>
                    <div className='productPrice'>
                        <span className='bg-info p-2 text-white'>
                            Price : $ {product.price}
                        </span>
                    </div>

                    <div className='productCategory mt-3'>
                        <span className='bg-secondary text-white p-2'>category : {product.category}</span>
                    </div>

                    <div className='productdisc mt-2'>
                        <p className='p-2'>{product.description }</p>
                    </div>

                    <div className='productaddtocart mt-4'>
                        <button onClick={()=>{
                            dispatch(addToCart(product))
                            }} className='btn btn-info px-3 py-2'>Add to cart</button>
                    </div>
                </div>
            </div>
        ):<p>Loading...</p>}
    </div>
  )
}

export default Product