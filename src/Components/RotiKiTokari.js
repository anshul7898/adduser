import Card from "react-bootstrap/Card";
import classes from "./RotiKiTokari.module.css";
function RotiKiTokari() {
  let menuItems = [
    {
      id: 1,
      itemName: "CHAPPATI (ONLY AFTER NOON)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900",
      itemPrice: 20,
    },
    {
      id: 2,
      itemName: "BUTTER CHAPPATI (ONLY AFTER NOON)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://lh3.googleusercontent.com/kHPs9Lol8BVM49LlqrDaECM5wGGuVz4AV8vmiKNlwVoEPCqRu039S3oLcEFqU5PLhBuFmnAgvNI4UL6bd6mXoJf-xALX3xKRSKGL3D_t=w512-rw",
      itemPrice: 30,
    },
    {
      id: 3,
      itemName: "ROTI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Roti-Recipe-Indian-flatbread.jpg",
      itemPrice: 30,
    },
    {
      id: 4,
      itemName: "BUTTER ROTI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://familyneeds.co.in/cdn/shop/products/butterroti_600x600.jpg?v=1606651769",
      itemPrice: 40,
    },
    {
      id: 5,
      itemName: "NAAN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.toiimg.com/thumb/53338316.cms?width=1200&height=900",
      itemPrice: 50,
    },
    {
      id: 6,
      itemName: "KULCHA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/kulcha-recipe-1.jpg",
      itemPrice: 50,
    },
    {
      id: 7,
      itemName: "PARATHA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://foodess.com/wp-content/uploads/2023/10/paratha-5-2.jpg",
      itemPrice: 50,
    },
    {
      id: 8,
      itemName: "BUTTER NAAN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://foodess.com/wp-content/uploads/2023/02/Butter-Naan-3.jpg",
      itemPrice: 70,
    },
    {
      id: 9,
      itemName: "BUTTER KULCHA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.sanjanafeasts.co.uk/wp-content/uploads/2020/04/IMG_1194.jpg.webp",
      itemPrice: 70,
    },
    {
      id: 10,
      itemName: "BUTTER PARATHA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.cookwithnabeela.com/wp-content/uploads/2022/11/Paratha.webp",
      itemPrice: 70,
    },
    {
      id: 11,
      itemName: "STUFFED PARATHA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.kent.co.in/blog/wp-content/uploads/2018/11/Gobi-Paratha-1024x579.jpg",
      itemPrice: 100,
    },
    {
      id: 12,
      itemName: "STUFFED NAAN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.veganricha.com/wp-content/uploads/2022/01/Spinach-Potato-Stuffed-Naan-9620.jpg",
      itemPrice: 120,
    },
    {
      id: 13,
      itemName: "STUFFED KULCHA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.cookingcarnival.com/wp-content/uploads/2016/02/Amritsari-Kulcha-2.jpg",
      itemPrice: 120,
    },
    {
      id: 14,
      itemName: "ALOO PARATHA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://smithakalluraya.com/wp-content/uploads/2015/02/image.1024x1024-95.jpg",
      itemPrice: 120,
    },
    {
      id: 15,
      itemName: "STUFFED PANEER KULCHA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.cookingcarnival.com/wp-content/uploads/2015/07/Paneer-kulcha-4.jpg",
      itemPrice: 150,
    },
    {
      id: 16,
      itemName: "STUFFED PANEER PARATHA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cookwithrenu.com/wp-content/uploads/2019/08/Paneer-Paratha_3.jpg",
      itemPrice: 150,
    },
    {
      id: 17,
      itemName: "MISSI ROTI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.toiimg.com/thumb/54504896.cms?width=1200&height=900",
      itemPrice: 60,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>ROTI KI TOKARI</u></p>
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

export default RotiKiTokari;
