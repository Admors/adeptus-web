export function Header() {
  return (
    <header>
        <div>
        <a href="index.html">
          <img className="w-12" src="logo.png" alt="LogoHeader"/>
          <span>61St Adeptus TEAM</span>
        </a>
        <nav>
          <ul className='uppercase'>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#team">équipe</a></li>
          </ul>
          <ul>
            <li>
              <a href="https://discord.com/invite/dPgxPgv" target="_blank">
                <i className="fa-brands fa-discord"></i>
              </a>
            </li>
            <li>
              <a href="ts3server://ts3.adeptusrepublica.fr"><i className="fa-brands fa-teamspeak"></i></a>
            </li>
            <li>
              <a href="https://ptero.adeptusrepublica.fr/" target="_blank"
                ><i className="fa-solid fa-gauge-high"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}