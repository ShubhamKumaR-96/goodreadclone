import Logo from "../assets/Images/logo.png";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-40 h-[100vh]">
      {/* Logo container */}
      <div className="h-40 w-40">
        <img className="w-full h-full" src={Logo} alt="Good read clone " />
      </div>
      {/* Text Container */}
      <div className="flex justify-around items-center gap-16">
        <div className="w-2/4 text-center font-semibold basis-1/2">
          <h1 className="text-white text-4xl tracking-widest leading-normal">
            Book Read clone <br />
            <span className="text-warning">
              Connect. Discover. Read. Your social network for bookworms
            </span>
          </h1>
        </div>
        <div>
          <button className=" btn btn-primary rounded-md px-5 py-3 text-xl">
            Register
          </button>
          <button className=" btn btn-success rounded-md mx-5 py-3 text-xl">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
