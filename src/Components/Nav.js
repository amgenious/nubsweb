import { Link } from 'react-router-dom';

function Nav() {
    return ( 
     <header id='top'>
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <p class="navbar-brand" href="#" id="head">Nubs Uenr</p>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to='/' style={{textDecoration:'none', color:'gray'}} class="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to ='/about' style={{textDecoration:'none', color:'gray'}} class="nav-link">About</Link>
              </li>
              <li class="nav-item">
              <Link to='/gallery' style={{textDecoration:'none', color:'gray'}} class="nav-link" >Gallery</Link>
              </li>
              <li class="nav-item">
                <Link to='/wing' style={{textDecoration:'none', color:'gray'}} class="nav-link">Wings</Link>
              </li>
              <li class="nav-item">
              <Link to='/video' style={{textDecoration:'none', color:'gray'}} class="nav-link">Videos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     </header>
     );
}

export default Nav;
