import { AiFillMessage } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

export const links = [
  {
    title: "Properties",
    id: "/properties",
  },
  {
    title: "Contact Us",
    id: "/contact",
  },
  {
    title: "Add Property",
    id: "/add",
  },
  {
    title: "Login",
    id: "/login",
  },
];

export const companies = [
  {
    image: "/assets/prologis.png",
  },
  {
    image: "/assets/tower.png",
  },
  {
    image: "/assets/equinix.png",
  },
  {
    image: "/assets/realty.png",
  },
];

export const values = [
  {
    title: "Best interest rates on the market",
    icon: <IoShieldCheckmarkSharp />,
    current: "best",
  },
  {
    title: "Prevent unstable prices",
    icon: <TiDelete />,
    current: "prevent",
  },
  {
    title: "Best price on the market",
    icon: <MdBarChart />,
    current: "price",
  },
];

export const contacts = [
  {
    id: 1,
    title: "Call",
    logo: <BsFillTelephoneFill />,
    btn: "Call Now",
  },
  {
    id: 2,
    title: "Chat",
    logo: <AiFillMessage />,
    btn: "Chat Now",
  },
  {
    id: 3,
    title: "Video Call",
    logo: <AiFillMessage />,
    btn: "Video Call Now",
  },
  {
    id: 4,
    title: "Message",
    logo: <FaMessage />,
    btn: "Message Now",
  },
];

export const AddProp = [
  {
    title: "Location",
    description: "Address",
  },
  {
    title: "Images",
    description: "Upload",
  },
  {
    title: "Basics",
    description: "Details",
  },
  {
    title: "Facilities",
    description: "Select",
  },
];


export const linksUser = [
  { title: "favourites", id: "/favourites" },
  { title: "booking", id: "/booking" },
  { title: "logout", id: "" },
];