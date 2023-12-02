import Card from "react-bootstrap/Card";
import classes from "./AddUser.module.css";
function AddUser() {
  let menuItems = [
    {
      id: 1,
      itemName: "UPMA (DESI GHEE)",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.theloveofspice.com/wp-content/uploads/2022/08/rava-upma.jpg",
      itemPrice: 120,
    },
    {
      id: 2,
      itemName: "SHIRA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://img.freepik.com/premium-photo/pineapple-sheera-halwa-also-known-as-ananas-keshri-shira-popular-south-indian-dessert-recipe-selective-focus_466689-42174.jpg",
      itemPrice: 120,
    },
    {
      id: 3,
      itemName: "IDLI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.kannammacooks.com/wp-content/uploads/IMG_E8866-scaled.jpg",
      itemPrice: 110,
    },
    {
      id: 4,
      itemName: "BUTTER IDLI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/xnvswfdt/40eefbc2-ac22-48cb-b63f-864ff44c877a.jpg",
      itemPrice: 130,
    },
    {
      id: 5,
      itemName: "IDLI-VADA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.dosacoffee.com/cdn/shop/products/image_1a3c238e-48ae-4981-ad4f-02facd15afb1_1072x.jpg?v=1669754810",
      itemPrice: 120,
    },
    {
      id: 6,
      itemName: "VADA SAMBHAR",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://vegecravings.com/wp-content/uploads/2018/02/Medu-Vada-Recipe-Step-By-Step-Instructions.jpg",
      itemPrice: 130,
    },
    {
      id: 7,
      itemName: "DOSA PLAIN BUTTER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i0.wp.com/www.nandanmsd.com/wp-content/uploads/2020/08/Butter-Paper-Masala-Dosa-1.jpg?fit=1920%2C1080&ssl=1",
      itemPrice: 130,
    },
    {
      id: 8,
      itemName: "DOSA MYSORE PLAIN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2013/05/mysore-masala-dosa-recipe-2.jpg",
      itemPrice: 140,
    },
    {
      id: 9,
      itemName: "DOSA SPL-BANGLORE PLAIN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://curlytales.com/wp-content/uploads/2017/09/1490611892-spl-masala-dosa-e1504702802658.jpg",
      itemPrice: 140,
    },
    {
      id: 10,
      itemName: "DOSA BUTTER PLAIN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2013/05/mysore-masala-dosa-recipe-2.jpg",
      itemPrice: 140,
    },
    {
      id: 11,
      itemName: "DOSA MASALA BUTTER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://thumbs.dreamstime.com/b/butter-masala-dosa-south-indian-traditional-popular-crepe-filling-mixture-mashed-potatoes-fried-onions-topping-223997600.jpg",
      itemPrice: 140,
    },
    {
      id: 12,
      itemName: "DOSA GHEE PLAIN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.dosacoffee.com/cdn/shop/products/PlainGheeRoastDosa_1072x.jpg?v=1592735824",
      itemPrice: 140,
    },
    {
      id: 13,
      itemName: "DOSA PANEER PLAIN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://thespicepaletteus.com/wp-content/uploads/2021/07/paneer-dosa.jpg",
      itemPrice: 140,
    },
    {
      id: 14,
      itemName: "DOSA BUTTER RAWA PLAIN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://apollosugar.com/wp-content/uploads/2018/12/Rava-Dosa.jpg",
      itemPrice: 140,
    },
    {
      id: 15,
      itemName: "DOSA CHEESE PLAIN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://infydelivery.com/wp-content/uploads/2022/02/cheese-plain-dosa.jpg",
      itemPrice: 140,
    },
    {
      id: 16,
      itemName: "DOSA BUTTER RAWA ONION PLAIN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.tomatoblues.com/wp-content/uploads/2012/02/rava-onion-dosa-1-scaled.jpg",
      itemPrice: 140,
    },
    {
      id: 17,
      itemName: "DOSA BUTTER RAWA ONION MASALA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2014/04/onion-rava-dosa-recipe-1-1-500x500.jpg",
      itemPrice: 140,
    },
    {
      id: 18,
      itemName: "UTTAPAM PLAIN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.dosacoffee.com/cdn/shop/products/Plain_Uttapam.jpg?v=1597176442",
      itemPrice: 140,
    },
    {
      id: 19,
      itemName: "UTTAPAM ONION",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://sherebengal.com/wp-content/uploads/2017/09/Onion-uttapam.jpg",
      itemPrice: 140,
    },
    {
      id: 20,
      itemName: "UTTAPAM TOMATO",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Jyothi_Rajesh/Tomato_Uttapam.jpg",
      itemPrice: 140,
    },
    {
      id: 21,
      itemName: "UTTAPAM MIX",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/kitchennandoos/vegetable_uttapam_.jpg",
      itemPrice: 140,
    },
    {
      id: 22,
      itemName: "UTTAPAM PANEER",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://static.toiimg.com/thumb/62777117.cms?width=1200&height=900",
      itemPrice: 140,
    },
    {
      id: 23,
      itemName: "SGS SPL.DOSA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://selfiefamily.com/wp-content/uploads/2021/03/Special-Masal-Dosa-Sri-Vishnu-Bhavan-e1616383872635.jpg",
      itemPrice: 140,
    },
    {
      id: 24,
      itemName: "EXTRA GHEE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ewvnNqirKdhOQN9pTBjJi2g-Zk8_FES04g&usqp=CAU",
      itemPrice: 140,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}><u>SOUTH INDIAN</u></p>
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

export default AddUser;
