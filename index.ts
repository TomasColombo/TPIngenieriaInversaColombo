    type Rating = {
        rate: number;
        count: number;
    }

    type Product = {
        id:number;
        title : string;
        price:number;
        description : string;
        category:string
        image:string;
        rating : Rating;
    }
    
    fetch('https://fakestoreapi.com/products')
    .then (res => res.json())
    .then ((products : Product[])=>{
        //prepare table HTML
        let tableHTML: string = '<thead><tr><th>ID</th> <th>Title</th> <th>Description</th> <th>Price</th></tr> </thead><tbody> ' ; //let es pq va a ir modificando su contenido a lo largo de la progrmacon
        //notemos que dejamos el tbody(table body) abierto
        // Loop thru all products to generate rows of the table 
        products.forEach((p:Product)=>{
            tableHTML+=`<tr> <td>${p.id}</td> <td>${p.title}</td> <td>${p.description}</td> <td>${p.price}</td></tr>` ;
        })
            // Close table body
        tableHTML += '</tbody>';
        // Grab table element to set its inner HTML
        // SETEAMOS EL INNER
        document.querySelector('tableElement')!.innerHTML = tableHTML;
        // Hide spinner
        const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
        spinnerElement.style.display='none';

    
    });
