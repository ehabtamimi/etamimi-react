const HeaderSection = ({ image }: any) => {
  return (
    <header>
      <img
        src={`${
          location.protocol + "//" + location.host + location.pathname + image
        }`}
        className="img-fluid"
      />
    </header>
  );
};

export default HeaderSection;
