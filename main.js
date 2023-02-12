const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector("#cards-container");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const productDetailContainer = document.querySelector("#productDetail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
}
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside(){
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isProductDetailClosed){
        productDetailContainer.classList.add("inactive")
    }
    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Kotobukiya Dark Magician Girl",
    price: "420.000",
    image: "https://http2.mlstatic.com/D_NQ_NP_956670-MCO49800047361_042022-O.webp",
})
productList.push({
    name: "Pokémon Gallery Allolan Vulpix",
    price: "75.000",
    image: "https://http2.mlstatic.com/D_NQ_NP_965709-MCO49800046605_042022-O.webp",
})
productList.push({
    name: "Pokémon Gallery Pikachu Thunderbolt",
    price: "75.000",
    image: "https://http2.mlstatic.com/D_NQ_NP_623090-MCO49800046437_042022-O.webp",
})
productList.push({
    name: "Funko Pop Nobara Kugisaki",
    price: "130.000",
    image: "https://cdn.shopify.com/s/files/1/0611/6995/9149/products/obara-kugisaki-Funko-Pop.png?v=1672366047",
})
productList.push({
    name: "Funko Pop Wonder Woman Cel Shading",
    price: "100.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1265956/Wonder_Woman_Vinyl_Art_Toys_544285e6-e625-4065-b9f3-ecaa5d4c3eb0.png",
})
productList.push({
    name: "Funko Pop Spiderman Oscorp Suit",
    price: " Agotado",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1231517/Spider-Man_Oscorp_Suit_Vinyl_Art_Toys_79629bef-04e3-4432-979d-7f912cd751f1.png",
})
productList.push({
    name: "Funko Pop Hades With Chess Board",
    price: " Agotado",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1151458/Hades_with_Chess_Board_Vinyl_Art_Toys_5dfc184a-4e69-4d11-93a3-875ec5e9a0d3.png",
})
productList.push({
    name: "Funko Pop Groot Fall Convention 2022",
    price: "95.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1232360/Groot_Vinyl_Art_Toys_bf7f9ae4-ffba-4642-af63-659899a1177b.png",
})
productList.push({
    name: "Funko Pop Yuji Itadori Fall Convention 2022",
    price: "110.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1232683/Yuji_Itadori_Vinyl_Art_Toys_8663a0fa-968d-4edd-b76d-c1c70efd4aa3.png",
})
productList.push({
    name: "Funko Pop Star Sapphire Fall Convention 2022",
    price: "150.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1232499/Star_Sapphire_Vinyl_Art_Toys_57ebaa56-c86f-4257-b800-050bacaca43e.png",
})
productList.push({
    name: "Funko Pop Emperor (The Joker) Fall Convention 2022",
    price: " Agotado",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1232538/Emperor_%2528The_Joker%2529_Vinyl_Art_Toys_bf7e7179-f8d9-4bd7-9ba3-6f637ea5675e.png",
})
productList.push({
    name: "Funko Pop Roger Rabbit Fall Convention 2022",
    price: " Agotado",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1232175/Roger_Rabbit_Vinyl_Art_Toys_e60f50c1-d00a-4b55-ad9b-ed2f37c1bd32.png",
})
productList.push({
    name: "Funko Pop Poison Ivy Batman & Robin",
    price: "140.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/779509/Poison_Ivy_%2528Batman_and_Robin%2529_Vinyl_Art_Toys_896bcd65-d8a2-4d37-8ec4-aaab76e3a0b9.jpg",
})
productList.push({
    name: "Funko Pop Whis Eating Noodles",
    price: "120.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1144935/Whis_%2528Eating_Noodles%2529_Vinyl_Art_Toys_9b47ae0a-2c66-49c4-8bf0-c0b5046391c3.png",
})
productList.push({
    name: "Funko Pop Yuji Itadori Summer Convention 2022",
    price: "150.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1199858/Yugi_Itadori_with_Slaughter_Demon_Vinyl_Art_Toys_45e64f60-4d78-4953-8601-afafef836091.jpeg",
})
productList.push({
    name: "Funko Pop Starfire Summer Convention 2022",
    price: "130.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1167014/Starfire_Vinyl_Art_Toys_7b2c8b75-4c8d-4fac-b6cd-2c43c9b3e848.png",
})
productList.push({
    name: "Funko Pop Boba Fett",
    price: "125.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/971368/Boba_Fett_%2528Retro%2529__Vinyl_Art_Toys_3a28daea-c681-4255-adc8-d53822f3b6d9.JPG",
})
productList.push({
    name: "Funko Pop Silent Swordman LV0",
    price: "85.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1030248/Silent_Swordsman_LV0_Vinyl_Art_Toys_fc465a30-058a-41ee-9cd5-3a2440fbbb4f.png",
})
productList.push({
    name: "Funko Pop Boba Fett ECCC 2020",
    price: "200.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/780581/Boba_Fett_%2528Futura_Black%2529_%255BSpring_Convention%255D_Vinyl_Art_Toys_04c50cd2-5906-45fe-af36-5223409ba8ac.jpg",
})
productList.push({
    name: "Funko Pop Mr. Freeze Summer Convention 2020",
    price: "150.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/830165/Mr._Freeze_Batman_and_Robin_%2528Glitter%2529_%255BSummer_Convention%255D_Vinyl_Art_Toys_01d75ab3-0fca-407f-8035-ae9d0c9de38f.JPG",
})
productList.push({
    name: "Funko Pop Sigmund Summer Convention 2019",
    price: "110.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/737495/Sigmund_%255BSummer_Convention%255D_Vinyl_Art_Toys_9697e0c0-6686-40bc-9f53-be446c5aed73.jpg",
})
productList.push({
    name: "Funko Pop Doctor Doom ECCC 2020",
    price: "130.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/780582/Doctor_Doom_%2528God_Emperor%2529_%255BSpring_Convention%255D_Vinyl_Art_Toys_713b151d-ca74-4a7f-a422-624d85855188.jpg",
})
productList.push({
    name: "Funko Pop Tanjiro Kamado Hinokami Kagura Dance",
    price: "125.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/968779/Tanjiro_Kamado_%2528Hinokami_Kagura_Dance%2529_Vinyl_Art_Toys_90dc4aa6-e6fc-4577-9924-c7e53f9947e1.JPG",
})
productList.push({
    name: "Funko Pop Ms. Marvel (First Appearance Fall Convention 2019",
    price: "90.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/749912/Ms._Marvel_%2528First_Appearance%2529_%255BFall_Convention%255D_Vinyl_Art_Toys_9823894d-4827-4b26-af3e-364f1a8e8d3e.jpg",
})
productList.push({
    name: "Funko Pop Shanks",
    price: " Agotado",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/961948/Shanks_Vinyl_Art_Toys_b4ee347c-08d6-4ea8-b3e4-aaaadf4f5366.JPG",
})
productList.push({
    name: "Funko Pop Percival Graves",
    price: "50.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/463116/Percival_Graves_Vinyl_Art_Toys_55114644-8ee0-425b-9a71-3983c9502687.jpg",
})
productList.push({
    name: "Funko Pop Fin Du Chomp Orange",
    price: "85.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/736231/Fin_Du_Chomp_%2528Orange%2529_Vinyl_Art_Toys_1cd8f8e4-89a7-47c4-a124-8429b2cfb64c.jpg",
})
productList.push({
    name: "Funko Pop Leorio",
    price: " Agotado",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/778292/Leorio_Vinyl_Art_Toys_0464d0b3-6e61-4805-b544-2f76eb5b6dcb.jpg",
})
productList.push({
    name: "Funko Pop Alien as Zurg",
    price: "55.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/832246/Zurg_%2528Alien_Remix%2529_Vinyl_Art_Toys_f4c92b0f-db3f-4782-80bd-9ea3275ecb5e.JPG",
})
productList.push({
    name: "Funko Pop Steve Aoki Summer Convention 2020",
    price: "110.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/869879/Steve_Aoki_%255BSummer_Convention%255D_Vinyl_Art_Toys_d7bb52ec-7455-4bfa-8136-1a472d86d121.JPG",
})
productList.push({
    name: "Funko Pop Wallace Wells Summer Convention 2020",
    price: "120.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/830446/Wallace_Wells_%255BSummer_Convention%255D_Vinyl_Art_Toys_542c5211-1bd6-4340-aaa3-68bb39a92859.JPG",
})
productList.push({
    name: "Funko Pop Whis Glow in the Dark",
    price: "100.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/795091/Whis_%2528Glow_in_the_Dark%2529_Vinyl_Art_Toys_64e4f927-1596-4b83-a7b2-65c23a0e3424.JPG",
})
productList.push({
    name: "Funko Pop Pietro Maximoff",
    price: "110.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/911310/Pietro_Maximoff_Vinyl_Art_Toys_4798a7eb-63ec-4d76-bc0b-e7717d804371.JPG",
})
productList.push({
    name: "Funko Pop Steve Irwin with Snake",
    price: "90.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/775778/Steve_Irwin_%2528with_Snake%2529_Vinyl_Art_Toys_1e1e5f5a-c63d-4017-a7e0-d0d54a1a251b.jpg",
})
productList.push({
    name: "Funko Pop Harry Potter Summer Convention 2020",
    price: "110.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/830443/Harry_Potter_%2528World_Cup%2529_%255BSummer_Convention%255D_Vinyl_Art_Toys_bc9f8fc6-72ab-429b-8273-1651bfdc739d.JPG",
})
productList.push({
    name: "Funko Pop Alien as Russell",
    price: "55.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/832255/Russell_%2528Remix%2529_Vinyl_Art_Toys_4b8aa67c-a84d-4273-827f-256b3041ec52.JPG",
})
productList.push({
    name: "Funko Pop Stan Lee Fall Convention 2019",
    price: "110.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/750059/Stan_Lee_%2528Guardians_of_the_Galaxy_Vol._2%2529_%255BFall_Convention%255D_Vinyl_Art_Toys_81834c03-48b3-43e6-8e6c-16cb98f8a001.jpg",
})
productList.push({
    name: "Funko Pop Gill Orange",
    price: "80.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/719219/Gill_%2528Orange%2529_Vinyl_Art_Toys_09c34b51-76a9-445c-b239-3bd02353e1a8.jpg",
})
productList.push({
    name: "Funko Pop Aurra Sing",
    price: "40.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/750353/Aurra_Sing_Vinyl_Art_Toys_1fdf7fb7-9c20-40c8-8676-796109c44c4f.jpg",
})
productList.push({
    name: "Funko Pop Salty",
    price: "80.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/601996/Salty_Vinyl_Art_Toys_f0660133-cd5e-41af-8bdb-a4df2f9c4ff4.jpg",
})
productList.push({
    name: "Funko Pop Tula",
    price: "85.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/776407/Tula_Vinyl_Art_Toys_c9b3771f-2160-4b7e-936f-bcf6b0510bb6.jpg",
})
productList.push({
    name: "Funko Pop Sam with Pumpkin & Salt",
    price: "130.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/846439/Sam_With_Pumpkin_and_Sack_Vinyl_Art_Toys_7c96ec1c-9be9-4db8-91bd-df39137f2676.jpg",
})
productList.push({
    name: "Funko Pop Kraken",
    price: "200.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/802657/The_Kraken_%25286-Inch%2529_Vinyl_Art_Toys_814e3ce2-caaa-49b8-be7b-5124c4b318ad.JPG",
})
productList.push({
    name: "Funko Pop Kurama Susano'o",
    price: "250.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/789663/Kurama_%2528Majestic_Attire%253A_Susano%2527o%2529_Vinyl_Art_Toys_4740d0ee-e429-46ca-8976-459b0f725c80.JPG",
})
productList.push({
    name: "Funko Pop Pegasus",
    price: "150.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/815983/Pegasus_%25286-Inch%2529_Vinyl_Art_Toys_8b3bcbe7-8a8f-4c99-a3c1-3ca188710595.JPG",
})
productList.push({
    name: "Funko Pop Tanker Bug ECCC 2020",
    price: " Agotado",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/780568/Tanker_Bug_%25286-Inch%2529_%255BSpring_Convention%255D_Vinyl_Art_Toys_5ba3179c-f0ef-47a9-863f-40378c48a483.jpg",
})
productList.push({
    name: "Funko Pop Gaara",
    price: "65.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/784176/Gaara_Vinyl_Art_Toys_97b1c9ca-4997-427f-b0ae-974632947002.JPG",
})
productList.push({
    name: "Funko Pop Sagittarius Seiya",
    price: "80.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/975964/Sagittarius_Seiya_Vinyl_Art_Toys_5355a33a-b3ca-4596-b7b7-2b6a054ebeeb.png",
})
productList.push({
    name: "Funko Pop Orochimaru",
    price: " Agotado",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/784182/Orochimaru_Vinyl_Art_Toys_1763eda7-5794-4ff2-8ac6-0449301ff358.JPG",
})
productList.push({
    name: "Funko Pop Kurapika",
    price: "80.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/778291/Kurapika_Vinyl_Art_Toys_80a12046-6644-42d9-b473-b7f8e6a3a3dd.jpg",
})
productList.push({
    name: "Funko Pop Zenitsu Agatsuma",
    price: " Agotado",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/968834/Zenitsu_Agatsuma_Vinyl_Art_Toys_b448d40b-c7ed-473f-a07d-cc1787c384a3.JPG",
})
productList.push({
    name: "Funko Pop Killua Zoldyck",
    price: "110.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1112539/Killua_Zoldyck_Vinyl_Art_Toys_8fdf434b-767d-4d38-a55f-7a05d6bbe4b0.jpg",
})
productList.push({
    name: "Funko Pop Tony the Tiger",
    price: "250.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/748039/Tony_the_Tiger_%252810-Inch%2529_Vinyl_Art_Toys_0bb5e2e8-e64d-4f1b-9e28-442562ff0e82.jpg",
})
productList.push({
    name: "Funko Pop Growlithe Flocked Fall Convention 2020",
    price: " Agotado",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1024355/Growlithe_%2528Flocked%2529_%255BFall_Convention%255D_Vinyl_Art_Toys_924df1d4-6ea3-4d54-bc66-41b577ba2001.png",
})
productList.push({
    name: "Funko Pop Vulpix Flocked Summer Convention 2020",
    price: "110.000",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/844081/Vulpix_%2528Flocked%2529_%255BSummer_Convention%255D_Vinyl_Art_Toys_5f655d8e-b85a-45f1-b68e-98109b5fba5b.jpg",
})
productList.push({
    name: "Funko Pop Trafalgar Law",
    price: " Agotado",
    image: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/977754/Trafalgar_Law_Vinyl_Art_Toys_ad8b065e-7caa-423b-a01a-b3ccc4ebfa30.png",
})
// productList.push({
//     name: "Funko Pop",
//     price: ".000",
//     image: "",
// })

function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement("img");
      productImg.setAttribute("src", product.image);
      productImg.addEventListener("click", openProductDetailAside);
    
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
    
      const productInfoDiv = document.createElement("div");
    
      const productPrice = document.createElement("p");
      productPrice.innerText = "$" + product.price;
      const productName = document.createElement("p");
      productName.innerText = product.name;
    
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement("figure");
      const productImgCart = document.createElement("img");
      productImgCart.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUxJREFUSEvNlN0xBEEUhb8TAZsBEbARKBGQAV55YCMgAzzwakWADGRgRUAGNoOjempazU/PTFfNrtr7ONN9v3vOvbfFmkNrzs//AWy7VLME5pJmq1D3p6ACiHkPJb2PhbQssn0F3AJvko5TgFiMpEGLU4Bt4KdMvCvpuwkZBQjJbM+BE+BeUlBUi1UA9oEPYClpUkLjECTb0mVXp4e2F8AecCZpnhiCGigAUsr7AKfAE7CQNK1m67LIdhjxLWAqKRTYv2ipC1W7qrbYjgV9SgoWF9E7ZrbvgEvgWVJIUERKge2wMwfR0lzADvBVHp5ICha0wnbnucFFsf0KHAEzSUFRCnADXDeVDlpU2hG2+SU5m+2PredlUEEJiSPbx6k1N6sHmVX3HstV8ACcA4+SLho70fkvqwfVsSwuNF7Q6oannovNUDCmF1kKNhrwC7rGoRm2ijZeAAAAAElFTkSuQmCC");
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    
      cardsContainer.appendChild(productCard);
    }
}
  
renderProducts(productList);