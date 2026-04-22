import { useState, useEffect } from 'react';


async function GetPlants(){
    let data= await fetchData();
    let plants= parseData(data);
    return plants
}

//function fetchApi() {
 //   useEffect(() => {
        async function fetchData() {
            try {
                const myPromise = fetch(`https://perenual.com/api/v2/species-list?key=sk-s4mZ69e673c65eba216604&edible=1&flowers=1&medicinal=1`);
                const result = await myPromise; 
                const datos = await result.json()
                return datos.data
            } catch (error) {
                console.error("Error fetching data:", error);
            }    
        }
//        fetchData();/
//    }, []);
//}

function parseData(data){
   // if(data!=null && plants.length==0 ){
        let newPlants=[]
        for(let i=0; i<12; i++){
        try{let plant={id:i, name: data[2*i].common_name, image:data[2*i].default_image.small_url};
        if(!plant.image){ throw new Error("No image");
        }     
        newPlants.push(plant)    }
        catch{let plant={id:i, name: data[2*i+1].common_name, image:data[2*i+1].default_image.small_url}
            console.log("second try")
            newPlants.push(plant)  
             }
           
            console.log(data[2*i+1].common_name)
        }
        return newPlants
 //   }
}

/*
function display(id,name,image){
    return(
        <div key={id}>
            <h5> {name}</h5>
            <img src={image} alt=""  />
        </div>     
    )
}

function DisplayData({plants}){
    console.log("displaying" , {plants})
    return (
        <div>
            <h1>API Data</h1>
            {plants.map((p)=> display(p.id,p.name,p.image))}
        </div>
    );
}
*/
export default GetPlants;

