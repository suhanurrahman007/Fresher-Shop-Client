export default function TooltipRight({ buttonName, buttonDes }) {
  return (
    <div className="flex items-center justify-center">
      <div className="group relative h-7">
        {/* Hover button */}
        <button className="inline rounded-sm text-xs bg-[#0D0D21] px-3 py-2 text-[#0EA5E9]">
          {buttonName}
        </button>
        {/* Hover Text */}
        <div className="absolute -bottom-12 text-xs cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-16 group-hover:opacity-100  ">
          <p className="rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
            {buttonDes}
          </p>
          <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
        </div>
      </div>
    </div>
  );
}
