import Card from "react-bootstrap/Card";
import classes from "./RiceVariety.module.css";
function RiceVariety() {
  let menuItems = [
    {
      id: 1,
      itemName: "TRIPPLE SCHEZWAN RICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://ranveerbrar.com/wp-content/uploads/2021/02/Triple-Schezwan-Rice-scaled.jpg",
      itemPrice: 350,
    },
    {
      id: 2,
      itemName: "VEG. FRIED RICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg",
      itemPrice: 250,
    },
    {
      id: 3,
      itemName: "MUSHROOM FRIED RICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://shwetainthekitchen.com/wp-content/uploads/2020/12/Spicy-Mushroom-Fried-Rice.jpg",
      itemPrice: 280,
    },
    {
      id: 4,
      itemName: "PANEER FRIED RICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-fried-rice-recipe.jpg",
      itemPrice: 280,
    },
    {
      id: 5,
      itemName: "VEG. SCHEZWAN FRIED RICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://vegecravings.com/wp-content/uploads/2018/03/Veg-Schezwan-Fried-Rice-Recipe-Step-By-Step-Instructions.jpg",
      itemPrice: 280,
    },
    {
        id: 6,
        itemName: "MIX FIRED RICE (VEG.)",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.ruchikrandhap.com/wp-content/uploads/2018/03/Mixed-Vegetable-Fried-Rice-2-1.jpg",
        itemPrice: 300,
      },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>RICE VARIETY</u></p>
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

export default RiceVariety;
