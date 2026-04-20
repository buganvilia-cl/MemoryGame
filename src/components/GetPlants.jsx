import { useState, useEffect } from 'react';


function GetPlants({plants, setPlants}){
    const [data, setData] = useState(null);
    fetchApi(data, setData);
    parseData(data, plants, setPlants);
    return < DisplayData plants={plants} />;
}

function fetchApi(data, setData) {
    useEffect(() => {
        async function fetchData() {
            try {
                const myPromise = fetch(`https://perenual.com/api/v2/species-list?key=sk-s4mZ69e673c65eba216604&edible=1&fruits=1&flowers=1&medicinal=1&rare=0&poisonous=0`);
                const result = await myPromise; 
                const datos = await result.json()
                setData(datos.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }    
        }
        fetchData();
    }, []);
}

function parseData(data, plants, setPlants){
    if(data!=null && plants.length==0 ){
        let newPlants=[]
        for(let i=0; i<10; i++){
        let plant={id:i, name: data[3*i].common_name, image:data[3*i].default_image.small_url}
            newPlants.push(plant)
        }
        setPlants(newPlants)
    }
}


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

export default GetPlants;

