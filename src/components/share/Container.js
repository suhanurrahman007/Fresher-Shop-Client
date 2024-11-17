const Container = ({children}) => {
    return (
      <div className="max-w-[2520px] text-white lg:px-16 md:px-8 sm:px-2 px-4">
        {children}
      </div>
    );
};

export default Container;