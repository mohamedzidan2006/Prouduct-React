import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Product() {
    const[product,setproduct]=useState({});
    const params=useParams();
    useEffect(()=>{
        let id=params.ProductId;
        let url=`https://fakestoreapi.com/products/${id}`;
        axios.get(url).then((res)=>{
            let data=res.data;
            setproduct(data);
        }).catch();
    });
  return (
    <div className="w-full h-dvh">
        <div data-theme="dark" className="card bg-base-100 w-170 shadow-sm">
  <div className="card-body">
    <h2 className="card-title text-4xl">{product.title}</h2>
    <p className="text-3xl ">{product.price}$</p>
  </div>
  <figure>
    <img className="w-100 h-50 object-contain"
      src={product.image}/>
  </figure>
</div>
    </div>
  )
}
