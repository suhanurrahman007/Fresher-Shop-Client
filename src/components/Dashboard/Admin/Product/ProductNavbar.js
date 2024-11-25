import { Input } from '@/components/ui/input';
import React from 'react';
import { IoIosListBox, IoIosSearch } from "react-icons/io";
import TooltipRight from './TooltipRight';
import useProducts from '@/components/hooks/useProducts';
import BasicSelect from './BasicSelect';
const ProductNavbar = () => {
    const [products] = useProducts()
    return (
      <div className="navbar shadow-md">
        <div className="flex-1 gap-3">
          <TooltipRight
            buttonName={`All - ${products?.length}`}
            buttonDes={"This is All Product"}
          />

          <TooltipRight
            buttonName={`Items - ${products?.length}`}
            buttonDes={"This is All Product"}
          />

          <TooltipRight
            buttonName={`Service - ${products?.length}`}
            buttonDes={"This is All Product"}
          />

          <BasicSelect />
        </div>
        <div className="flex-none gap-5">
          <div className="form-control relative">
            <Input
              type="text"
              placeholder="Search"
              className="input input-bordered pl-10 w-24 md:w-auto"
              aria-label="Search"
            />
            <IoIosSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
          <IoIosListBox className="text-3xl font-bold text-purple-300" />
        </div>
      </div>
    );
};

export default ProductNavbar;