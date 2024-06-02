import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTeamspeak} from '@fortawesome/free-brands-svg-icons';

export function Header() {
  return (
    <header className="bg-transparent fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <a href="index.html" className="flex items-center">
          <img className="w-12" src="logo.png" alt="LogoHeader"/>
          <span className="text-white ml-2">61St Adeptus TEAM</span>
        </a>
        <nav className="text-white flex items-center">
          <ul className="uppercase flex mr-auto">
            <li><a href="#home" className="mr-6">Accueil</a></li>
            <li><a href="#team" className="mr-6">Équipe</a></li>
          </ul>
          <ul className="flex items-center">
            <li className="mr-6">
              <a href="https://discord.com/invite/dPgxPgv" target="_blank">
                <FontAwesomeIcon icon={faDiscord} className="text-white text-lg" />
              </a>
            </li>
            <li className="mr-6">
              <a href="ts3server://ts3.adeptusrepublica.fr">
                <FontAwesomeIcon icon={faTeamspeak} className="text-white text-lg" />
              </a>
            </li>
            <li>
              <a href="https://ptero.adeptusrepublica.fr/" target="_blank" className="text-white">Panel</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
