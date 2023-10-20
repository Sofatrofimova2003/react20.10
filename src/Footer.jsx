import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return(<>
        <div className='block'>
          <div className='text3'>
                <Link className='text4' to='http://localhost:5174/'>Главная</Link>
                <Link className='text4'to='*'>Товары</Link>
                <Link className='text4'to='*'>О предприятии</Link>
                <Link className='text4'to='*'>Статистика</Link>
                <Link className='text4'to='*'>Новости</Link>
                <Link className='text4'to='*'>Документация</Link>
        </div>
        
        <div className='text5'>
            <Link className='text6' to='*'>Телеграмм</Link>
            <Link className='text6'to='*'>Группа Вконтакте</Link>
            <Link className='text6'to='*'>Youtube</Link>
        </div>
        
          <div className='logo'>
                <img src="/logo 1.png"  width={116} height={116} ></img>
           </div>
        </div>

        

      </>  
      );
}

export default Footer;
