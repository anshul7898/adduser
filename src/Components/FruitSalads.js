import Card from "react-bootstrap/Card";
import classes from "./FruitSalads.module.css";
function FruitSalads() {
  let menuItems = [
    {
      id: 1,
      itemName: "FRUIT SALAD PLAIN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://dinnerthendessert.com/wp-content/uploads/2019/03/Fruit-Salad-2.jpg",
      itemPrice: 110,
    },
    {
      id: 2,
      itemName: "FRUIT SALAD WITH ICE CREAM",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://shwetainthekitchen.com/wp-content/uploads/2021/08/Fruit-Salad-with-Condensed-Milk.jpg",
      itemPrice: 140,
    },
    {
      id: 3,
      itemName: "FRUIT SALAD WITH JELLY+I.C",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://pbs.twimg.com/media/CfbXxcyVIAAckMu.jpg",
      itemPrice: 160,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>FRUIT SALADS</u></p>
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

export default FruitSalads;
