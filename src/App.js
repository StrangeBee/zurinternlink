import './App.css';
import  github  from './icons/github.png';
import slack from './icons/slack-logo-icon.png';
import zuri from './icons/zuri-internship-img.svg';
import ing from './icons/Ing.png';
import me from './img/profile.jpg';
import share from './icons/share-solid.svg';
import Mshare from './icons/m-share-btn.svg'

function App() {
  return (
    <div className="container">
      <img src={me} className='p-img' id='profile__img' alt=''/>
      <p className='p-name'> Oduola Benfico</p>

      <img src={share} className='share-btn' />
      <img src={Mshare} className='m-share-btn' />

      <div className='section'>
        <a href="https://www.twitter.com/oduolabenfico">
          <button className='twitter_link'>Twitter Link</button>
        </a>
        <a href="https://training.zuri.team/">
          <button id='btn__zuri'>Zuri Team</button>
        </a>
        <a href="http://books.zuri.team" >
          <button id='books'>Zuri Books</button>
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>">
          <button id='book_python'>Python Books</button>
        </a>
        <a href="https://background.zuri.team">
          <button id='pitch'>Background Check for Coders</button>
        </a>
        <a href="https://books.zuri.team/design-rules">
          <button id='book__design'>Design Books</button>
        </a>
        <div className='icons'>
          <a href=''><img src={slack} className='slck-icon' alt=''/></a>
          <a href=''><img src={github} className='github-icon'  alt=''/></a>
        </div>
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
