const GIPHY_API_KEY = "os19KtoX0pnEG2TaOjCsWjbtCDancfSL";
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&limit=1&q=cats`;

/*fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((content) => {
    console.log(content);
  })
  .catch((error) => {
    console.error(error);
  });
*/
let cardDataFromScript = [
    {
        name: "Williams",
        clicked: false,
        imageURL: "https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8259.jpg"
    },
    {
        name: "Mclaren",
        clicked: false,
        imageURL: "https://whitescreen.online/image/orange-background.png"
    },
    {
        name: "Mercedes",
        clicked: false,
        imageURL: "https://media.istockphoto.com/id/1484130495/vector/shiny-metal-texture-silver-or-stainless-steel-background.jpg?s=612x612&w=0&k=20&c=l-At27ry22KvWByVTGGgIEn5xMWTmVktrnxbTWaO_bQ="
    },
    {
        name: "Aston Marin",
        clicked: false,
        imageURL: "https://i.ytimg.com/vi/lsawjstoaEc/maxresdefault.jpg"
    },
    {
        name: "Redbull",
        clicked: false,
        imageURL: "https://filestore.community.support.microsoft.com/api/images/3d1d0fa9-84a3-4daf-8ea5-0f6e4226acbd?upload=true"
    },
    {
        name: "Visa Cash App RB",
        clicked: false,
        imageURL: "https://www.whitescreen.org/static/whitescreen/img/blue-screen.webp"
    },
    {
        name: "Haas",
        clicked: false,
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cXJY4Rfff2smDrMOlqf0ETNJD9WAWFodvw&s"
    },
    {
        name: "Alpine",
        clicked: false,
        imageURL: "https://i.ytimg.com/vi/Fok6KYb5irg/maxresdefault.jpg"
    },
    {
        name: "Sauber",
        clicked: false,
        imageURL: "https://play-lh.googleusercontent.com/3f0A7wku8KOEaOAT9fZOKrw3wKZyCmbAJM1ulQU3Lj41tXIhWngaHgDZK59a2htSu4k=w240-h480-rw"
    },
    {
        name: "Ferrari",
        clicked: false,
        imageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/AAAZ4gk3AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
    },
];

export default cardDataFromScript;