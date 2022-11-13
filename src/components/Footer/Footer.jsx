import logo from "../../assets/Group.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-black pt-[63px] pb-[37px] md:px-16 lg:px-10 xl:px-0">
      <div className="max-w-[1112px] mx-auto md:flex md:justify-between xl:max-w-[1240px]">
        <div className="text-white flex flex-col items-center md:items-start">
          <img src={logo} alt="company logo" className="md:w-[60%] xl:w-full" />
          <div className="m-14 md:mx-0 xl:mb-14 xl:mt-24 flex justify-between">
            <img src={facebook} alt="" className="cursor-pointer mr-4 md:mr-8"/>
            <img src={instagram} alt="" className="cursor-pointer mr-4 md:mr-8"/>
            <img src={twitter} alt="" className="cursor-pointer mr-4 md:mr-8"/>
          </div>
        </div>
        <div className="mb-10 xl:mb-0 cursor-pointer text-white flex flex-col text-center md:text-left md:flex-row md:justify-between xl:justify-around md:w-3/5">
          <div className="text-white">
            <h1 className="font-bold text-white mb-[23px] text-lg">Community</h1>
            <p className="font-normal text-sm mb-4">NFT</p>
            <p className="font-normal text-sm mb-4">Tokens</p>
            <p className="font-normal text-sm mb-4">Landlords</p>
            <p className="font-normal text-sm mb-4">Discord</p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg mb-[23px]">Places</h1>
            <p className="font-normal text-sm mb-4">Castle</p>
            <p className="font-normal text-sm mb-4">Farms </p>
            <p className="font-normal text-sm mb-4">Beach</p>
            <p className="font-normal text-sm mb-4">Learn more</p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-lg mb-[23px]">About us</h1>
            <p className="font-normal text-sm mb-4">Road map</p>
            <p className="font-normal text-sm mb-4">Creators </p>
            <p className="font-normal text-sm mb-4">Career</p>
            <p className="font-normal text-sm mb-4">Contact us</p>
          </div>
        </div>
      </div>
      <p className="font-normal text-center text-white md:text-left">&copy; 2022 Metabnb</p>
    </footer>
  );
};

export default Footer;
