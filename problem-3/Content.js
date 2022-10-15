// Array of images
let alienPictures = [
    "https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/Aliens.jpg?itok=kfbiuwSv",
    "https://media.npr.org/assets/img/2010/12/07/alien-9c61f4a13fecf3a041d86c38881d93638b320d1c-s1100-c50.jpg",
    "https://nationaltoday.com/wp-content/uploads/2022/08/4568069-min-640x514.jpg",
    "https://bigthink.com/wp-content/uploads/2022/09/13.8_Little-Book-of-Aliens_Lead.jpg?resize=1200,630",
	"https://media.istockphoto.com/photos/friendly-alien-making-an-ok-hand-sign-picture-id1397350023?b=1&k=20&m=1397350023&s=170667a&w=0&h=L9u3fZk17qa0H3Fee19hPbTxx0Q7c2lr41Haffy1K1M=",
    "https://cdn.mos.cms.futurecdn.net/ExZhhoFQYwDYSmXiYev25G-1200-80.jpg",
    "https://www.esquire.de/sites/esquire.de/files/styles/og_image/public/images/2021-08/alien-aufmacher.jpg?h=893bb400&itok=PV0WHwiX",
    "http://c.files.bbci.co.uk/130DA/production/_110424087_gettyimages-1130166565.jpg"
];

// Reverse through array of images
// Getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * alienPictures.length)
    imgs[i].src = alienPictures[randomImg]
}

// Apply the same rule for h1 elements
const header1 = document.getElementsByTagName("h1");
for (let i = 0; i < header1.length; i++) {
    header1[i].innerText = "The Earth is taken by our Aliens, humans suck";
}

// Apply the same rule for h2 elements
const header2 = document.getElementsByTagName("h2");
for (let i = 0; i < header2.length; i++) {
    header2[i].innerText = "Now you humans are our servants. Bring me a pint of Guiness";
}

// Apply the same rule for h5 elements
const header5 = document.getElementsByTagName("h5");
for (let i = 0; i < header5.length; i++) {
    header5[i].innerText = "Now go pack your bag and bring all kinds of Alcohol to us";
}

// Apply the same rule for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
    p[i].innerText = "The sooner the better";
}

// Do the same for rule a elements
const a = document.getElementsByTagName("a");
for (let i = 0; i < a.length; i++) {
    a[i].innerText = "Ta la la la la";
}

// Do the same for rule span elements
const s = document.getElementsByTagName("span");
for (let i = 0; i < s.length; i++) {
    s[i].innerText = "!WARNING!";
}

// Do the same for rule li elements
const li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
    li[i].innerText = "Urgent News";
}

// Do the same for rule button elements
const btn = document.getElementsByTagName("button");
for (let i = 0; i < btn.length; i++) {
    btn[i].innerText = "! Alien Alert ! DO NOT CLICK !";
}
button.addEventListener('click', () => {
    window.open('https://www.youtube.com/shorts/4Pq5R0JS95Q', '_blank');
});

// Displaying the warning when you search something on google
window.alert("ha ha ha ha Good luck trying to work with this ha ha ha ha");