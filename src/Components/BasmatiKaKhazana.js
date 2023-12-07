import Card from "react-bootstrap/Card";
import classes from "./BasmatiKaKhazana.module.css";
function BasmatiKaKhazana() {
  let menuItems = [
    {
      id: 1,
      itemName: "STEAM RICE (HALF)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://rroshashala.com/wp-content/uploads/2022/09/cooked-plain-white-basmati-rice-steamed-rice-bowl-2-min-min-scaled.jpg",
      itemPrice: 110,
    },
    {
      id: 2,
      itemName: "JEERA RICE (HALF)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/jeera-rice-recipe.jpg",
      itemPrice: 130,
    },
    {
      id: 3,
      itemName: "STEAM RICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://rroshashala.com/wp-content/uploads/2022/09/cooked-plain-white-basmati-rice-steamed-rice-bowl-2-min-min-scaled.jpg",
      itemPrice: 200,
    },
    {
      id: 4,
      itemName: "JEERA RICE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/jeera-rice-recipe.jpg",
      itemPrice: 230,
    },
    {
      id: 5,
      itemName: "VEGETABLE PULAV",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianveggiedelight.com/wp-content/uploads/2019/07/veg-pulao-featured.jpg",
      itemPrice: 250,
    },
    {
      id: 6,
      itemName: "CURD RICE / KHICHADI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://nasiktiffins.com/wp-content/uploads/2021/01/Panchratna-Dal-Khichdi.jpg.webp",
      itemPrice: 250,
    },
    {
      id: 7,
      itemName: "VEG. BIRYANI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://vegecravings.com/wp-content/uploads/2016/07/veg-biryani-recipe-step-by-step-instructions.jpg",
      itemPrice: 270,
    },
    {
      id: 8,
      itemName: "PANEER PULAV",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.whiskaffair.com/wp-content/uploads/2019/08/Paneer-Pulao-1-3.jpg",
      itemPrice: 280,
    },
    {
      id: 9,
      itemName: "PANEER VEG BIRYANI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-biryani-recipe.jpg",
      itemPrice: 300,
    },
    {
      id: 10,
      itemName: "PANEER BIRYANI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.tomatoblues.com/wp-content/uploads/2022/09/paneer-biryani-1.jpg",
      itemPrice: 320,
    },
    {
      id: 11,
      itemName: "HANDI BIRYANI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://kannanskitchen.com/wp-content/uploads/2021/04/DSC_1079_1.jpg",
      itemPrice: 300,
    },
    {
      id: 12,
      itemName: "KASHMIRI PULAV",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://sagarkitchen.com/wp-content/uploads/2023/09/Kashmiri-pulao-recipe-Kashmiri-biryani-Dry-fruits-biryani-Kashmiri-rice-pilaf-recipe-by-sagar-kitchen.webp",
      itemPrice: 350,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>BASMATI KA KHAZANA</u></p>
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

export default BasmatiKaKhazana;
