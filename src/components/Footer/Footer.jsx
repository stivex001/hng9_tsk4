import logo from "../../assets/Group.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1E] w-full h-[20rem]">
      <div className="container pt-16 flex justify-between">
        <div className="cursor-pointer">
          <img src={logo} alt="" />
          <div className="flex gap-10 mt-24">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="flex gap-[13rem] cursor-pointer">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-white text-xl">Community</h1>
            <p className="font-normal text-sm text-white">NFT</p>
            <p className="font-normal text-sm text-white">Tokens</p>
            <p className="font-normal text-sm text-white">Landlords</p>
            <p className="font-normal text-sm text-white">Discord</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-white text-xl">Places</h1>
            <p className="font-normal text-sm text-white">Castle</p>
            <p className="font-normal text-sm text-white">Farms </p>
            <p className="font-normal text-sm text-white">Beach</p>
            <p className="font-normal text-sm text-white">Learn more</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-white text-xl">About us</h1>
            <p className="font-normal text-sm text-white">Road map</p>
            <p className="font-normal text-sm text-white">Creators </p>
            <p className="font-normal text-sm text-white">Career</p>
            <p className="font-normal text-sm text-white">Contact us</p>
          </div>
        </div>
      </div>
      <p className="container font-normal text-sm text-white">&copy; 2022 Metabnb</p>
    </footer>
  );
};

export default Footer;
