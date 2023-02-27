
import './App.css';

import { MenuGame } from './components/menuGames'

function App() {
  return (
    <div>
      <header>
        <a href="*" class="logo"><h2>Dimi Games</h2><h6>Never stop</h6></a>

        <nav>
          <a href=''>Home</a>
          <a href='https://se.linkedin.com/in/diego-leonardo-vallejos-dimitroff-petcoff-687b0b1b8/en?original_referer=https%3A%2F%2Fwww.google.com%2F'>About Me</a>
          <a href=''>Contact us!</a>
        </nav>
      </header>

      <MenuGame></MenuGame>


    </div>
  );
}

export default App;
