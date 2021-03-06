import logo from "../assets/images/logo.png";
import homeImage from "../assets/images/home.png";
import "../styles/screens/Home.css";

export default function Home({ toggleModal }) {
  return (
    <div className="home-wrapper">
      <img
        className="logo"
        src={logo}
        alt="The word IKEA written in blue inside a yellow circle, inside a blue rectangle"
      />
      <h1>Shopping List</h1>
      <img
        className="welcome-image"
        src={homeImage}
        alt="A woman wearing blue blazer, t-shit and pants sit in a shopping cart"
      />
      <p>
        Welcome to EIKA's shopping list. Here you will be able to create a todo
        list with the furniture you want to buy.
      </p>
      <p>
        To get started, press the Add New Item button and a popup will ask you
        the name and the price of the item you want to add. You can also add an
        image after the item is added by touching the image icon.
      </p>
      <button onClick={toggleModal} className="label primary">
        Add Item
      </button>
    </div>
  );
}
