const SectionTitle = ({ header, miniHeader }) => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center py-5">
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-xl"
      >
        --- <span className="text-blue-600">{miniHeader}</span> ---
      </p>
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-4xl font-semibold uppercase"
      >
        {header}
      </h2>
    </div>
  );
};

export default SectionTitle;
