const HeaderSection = ({ image }: any) => {
  return (
    <header className=".img-fluid. max-width: 100%;">
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
