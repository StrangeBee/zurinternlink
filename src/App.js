import './App.css';
import  github  from './icons/github.png';
import slack from './icons/slack-logo-icon.png';
import zuri from './icons/zuri-internship-img.svg';
import ing from './icons/Ing.png';
import me from './img/profile.jpg';
import share from './icons/share-solid.svg';
import Mshare from './icons/m-share-btn.svg';

function App() {
  return (
    <div className="container">
      <img src={me} className='p-img' id='profile__img' alt=''/>
      <p className='p-name' id='twitter'> Oduola Benfico</p>
      <p className='s-name' id='slack'> Beneze </p>

      <img src={share} className='share-btn' />
      <img src={Mshare} className='m-share-btn' />

      <div className='section'>
        <a href="https://www.twitter.com/oduolabenfico" className='twitter_link'>
          Twitter Link
        </a>
        <a href="https://training.zuri.team/" id='btn__zuri'>
          Zuri Team
        </a>
        <a href="http://books.zuri.team" id='books' >
          Zuri Books
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<Beneze>" id='book__python' >
          Python Books
        </a>
        <a href="https://background.zuri.team" id='pitch'>
          Background Check for Coders
        </a>
        <a href="https://books.zuri.team/design-rules" id='book__design'>
          Design Books
        </a>
     </div>
     <div className='icons'>
          <img src={slack} className='slck-icon' alt=''/>
          <img src={github} className='github-icon'  alt=''/>
      </div>

      <div className='footer'>
        <img src={zuri} className="zuri-icon"  alt=''/>
        <p className="intern">HNG Internship 9 Frontend Task</p>
        <img src={ing} className="ing-icon" alt='' />
      </div>
    </div>
  );
}

export default App;
