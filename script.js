"use strict";
//main-container
let container1 = document.createElement("div");
container1.setAttribute("class", "container")
document.body.appendChild(container1);

//heading
let div1 = document.createElement("div");
div1.setAttribute("class", "display-1");
div1.setAttribute("id", "header");
div1.innerHTML = "<h1>Hackathon-1 with Make up Api</h1><br>";
container1.appendChild(div1);
let div2 = document.createElement("div");
div2.setAttribute("class", "header1")
div2.innerHTML = "<h3><b>Welcome to the Glam world!!</b></h3><br>";
container1.appendChild(div2);
//images
let img_div = document.createElement("div");
img_div.setAttribute("class","images")
container1.appendChild(img_div);
let image = document.createElement("img");
image.setAttribute("class","img-thumbnail")
image.src = "https://media.istockphoto.com/photos/makeup-palette-and-brushes-professional-eyeshadow-palette-picture-id1299164489?b=1&k=20&m=1299164489&s=170667a&w=0&h=GqoYQHfqq4UfbHFq9TlUp3isRCAqm9hoFqnxaKUEQEU="
img_div.appendChild(image);
//search list guide
let para = document.createElement("div")
para.setAttribute("id", "para")
para.innerHTML = "<b>SEARCH BY PRODUCTS AND WAIT FOR RESULTS!</b><br><ul><li>Blush</li><li>Bronzer</li><li>Eyebrow</li><li>Eyeliner</li><li>Eyeshadow</li><li>Foundation<li>Lip liner<li>Lipstick<li>Mascara<li>Nail polish<ul>"
img_div.appendChild(para);
//creating container for input boxes & buttons.
const container2 = document.createElement("div")
container2.setAttribute("class", "container-2")
container1.appendChild(container2)
//input text
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter your Product type");
input.setAttribute("class", "input-box");
input.setAttribute("id","input-box");
container2.appendChild(input);

let input2= document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "Enter your brand (ex:maybelline)");
input2.setAttribute("class", "input-box");
input2.setAttribute("id","input-box");
container2.appendChild(input2);

//search button
let search = document.createElement("button");
search.setAttribute("class", "button");
search.setAttribute("id","button");
search.innerText = "Search product!"
container2.appendChild(search);
search.addEventListener("click", displaydata)

let search_2 = document.createElement("button");
search_2.setAttribute("class", "button");
search_2.setAttribute("id","button");
search_2.innerText = "Search brand!"
container2.appendChild(search_2);
search_2.addEventListener("click", displaydata2)



//getting data from server
async function displaydata(){
    let text = input.value;
    console.log(text);
    const web = await fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${text}`);
    const data  = await web.json();
    console.log(data);

    build_container(data);

}

async function displaydata2(){
    let br = input2.value;
    console.log(br);
    const response =await fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${br}`)
    const br_data = await response.json();
    console.log(br_data);
    build_container(br_data);
}
//container for displaying data
let container3 =document.createElement('div');
container3.setAttribute("class", "container3");
container1.appendChild(container3);
//building the container
function build_container(data){
    container3.innerHTML = "";
   
    data.forEach((e)=>{
        let small_container = document.createElement('div');
        small_container.setAttribute("class","container-small");
        const images = document.createElement('img')
        const names = document.createElement('h2')
        const brands = document.createElement('h3')
        const prices = document.createElement('h3')
        const category = document.createElement("h3")
        const product_link = document.createElement('a')
        const description = document.createElement('p')

        images.src = e.image_link
        names.innerHTML = e.name
        brands.innerHTML = `Brand : ${e.brand}`

        prices.innerHTML = `Price : $${e.price}`
        category.innerHTML = `Category : ${e.category}` 
        // link for product
        product_link.href = e.product_link
        product_link.innerHTML = 'Check the Product'
        description.innerHTML = e.description

        
        small_container.append(images,names,brands,prices,category,product_link,description)

container3.appendChild(small_container)
    })
}
//footer
const footer = document.createElement('div')
footer.setAttribute("class", "footer")
footer.innerHTML = "<p> please RE-SEARCH if Results were not displayed!</p>"
document.body.appendChild(footer)







