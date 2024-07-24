import NavBar from './NavBar';
import ProductList from './ProudctsList';
// import Slider from './components/Slider';
export default function Home(){
    return(<>
        <div className="container">
            <NavBar />
            {/*<Slider /> */}
            <ProductList />
        </div>
       
        </>
    )
}