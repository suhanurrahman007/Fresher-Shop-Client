import { Input } from '@/components/ui/input';
import React from 'react';
import { IoIosListBox, IoIosSearch } from "react-icons/io";
import BasicSelect from '../Dashboard/Admin/Blog/BasicSelect';
import TooltipRight from '../Dashboard/Admin/Product/TooltipRight';
const ItemNavbar = ({item}) => {
    return (
      <div data-aos="zoom-out" className="navbar shadow-md">
        <div className="flex-1 gap-3">
          <TooltipRight
            buttonName={`All - ${item?.length}`}
            buttonDes={"This is All Items"}
          />

          <TooltipRight
            buttonName={`Items - ${item?.length}`}
            buttonDes={"This is All Item"}
          />

          <TooltipRight
            buttonName={`Service - ${item?.length}`}
            buttonDes={"This is All Service"}
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

export default ItemNavbar;