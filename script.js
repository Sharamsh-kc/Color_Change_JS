const box = document.querySelectorAll(".box")


const repeat = [];
const limit = 4;

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
{
    box.addEventListener('mouseenter', () =>
    {   
        if (box.classList.contains("item_1")) {
            document.body.style.cursor =
        'url("http://www.rw-designer.com/cursor-extern.php?id=162250"), auto'; } 

        else if (box.classList.contains("item_2")) {
            document.body.style.cursor =
        'url("http://www.rw-designer.com/cursor-extern.php?id=170212"), auto'; } 

        else if (box.classList.contains("item_3")) {
           document.body.style.cursor =
        'url("http://www.rw-designer.com/cursor-extern.php?id=171378"), auto'; } 
        else if (box.classList.contains("item_4")) {
             document.body.style.cursor =
        'url("http://www.rw-designer.com/cursor-extern.php?id=170519"), auto'; } 
       
        const random1 = choose();
        box.style.backgroundColor=random1;
    });


    box.addEventListener('mouseleave', () =>
    {
        box.style.backgroundColor="";
        document.body.style.cursor = "default";
    });
}
);

