import Paginations from "@/components/common/paginations";
import ProdcutCard from "@/components/common/product-card";
import { useGetAllProductQuery } from "@/lib/services/productApi";
import React, { useState } from "react";

const list = {
  products: [
    {
      id: 1,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 2,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 3,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 4,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 5,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 6,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 7,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 8,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 9,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 10,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 12,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 13,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 14,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 15,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 16,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 17,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 18,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
    {
      id: 20,
      banner: "/assets/png/card.png",
      label: "Lorem Ipsum is simply dum......",
      price: "80.00",
    },
  ],
  paginations: {
    per_page: 16,
    total_item: 200,
  },
};

export default function ProductsList() {
  const [currentPage, setCurrentPage] = useState(1);
   const [filters, setFilters] = useState({
      publish_status: "approved",
      page: currentPage,
    });
    const { data, isLoading } = useGetAllProductQuery(filters);
  
  return (
    <div className="mt-3 md:mt-8">
      <div className="relative grid sm:grid-cols-3 grid-cols-2 gap-5 xl:gap-10">
        <div className="absolute top-1/2 -translate-y-1/2 -right-10 glow-blue"></div>
        <div className="absolute bottom-0 -right-10 glow-blue"></div>
        <div className="absolute top-60 -left-10 glow-blue"></div>
        <div className="absolute bottom-60 -left-10 glow-blue"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-blue"></div>
        {data?.products?.map((product) => (
          <ProdcutCard key={product.id} product={product} />
        ))}
      </div>
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-30 glow-blue"></div>
        <Paginations
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalItems={data?.totalPages}
          totalPages={data?.totalPages}
        />
      </div>
    </div>
  );
}
