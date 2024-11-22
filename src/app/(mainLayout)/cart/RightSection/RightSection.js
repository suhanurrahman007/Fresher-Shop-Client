'use client'
import Image from 'next/image';
import React from 'react';
import { OrderModal } from '../../shop/[id]/OrderModal';
import useCart from '@/components/hooks/useCart';
import useUser from '@/components/hooks/useUser';

const RightSection = () => {
  const [cart] = useCart();
  const [user] = useUser();
  const myCart = cart?.filter((item) => item?.customerName === user?.name);

  const totalPrice = myCart?.reduce((sum, item) => sum + item.productPrice, 0);

  // Discounted Price
  const discountPrice = myCart.reduce((sum, item) => {
    const price = item.productPrice || 0;
    const discount = item.discount_price || 0;
    return sum + price * (1 - discount / 100);
  }, 0);


  const total = totalPrice - discountPrice;
  return (
    <div className="space-y-3">
      <div className="p-6 bg-[#000C21] text-white rounded-lg shadow-lg max-w-sm mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-100">Summary</h1>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-md font-medium text-gray-300">Price</h2>
          <h1 className="text-lg font-extrabold text-white">
            {totalPrice ? totalPrice.toFixed(2) : "0.00"}
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-md font-medium text-gray-300">Discount Price</h2>
          <h1 className="text-lg font-extrabold text-white">
            - {total ? total.toFixed(2) : "0.00"}
          </h1>
        </div>
        <hr className="my-3 border-dashed border-gray-700" />
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-300">Total Price</h2>
          <h1 className="text-xl font-extrabold text-white">
            BDT {discountPrice ? discountPrice.toFixed(2) : "0.00"}
          </h1>
        </div>
        <OrderModal totalPrice={totalPrice} discountPrice={discountPrice} />
      </div>
      <div className="space-y-5 p-6 bg-[#000C21] text-white rounded-lg shadow-lg max-w-sm mx-auto">
        <div className="grid grid-cols-7 gap-2">
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/7vsVnq0/visa.webp"
            alt="Visa"
            className="h-10 w-auto object-contain"
          />
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/N7PdVgc/Mastercard-new-logo-1200x865.webp"
            alt="Mastercard"
            className="h-10 w-auto object-contain"
          />

          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/T8pNv98/Apple-Pay-Logo-wine.png"
            alt="Apple Pay"
            className="h-10 w-auto bg-purple-800 object-contain"
          />
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/nPTtdVw/png-transparent-money-payment-payu-circle-payment-icon.png"
            alt="PayU"
            className="h-10 w-auto object-contain"
          />
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/q14nTbS/przelewy24-logo-2022-svg-ERESIZE-preview.png"
            alt="Przelewy24"
            className="h-10 w-auto object-contain"
          />
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/NpW8mnP/atm-card-logo-10mated-teller-machine-bank-debit-card-png-favpng-0ur-GGVgi6-E3snazd-Ts-FE88-KZV.jpg"
            alt="ATM Card"
            className="h-10 w-auto object-contain"
          />
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/6tVqqnq/Pay-with-Lockup-Vertical.png"
            alt="Pay"
            className="h-10 w-auto object-contain"
          />
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/r7NxL5K/Blik-logo.jpg"
            alt="Blik"
            className="h-10 w-auto object-contain"
          />
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/7nv11Pr/deal.jpg"
            alt="Deal"
            className="h-10 w-auto object-contain"
          />
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/T224KWh/google-pay-logo.jpg"
            alt="Google Pay"
            className="h-10 w-auto object-contain"
          />
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/pWDNbPG/paypal.png"
            alt="PayPal"
            className="h-10 w-auto object-contain"
          />
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/r4qcct4/american.png"
            alt="American Express"
            className="h-10 w-auto object-contain"
          />
          <Image
            width={100}
            height={100}
            src="https://i.ibb.co.com/JvQgg5v/jcb.jpg"
            alt="JCB"
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-lg text-purple-300 font-bold">
            Buyer Protection
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed flex gap-3">
            <Image
              width={100}
              height={100}
              src="https://ae01.alicdn.com/kf/S5d155b426fd74b24bd10e73f9ac90a93b/64x76.png"
              alt="JCB"
              className="h-8 w-auto object-contain"
            />
            Get a full refund if the item is not as described or if it is not
            delivered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;