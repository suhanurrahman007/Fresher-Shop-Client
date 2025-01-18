import Image from "next/image";

export const ProductAllCard = ({ product }) => (
  <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow bg-white">
    <Image
      src={product.image}
      width={300}
      height={300}
      alt={product.name}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
    <p className="text-sm text-gray-500">{product.weight}</p>
    <p className="text-orange-500 font-bold text-lg">
      ${product.price.toFixed(2)}
    </p>
    <button className="bg-orange-500 text-white w-full py-2 mt-3 rounded-lg hover:bg-orange-600 transition duration-300">
      Add to Cart
    </button>
  </div>
);