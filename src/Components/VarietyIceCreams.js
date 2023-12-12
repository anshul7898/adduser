import Card from "react-bootstrap/Card";
import classes from "./VarietyIceCreams.module.css";
function VarietyIceCreams() {
  let menuItems = [
    {
      id: 1,
      itemName: "GOLDEN CHERRY",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.sugarhero.com/wp-content/uploads/2016/04/lemon-sour-cherry-ice-cream-1.jpg",
      itemPrice: 220,
    },
    {
      id: 2,
      itemName: "RAJA-RANI",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://b.zmtcdn.com/data/reviews_photos/a6a/0a3fc326dc764f0834ddeab1335a3a6a_1533021677.jpg",
      itemPrice: 220,
    },
    {
      id: 3,
      itemName: "SILVER QUEEN",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://b.zmtcdn.com/data/reviews_photos/a02/cbca45bcaf34725264f635ffd8154a02_1506864174.jpg?fit=around|750:500&crop=750:500;*,*",
      itemPrice: 220,
    },
    {
      id: 4,
      itemName: "HONEY MOON SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipOD90dn7104X0oZMOFcAJAxdxmv7YD2YB3aP5QI=w1080-h608-p-no-v0",
      itemPrice: 220,
    },
    {
      id: 5,
      itemName: "PINEAPPLE MELBA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://s1-prod.lprs1.fr/images/contenu/recette/ananas-givre-a-la-noix-de-coco-1100002219_545x341.jpg",
      itemPrice: 220,
    },
    {
      id: 6,
      itemName: "BANANA SPLIT",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.prairiefarms.com/wp-content/uploads/files/2023/Dessert_BananaSplit.jpg",
      itemPrice: 250,
    },
    {
      id: 7,
      itemName: "GOLDEN KING",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://imgmedia.lbb.in/media/2022/11/63639a9883966f4be2dab6ca_1667472024939.png",
      itemPrice: 250,
    },
    {
      id: 8,
      itemName: "GADBAD SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://1.bp.blogspot.com/-4Q9h1xjHjzg/XyTeimsMDoI/AAAAAAACeas/WwRIubzpyxgzd4Y40M3s23qJzZGqPh49wCLcBGAsYHQ/s800/gadbad%2Bice%2Bcream.jpg",
      itemPrice: 250,
    },
    {
      id: 9,
      itemName: "MY FAVOURITE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/736x/37/78/d7/3778d7d1be1cffaad3b35da51680218f.jpg",
      itemPrice: 250,
    },
    {
      id: 10,
      itemName: "HOT CHOCOLATE FUDGE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cdn.tarladalal.com/members/9306/big/big_sizzling_brownie-15603.jpg",
      itemPrice: 250,
    },
    {
      id: 11,
      itemName: "LOVER'S SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://swadeshrestaurants.ca/wp-content/uploads/2020/05/013.jpg ",
      itemPrice: 250,
    },
    {
      id: 12,
      itemName: "TRAFFICE JAM",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/traffic-jam-sundae-thumbnail.jpg",
      itemPrice: 300,
    },
    {
      id: 13,
      itemName: "MADONNA",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/a2/5c/26/a25c267f206bd6160d50cba8b7ca6c01.jpg",
      itemPrice: 300,
    },
    {
      id: 14,
      itemName: "LITCHI WITH ICE CREAM",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://sinfullyspicy.com/wp-content/uploads/2023/07/1200-by-1200-images-3.jpg",
      itemPrice: 300,
    },
    {
      id: 15,
      itemName: "DRUNKEN MONKEY",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://cdn.shoplightspeed.com/shops/609431/files/52716610/the-jam-stand-drunken-monkey-jam.jpg",
      itemPrice: 250,
    },
    {
      id: 16,
      itemName: "MY DARLING",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://i.pinimg.com/originals/77/c3/26/77c3268b2637a35b4e25eafc293be11d.jpg",
      itemPrice: 300,
    },
    {
      id: 17,
      itemName: "SGS SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://c.ndtvimg.com/2020-07/cj1road8_ice-cream-sundae_625x300_23_July_20.jpg",
      itemPrice: 250,
    },
    {
      id: 18,
      itemName: "BUTTER SCOTCH FUDGE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://www.theflavorbender.com/wp-content/uploads/2019/07/Butterscotch-cookie-dough-ice-cream-2080-780x1169.jpg",
      itemPrice: 300,
    },
    {
      id: 19,
      itemName: "ANAMIKA SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipPJTJLMsVwDjWgOQmPqETtYnsCWHnq5PBDrnmbn=w1080-h608-p-no-v0",
      itemPrice: 300,
    },
    {
      id: 20,
      itemName: "NARGIS SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCCqp_Z9WWGAHK_1ArWBqOiJOxiEBF2WK5Vh6sSULliqHbfnFYP2puxuFEsuVQHjAEqc&usqp=CAU",
      itemPrice: 250,
    },
    {
      id: 21,
      itemName: "WORLD-CUP SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2jWwUVkSYJL9frSY2f41WsJVWFCOoCzZSDl-MB9rxZVpkwM2JoBDlb-s6T9HJgGaFJc&usqp=CAU",
      itemPrice: 300,
    },
    {
      id: 22,
      itemName: "KAJU PISTA SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://5.imimg.com/data5/TP/KT/MY-9134447/pista-ice-cream.jpg",
      itemPrice: 300,
    },
    {
      id: 23,
      itemName: "BIRTH-DAY SPL",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV3MwhyyySM_BAwUNQLMtbkSYVHJ1Qgb1NuS7bIWZTjC41TszEBpLM8JC7gZX5bn9C3Q&usqp=CAU",
      itemPrice: 300,
    },
    {
      id: 24,
      itemName: "LOVER'S PARADISE",
      itemDescription:
        "Masala Dosa, also called Masale dosey, is a South Indian dish. It is a type of dosa and has its origin in the town of Udupi in Karnataka.",
      itemImageUrl:
        "https://parveenmatharudotcom.files.wordpress.com/2016/04/img_5740.jpg?w=308&h=411",
      itemPrice: 320,
    },
  ];
  return (
    <div>
      <p className={classes.textMenu}>
        <u>VARIETY ICE CREAMS</u>
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

export default VarietyIceCreams;
