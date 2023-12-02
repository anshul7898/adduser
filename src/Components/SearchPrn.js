import Card from "react-bootstrap/Card";
import classes from "./SearchPrn.module.css";
function SearchPrn() {
  let menuItems = [
    {
      id: 1,
      itemName: "MINI MEALS (LIMITED)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.vecteezy.com/system/resources/previews/016/282/458/non_2x/north-indian-mini-meal-parcel-platter-or-combo-thali-with-paneer-butter-masala-roti-dal-and-rice-free-photo.jpg",
      itemPrice: 190,
    },
    {
      id: 2,
      itemName: "SPECIAL LUNCH (LIMITED)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://5.imimg.com/data5/HW/II/SH/SELLER-9770898/veg-thali-500x500.jpg",
      itemPrice: 240,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>THALI</u></p>
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

export default SearchPrn;
