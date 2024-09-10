import Image from 'next/image';
import React from 'react';

const ProductCard = ({ data }: any) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 ">
      <div className="relative w-full h-48">
        <Image
          className="object-cover"
          src={data.image}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          quality={75}
        />
      </div>
      <div className="p-4">
        <h5 className="mb-2 text-xl font-semibold text-gray-900 line-clamp-2">
          {data.title}
        </h5>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {data.description}
        </p>
        <button
          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
