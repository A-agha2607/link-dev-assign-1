async function getProd(){
    try{
         const res=await fetch("https://fakestoreapi.com/products");
         
        if(!res.ok){
            throw new Error("something went wrong",res.statusText)
            
        }
        const data=await res.json();
        console.log(data)
        displayProd(data);
    }
    catch(error){
        console.log(error);
    }
}

function displayProd(data){
    data.map((prod,i)=>document.getElementById('prods').innerHTML+=`
                    <div class="crd">
                <h2>${prod.title}</h2>
                <img src="${prod.image}" alt="">
                <span>${prod.category}</span>
                <span> ${prod.description}</span>
                <span>$${prod.price}</span>
                <span>${prod.rating.rate} (${prod.rating.count} reviews)</span>
            </div>
        `

    )
}
getProd();