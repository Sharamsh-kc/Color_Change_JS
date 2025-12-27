const box = document.querySelectorAll(".box")
const a = document.querySelector(".main .item_1");
const b = document.querySelector(".main .item_2");
const c = document.querySelector(".main .item_3");
const d = document.querySelector(".main .item_4");

// const images = [
//   "luffy.png",
//   "naruto.png",
//   "mega.png",
//   "goku.png"
// ];

const repeat = [];
const limit = 4;
function getTextColor(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "black" : "white";
}

function randomcolorgenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function choose()
{
    let color;
    do
    {
        color = randomcolorgenerator();
    }while(repeat.includes(color))

    repeat.push(color);
    if(repeat.length>limit)
    {
        repeat.shift();
    }
    return color;

}
box.forEach(box => 
{   box.style.position = "relative";
    // const img = document.createElement("img");
    const text = document.createElement("h3");
    text.textContent = `This color code is: ${choose()}`;
    box.addEventListener('mouseenter', () =>
    {  
        if (box.classList.contains("item_1")) {
            // img.src = images[0];
            // img.alt = "default";
            // a.appendChild(img);
            a.appendChild(text)
            document.body.style.cursor =
        'url("http://www.rw-designer.com/cursor-extern.php?id=162250"), auto'; } 

        else if (box.classList.contains("item_2")) {
            // img.src = images[1];
            // img.alt = "default";
            // b.appendChild(img);
            b.appendChild(text)
            document.body.style.cursor =
        'url("http://www.rw-designer.com/cursor-extern.php?id=170212"), auto'; } 

        else if (box.classList.contains("item_3")) {
            // img.src = images[2];
            // img.alt = "default";
            // c.appendChild(img);
            c.appendChild(text)
           document.body.style.cursor =
           'url("http://www.rw-designer.com/cursor-extern.php?id=171378"), auto'; } 
       
       
        else if (box.classList.contains("item_4")) {
            // img.src = images[3];
            // img.alt = "default";
            // d.appendChild(img);
            d.appendChild(text)
             document.body.style.cursor =
        'url("http://www.rw-designer.com/cursor-extern.php?id=170519"), auto'; } 
       
        // img.style.width = "100%";
        // img.style.height = "100%";
        // img.style.objectFit = "cover";
        // img.style.position = "absolute";
        // img.style.left = "0";
        // img.style.bottom = "-100%";
        // img.style.transition = "bottom 1s ease";
            
        // requestAnimationFrame(() => {
        //     img.style.bottom = "0";   
        // });

        const random1 = choose();
        box.style.backgroundColor=random1;
        box.style.color = getTextColor(random1);
    });


    box.addEventListener('mouseleave', () =>
    {
        box.style.backgroundColor="";
        document.body.style.cursor = "default";
        // if (img) {
        //     img.remove();
        //     img = null;   
        // }
        if (text) {
            text.remove();
            text = null;   
        }
    });
}
);

