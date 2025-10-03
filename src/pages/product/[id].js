"use client";

import Recommended from "@/components/home/recommended";
import Product from "@/components/product";
import React from "react";

export default function ProductPage({ product, reommendedProducts }) {
  return (
    <div>
      <Product product={product} />
      <Recommended recommendedProducts={reommendedProducts} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  //Get Product
  const { id } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/getById/${id}`
  );
  const productData = await res.json();
  const product = productData?.data;

  //Get Recommended
  const reommededRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/getAll?limit=5`
  );
  const recommededData = await reommededRes.json();
  const reommendedProducts = recommededData?.data?.products;

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product, reommendedProducts },
    revalidate: 180,
  };
}

export async function getStaticPaths() {
  // Get Recommended
  const reommededRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/getAll?limit=5`
  );
  const recommededData = await reommededRes.json();
  const products = recommededData?.data?.products;
  const paths = products?.map((p) => ({
    params: { id: p._id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
