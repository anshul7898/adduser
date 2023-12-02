import Card from "react-bootstrap/Card";
import classes from "./BookingList.module.css";
function BookingList() {
  let menuItems = [
    {
      id: 1,
      itemName: "SAMBHAR SAMOSA (2Pcs)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://img.freepik.com/premium-photo/south-indian-sambar-samosa-chutney-it-s-fusion-food-which-sambhar-is-from-south-samosas-are-from-north-india_466689-1394.jpg",
      itemPrice: 60,
    },
    {
      id: 2,
      itemName: "DAHI SAMOSA (2Pcs)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://img-global.cpcdn.com/recipes/371e1a00a031234b/1200x630cq70/photo.jpg",
      itemPrice: 100,
    },
    {
      id: 3,
      itemName: "CHHOLE SAMOSA (2Pcs)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.ytimg.com/vi/-uSSAjqzApQ/sddefault.jpg",
      itemPrice: 100,
    },
    {
      id: 4,
      itemName: "FRENCH FRIES",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/french-fries-recipe.jpg",
      itemPrice: 130,
    },
    {
      id: 5,
      itemName: "CHHOLE BHATURE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://img-global.cpcdn.com/recipes/1d9ce5d3344e6a34/1200x630cq70/photo.jpg",
      itemPrice: 150,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>NORTH INDIAN CHAT</u></p>
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

export default BookingList;
