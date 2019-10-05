import utilities from '../../helpers/utilities';
import './navbar.scss';

const loadNavbar = () => {
  const domString = `
        <nav>
          <a href="#" class="brand">HOGWARTS</a>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
          </ul>
        </nav>
    `;
  utilities.printToDom('nav-container', domString);
};

export default { loadNavbar };
