import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Shop() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    axios.get(url).then((res) => {
      let data = res.data;
      setProducts(data);
    }).catch(() => {
      alert('request is not sucess')
    })
  }, []);
  return (
    <div className="w-full h-dvh ">
      <h1 className="text-4xl text-[black] text-center">All Product</h1>
      <div className="container grid grid-cols-3 items-center gap-4 p-4">
          {
            Products.map((el, index) => {
              return(
                
              <div key={el.id} data-theme="dark" className="card bg-base-100  w-96 shadow-sm">
                <figure>
                  <img className="w-full h-30 object-contain"
                    src={el.image} />
                </figure>
                <div className="card-body w-full h-55">
                  <h2 className="card-title font-bolds">{el.title}</h2>
                  <p>{el.price}</p>
                  <div className="card-actions justify-end">
                    < Link  to={"/Shop/Product/" + el.id} className="btn btn-primary">Show more details</ Link >
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
  )
}
