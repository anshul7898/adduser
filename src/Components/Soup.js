import Card from "react-bootstrap/Card";
import classes from "./Soup.module.css";
function Soup() {
  let menuItems = [
    {
      id: 1,
      itemName: "CREAM OF TOMATO",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://geekrobocook.com/wp-content/uploads/2021/03/1.-Cream-of-Tomato-Soup.jpg",
      itemPrice: 160,
    },
    {
      id: 2,
      itemName: "SWEET CORN SOUP",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.toiimg.com/thumb/88198991.cms?width=1200&height=900",
      itemPrice: 170,
    },
    {
      id: 3,
      itemName: "HOT AND SOUR SOUP",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://masalachilli.com/wp-content/uploads/2021/07/Hot-and-Sour-Soup-3.jpg",
      itemPrice: 170,
    },
    {
      id: 4,
      itemName: "VEG. CLEAR SOUP",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://shirleycooking.com/wp-content/uploads/2020/11/vegetable-soup-web.jpg",
      itemPrice: 180,
    },
    {
      id: 5,
      itemName: "MANCHOW SOUP",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://myfoodstory.com/wp-content/uploads/2016/07/Chicken-Manchow-Soup-2.jpg",
      itemPrice: 180,
    },
    {
        id: 6,
        itemName: "TOM YUM SOUP",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://spicecravings.com/wp-content/uploads/2022/03/Tom-Yum-Soup-Featured-2.jpg",
        itemPrice: 180,
      },
      {
        id: 7,
        itemName: "MUSHROOM SOUP",
        itemDescription:
          "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
        itemImageUrl:
          "https://www.sharmispassions.com/wp-content/uploads/2014/11/MushroomSoup5.jpg",
        itemPrice: 200,
      },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>SOUP</u></p>
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

export default Soup;
