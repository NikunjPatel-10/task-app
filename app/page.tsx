"use client";
import { useEffect, useState } from "react";
import { BaseUrl } from "@/environments/environment";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [product, setProduct] = useState([]);

  /**
   * getting data from the server-side
   */
  async function getProducts() {
    fetch(`${BaseUrl}/products`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" container mx-auto grid grid-rows-4 grid-flow-col gap-4 mt-4">
      {product.map((data: any) => (
        <ProductCard data={data}/>
      ))}
    </div>
 
  );
}
