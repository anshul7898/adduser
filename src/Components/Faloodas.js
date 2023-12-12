import Card from "react-bootstrap/Card";
import classes from "./Faloodas.module.css";
function Faloodas() {
  let menuItems = [
    {
      id: 1,
      itemName: "ROSE FALOODA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.sharmispassions.com/wp-content/uploads/2016/06/26841626704_a55ae50c86_o.jpg",
      itemPrice: 150,
    },
    {
      id: 2,
      itemName: "ROYAL FALOODA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cookingfromheart.com/wp-content/uploads/2022/04/Royal-Falooda-3.jpg",
      itemPrice: 150,
    },
    {
      id: 3,
      itemName: "KESARI FALOODA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.punjabkesari.in/multimedia/12_51_142952572rab.jpg",
      itemPrice: 170,
    },
    {
      id: 4,
      itemName: "SPECIAL FALOODA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/1d/32/f9/1d32f9ced5d4686f319cf5e60e8e499c.jpg",
      itemPrice: 180,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}>
        <u>FALOODAS</u>
      </p>
      {menuItems.map((menuItems) => (
        <Card className={classes.input}>
          <Card.Img
            className={classes.image}
            variant="top"
            src={menuItems.itemImageUrl}
          />
          <Card.Body>
            <Card.Title>
              {menuItems.itemName} - ₹ {menuItems.itemPrice}/-
            </Card.Title>
            {/* <Card.Text>{menuItems.itemDescription}</Card.Text> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Faloodas;
