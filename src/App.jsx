import { useState ,useEffect} from 'react'
// import GetPlants from './components/GetPlants.jsx'
import Game from './components/Game.jsx'
import './App.css'

const cachePlants=[
{id: 0, name: 'Moosewood', image: 'https://s3.us-central-1.wasabisys.com/perenual/species_image/144_acer_pensylvanicum/small/50159672678_a016bd18b9_b.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0MPGHU7CIPXNPMVWMXUW%2F20260421%2Fus-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260421T221823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=57504e9744b6b6ba2871ebb4ef82fbd4c7f3dd23c484ecfc818cdf336bd40924'},
{id: 1, name: 'Autumn Brilliance Serviceberry', image: 'https://s3.us-central-1.wasabisys.com/perenual/species_image/176_amelanchier_x_grandiflora_autumn_brilliance_tree_form/small/Amelanchier_x_grandiflora_Autumn_Brilliance_12zz.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0MPGHU7CIPXNPMVWMXUW%2F20260421%2Fus-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260421T221823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=890845dcdd679e03fcf8cec6d78a5f522579ed4116c32352a8abed2f36600dd8'},
{id: 2, name: 'Marina Strawberry Tree', image: 'https://s3.us-central-1.wasabisys.com/perenual/species_image/181_arbutus_marina/small/50783640608_7dfdc41b15_b.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0MPGHU7CIPXNPMVWMXUW%2F20260421%2Fus-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260421T221823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=d034cca46bc131b43027351d8665bc2782098b8e27caa2adf612651252a6a075'},
{id: 3, name: 'Common Paw Paw', image: 'https://s3.us-central-1.wasabisys.com/perenual/species_image/184_asimina_triloba/small/36488336082_9d0132fcd0_b.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0MPGHU7CIPXNPMVWMXUW%2F20260421%2Fus-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260421T221823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=db1a9b7978541feb5fd8791def42874804e7728dc13960db977e2ffa08ba9595'},
{id: 4, name: 'Chinese Fringetree', image: 'https://s3.us-central-1.wasabisys.com/perenual/species_image/230_chionanthus_retusus/small/41017945655_b2552295b1_b.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0MPGHU7CIPXNPMVWMXUW%2F20260421%2Fus-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260421T221823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=28c6102090571c6736b79c3efcfca58665638192d6a43de3e5b636fbe9ea19d6'},
{id: 5, name: 'Cornelian Cherry Dogwood', image: 'https://s3.us-central-1.wasabisys.com/perenual/species_image/262_cornus_mas/small/51984552479_dcbda153b0_b.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0MPGHU7CIPXNPMVWMXUW%2F20260421%2Fus-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260421T221823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=0db8e1a655ad7f66a5c29d9b5b288d9b5caaa88c12a93de508b81f43f242917a'},
 ]




function App() {
  const [plants, setPlants] = useState(cachePlants)      //change to []
   const [isLoading, setIsLoading] = useState(false)      //change to true
  
  useEffect( ()=>{
    async function fetchData(){
      let fetched=[]
      fetched= await GetPlants();
      console.log( "fetched", fetched);
      setPlants(fetched);
      setIsLoading(false);
    }
  //  fetchData()
  },[])

  if(!isLoading){
    return (<div> 
        <Game plants={plants}/>;
        </div>
    )
  }
}    

export default App




 {/*   <GetPlants plants={plants} setPlants={setPlants} /> */}