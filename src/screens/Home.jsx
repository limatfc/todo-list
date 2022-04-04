import logo from "../assets/images/logo.png";
import homeImage from "../assets/images/home.png";

export default function Home() {
  return (
    <div>
      <img
        src={logo}
        alt="The word IKEA written in blue inside a yellow circle, inside a blue rectangle"
      />
      <h1>IKEA Shopping List</h1>
      <img
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
      <button className="label">Add New Item</button>
    </div>
  );
}
