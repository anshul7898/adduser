import Card from "react-bootstrap/Card";
import classes from "./CancelTicket.module.css";
function CancelTicket() {
  let menuItems = [
    {
      id: 1,
      itemName: "TEA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://images.everydayhealth.com/images/drinking-tea-tied-to-lower-risk-t2d-1440x810.jpg",
      itemPrice: 40,
    },
    {
      id: 2,
      itemName: "COFFEE FILTER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.cookwithmanali.com/wp-content/uploads/2022/03/South-Indian-Filter-Coffee.jpg",
      itemPrice: 50,
    },
    {
      id: 3,
      itemName: "BOURNVITA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://bonavita.co/cdn/shop/articles/DSC_7643_9a3a28bd-2418-449e-ae93-e95fe0352edc_2888x.jpg?v=1689648268",
      itemPrice: 60,
    },
    {
      id: 4,
      itemName: "MASALA MILK",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://myheartbeets.com/wp-content/uploads/2022/02/masala-doodh-recipe.jpg",
      itemPrice: 60,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>HOT BEVERAGES</u></p>
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

export default CancelTicket;
