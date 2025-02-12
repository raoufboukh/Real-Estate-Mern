import { AiFillMessage } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

export const links = [
  {
    title: "Properties",
    id: "properties",
  },
  {
    title: "Contact Us",
    id: "contact",
  },
  {
    title: "Add Property",
    id: "add",
  },
  {
    title: "Login",
    id: "login",
  },
];

export const residencies = [
  {
    id: 1,
    name: "Aliva Priva Jardin",
    image: "/assets/r1.png",
    description:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    country: "Indonesia",
    city: "Jakarta",
    address:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    bedrooms: 5,
    parkings: 2,
    bathrooms: 3,
    price: "47,043",
  },
  {
    id: 2,
    name: "Assati Garden City",
    image: "/assets/r2.png",
    description:
      "Pahlawan Street XVII NO.215, Cinangka, Sawangan, Depok, Jawa Barat",
    country: "Indonesia",
    city: "Depok",
    address:
      "Pahlawan Street XVII NO.215, Cinangka, Sawangan, Depok, Jawa Barat",
    bedrooms: 7,
    parkings: 3,
    bathrooms: 4,
    price: "66,353",
  },
  {
    id: 3,
    name: "Citralan Puri Serang",
    image: "/assets/r3.png",
    description:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    country: "Indonesia",
    city: "Serang",
    address:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    bedrooms: 4,
    parkings: 1,
    bathrooms: 2,
    price: "35,853",
  },
  {
    id: 4,
    name: "Aliva Priva Jardin",
    image: "/assets/r1.png",
    description:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    country: "Indonesia",
    city: "Jakarta",
    address:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    bedrooms: 5,
    parkings: 2,
    bathrooms: 3,
    price: "47,043",
  },
  {
    id: 5,
    name: "Assati Garden City",
    image: "/assets/r2.png",
    description:
      "Pahlawan Street XVII NO.215, Cinangka, Sawangan, Depok, Jawa Barat",
    country: "Indonesia",
    city: "Depok",
    address:
      "Pahlawan Street XVII NO.215, Cinangka, Sawangan, Depok, Jawa Barat",
    bedrooms: 7,
    parkings: 3,
    bathrooms: 4,
    price: "66,353",
  },
  {
    id: 6,
    name: "Citralan Puri Serang",
    image: "/assets/r3.png",
    description:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    price: "35,853",
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