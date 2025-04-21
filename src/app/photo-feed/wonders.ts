import pic1 from "./photos/pic1.jpg";
import pic2 from "./photos/pic2.jpg";
import pic3 from "./photos/pic3.jpg";
import pic4 from "./photos/pic4.jpg";
import pic5 from "./photos/pic5.jpg";
import pic6 from "./photos/pic6.jpg";
import pic7 from "./photos/pic7.jpg";
import pic8 from "./photos/pic8.jpg";
import pic9 from "./photos/pic9.jpg";
import pic10 from "./photos/pic10.jpg";

// Type definition (if not already defined)
type WonderImage = {
  id: string;
  name: string;
  src: string;
  photographer: string;
  location: string;
};

const PHOTOGRAPHER_CREDIT = "Photo by Max van den Oetelaar on Unsplash";

const wondersImages: WonderImage[] = [
  {
    id: "pic1",
    name: "Ajanta Ellora Caves",
    src: pic1,
    photographer: PHOTOGRAPHER_CREDIT,
    location: "Maharashtra",
  },
  {
    id: "pic2",
    name: "Brihadeeswarar Temple",
    src: pic2,
    photographer: PHOTOGRAPHER_CREDIT,
    location: "Thanjavur",
  },
  {
    id: "pic3",
    name: "Mysore Palace",
    src: pic3,
    photographer: PHOTOGRAPHER_CREDIT,
    location: "Karnataka",
  },
  {
    id: "pic4",
    name: "Qutub Minar",
    src: pic4,
    photographer: PHOTOGRAPHER_CREDIT,
    location: "Delhi",
  },
  {
    id: "pic5",
    name: "Gateway of India",
    src: pic5,
    photographer: PHOTOGRAPHER_CREDIT,
    location: "Mumbai",
  },
  {
    id: "pic6",
    name: "Hawa Mahal",
    src: pic6,
    photographer: PHOTOGRAPHER_CREDIT,
    location: "Jaipur, Rajasthan",
  },
  {
    id: "pic7",
    name: "India Gate",
    src: pic7,
    photographer: PHOTOGRAPHER_CREDIT,
    location: "New Delhi",
  },
  {
    id: "pic8",
    name: "Chhatrapati Shivaji Terminus",
    src: pic8,
    photographer: PHOTOGRAPHER_CREDIT,
    location: "Mumbai",
  },
  {
    id: "pic9",
    name: "Taj Mahal",
    src: pic9,
    photographer: PHOTOGRAPHER_CREDIT,
    location: "Agra",
  },
  {
    id: "pic10",
    name: "Victoria Memorial",
    src: pic10,
    photographer: PHOTOGRAPHER_CREDIT,
    location: "Kolkata",
  },
];

export default wondersImages;
