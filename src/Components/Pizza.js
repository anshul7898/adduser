import Card from "react-bootstrap/Card";
import classes from "./Pizza.module.css";
function Pizza() {
  let menuItems = [
    {
      id: 1,
      itemName: "VEGETABLE CHEESE PIZZA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/Gralic_Crust_Veggie_Pizza.jpg",
      itemPrice: 250,
    },
    {
      id: 2,
      itemName: "ONION CHEESE PIZZA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-onion-capsicum-pan-personal.dad788ecbd3fcc57366462827e31ee05.1.jpg",
      itemPrice: 250,
    },
    {
      id: 3,
      itemName: "TOMATO CHEESE PIZZA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://recipesblob.oetker.in/assets/89398df9d59d4a4795357ed8228c04bb/1272x764/cheese-burst-pizza.webp",
      itemPrice: 250,
    },
    {
      id: 4,
      itemName: "MUSHROOM CHEESE PIZZA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.foodandwine.com/thmb/PmI6lqEMeIV1PWWnQZ53xWO_kQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2012-r-xl-mushroom-zucchini-and-swiss-cheese-pizza-2000-118e510b87104d03a7b32f7fd9a60ed6.jpg",
      itemPrice: 280,
    },
    {
      id: 5,
      itemName: "PANEER CHEESE PIZZA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.toiimg.com/thumb/54699659.cms?imgsize=2071173&width=800&height=800",
      itemPrice: 280,
    },
    {
        id: 6,
        itemName: "MONALISA PIZZA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.yorkdispatch.com/gcdn/presto/2020/05/23/PPYD/f8d9d557-bcdc-492e-93d8-abe1ad81631d-divino_5.jpg",
        itemPrice: 300,
      },
      {
        id: 7,
        itemName: "TIA-TA-PIZZA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://content.jdmagicbox.com/comp/goa/n5/0832px832.x832.180820203635.b2n5/catalogue/da-tita-majorda-goa-qulicudkkn.jpg?clr=",
        itemPrice: 320,
      },
      {
        id: 8,
        itemName: "TANDOORI PIZZA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://thefoodiephysician.com/wp-content/uploads/2012/06/tandoori-chicken-pizza-copy.jpg",
        itemPrice: 350,
      },
      {
        id: 9,
        itemName: "CORN CHEESE PIZZA",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/cheese_corn_pizza_zdish.png",
        itemPrice: 320,
      },
      {
        id: 10,
        itemName: "EXTRA CHEESE",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://sherebengal.com/wp-content/uploads/2017/09/Extra-cheese.jpg",
        itemPrice: 80,
      },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>PIZZA</u></p>
      {menuItems.map((menuItems) => (
        <Card className={classes.input}>
          <Card.Img
            className={classes.image}
            variant="top"
            src={menuItems.itemImageUrl}
          />
          <Card.Body>
            <Card.Title>{menuItems.itemName} - ₹ {menuItems.itemPrice}/-</Card.Title>
            {/* <Card.Text>{menuItems.itemDescription}</Card.Text> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Pizza;