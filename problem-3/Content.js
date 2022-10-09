//array of images
let alienPictures = [
    "https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/Aliens.jpg?itok=kfbiuwSv",
    "https://media.npr.org/assets/img/2010/12/07/alien-9c61f4a13fecf3a041d86c38881d93638b320d1c-s1100-c50.jpg",
    "https://nationaltoday.com/wp-content/uploads/2022/08/4568069-min-640x514.jpg",
    "https://bigthink.com/wp-content/uploads/2022/09/13.8_Little-Book-of-Aliens_Lead.jpg?resize=1200,630",
	"https://media.istockphoto.com/photos/friendly-alien-making-an-ok-hand-sign-picture-id1397350023?b=1&k=20&m=1397350023&s=170667a&w=0&h=L9u3fZk17qa0H3Fee19hPbTxx0Q7c2lr41Haffy1K1M="
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * alienPictures.length)
    imgs[i].src = alienPictures[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "The Earth is taken by our Aliens, humans suck";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "Now you humans are our servants. Bring me a pint of Guiness.";
}
