import Card from "react-bootstrap/Card";
import classes from "./KidsSpecial.module.css";
function KidsSpecial() {
  let menuItems = [
    {
      id: 1,
      itemName: "SPIDER-MAN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cdn.trendhunterstatic.com/phpthumbnails/237/237120/237120_2_600.jpeg?auto=webp",
      itemPrice: 160,
    },
    {
      id: 2,
      itemName: "JUNGLE BOOK",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.4theloveoffoodblog.com/wp-content/uploads/2016/04/IMG_6213-1024x682.jpg",
      itemPrice: 160,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>KIDS - SPECIAL</u></p>
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

export default KidsSpecial;
