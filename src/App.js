import "./App.css";
import Actor from "./components/Actor";
import Users from "./components/Users";

const actors = [
    {id:1, name: 'Tom', img: "https://w7.pngwing.com/pngs/859/427/png-transparent-tom-cat-jerry-mouse-golden-age-of-american-animation-tom-and-jerry-cartoon-tom-jerry-mammal-cat-like-mammal-heroes.png"},
    {id:2, name: 'Jerry', img: "https://e7.pngegg.com/pngimages/30/563/png-clipart-jerry-mouse-tom-cat-tom-and-jerry-tom-and-jerry-mammal-cat-like-mammal.png"},
    {id:3, name: 'Spike', img: "https://upload.wikimedia.org/wikipedia/en/e/e4/Spike_and_Tyke_%28characters%29.png"},
    {id:4, name: 'Tyke', img: "https://i.pinimg.com/564x/83/6f/da/836fdab05c1eb30da94412f57e1c8020.jpg"}
]

function App() {
  return (
    <div>
        {/*{actors.map(actor => <Actor key={actor.id} name={actor.name} img={actor.img}/>)}*/}
    <Users/>
    </div>
  );
}

export default App;
