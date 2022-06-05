import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';


function Products() {
    const [products,setProducts] = useState([]);

    const getProducts = async ()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        // console.log(data);
        setProducts(data);
    };

    useEffect(()=>{
        getProducts();
    },[]) 

  return (
    <div>
        <div className='container py-5'>
            <div className='row'>
                {
                    products.length > 0 ? (
                        products.map((product)=>
                         <div key={product.id} className='col-md-3'>
                             <Link to={`/product/${product.id}`}>
                             <div  className='card my-2'>
                                <img src={product.image} alt={product.title} />
                            <div className='card-body'>
                                <h4 className='card-title'>{product.category}</h4>
                            </div>
                             </div>
                             </Link>
                        </div>)
                    ) : (
                        <p>Loading....</p>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Products