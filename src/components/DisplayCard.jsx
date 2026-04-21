
//const plants=[{id:0 , name:"nombre planta" ,image:"#"}, {id:1 , name:"otro nombre planta" ,image:"#"},{id:2 , name:"nombre otra planta" ,image:"#"}]

 

function DisplayCard({plant, passPlantId}){
    return (
        <div className="card" key={plant.id}  onClick={()=>passPlantId(plant.id)} >  
            <img src={plant.image} alt={plant.name}  />
            <h5> {plant.name}</h5>
        </div>
    )

}

function DisplayCards({plants, checkPlay}){

    function passPlantId(id){
        checkPlay(id);
    }

    const shuffled = plants
        .map(value => ({ value, sort: Math.random() })) // Assign a random key to each item
        .sort((a, b) => a.sort - b.sort)                // Sort by that key
        .map(({ value }) => value);                     // Extract the original values
    console.log(shuffled)
    return (
        <div className="allCards">  
       { shuffled.map((plant) => <DisplayCard key={plant.id} plant={plant} passPlantId={passPlantId} />  ) }
        </div>     
    )
}











export default DisplayCards