import './App.css'
import  github  from './icons/github.png'
import slack from './icons/slack-logo-icon.png'

function App() {
  return (
    <div className="container">
      <img src='' className='p-img' id='profile__img'/>
      <p className='p-name'> Oduola Benfico</p>

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
          <a href=''><img src={slack} className='slck-icon' /></a>
          <a href=''><img src={github} className='github-icon' /></a>
        </div>
     </div>

     

     <div className='Footer'></div>
    
    </div>
  );
}

export default App;
