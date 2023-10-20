import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
        <div>
            <Link to='about'>О нас</Link>
            <Link to='/'>Главная</Link>
        </div>
   </> 
   );
}

export default Menu;