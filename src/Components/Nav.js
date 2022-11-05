import { Link } from 'react-router-dom';

function Nav() {
    return ( 
     <header id='top'>
        {/* <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
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
      </nav>   */}
      {/* <nav>
        <input type="checkbox"  id="res-menu" />
        <label for="res-menu">
            <i class="fa fa-bars" id="sign-one">OPEN</i>
            <i class="fa fa-times" id="sign-two">CLOSE</i>
        </label>
        <h1>Heritage</h1>
        <ul>
            <li><Link to='/' style={{textDecoration:'none', color:'gray'}} class="nav-link">Home</Link></li>
            <li><Link to='/about' style={{textDecoration:'none', color:'gray'}} class="nav-link">About</Link></li>
            <li><Link to='/gallery' style={{textDecoration:'none', color:'gray'}} class="nav-link">Gallery</Link></li>
            <li><Link to='/wings' style={{textDecoration:'none', color:'gray'}} class="nav-link">Wings</Link></li>
            <li><Link to='/video' style={{textDecoration:'none', color:'gray'}} class="nav-link">Vidoes</Link></li>
        </ul>
    </nav> */}
    <nav>
    <input type="checkbox" name="" id="check" />

<div class="containe">
    <label for="check">
        <i class="bi bi-x-lg" id="times"></i>
        <i class="bi bi-arrow-bar-right" id="bars"></i>
    </label>
    <div class="head" id='head'>NUBS UENR</div>
    <ol>
        <li><Link to='/' style={{textDecoration:'none', color:'white'}} class="nav-link">HOME</Link></li>
        <li><Link to='/about' style={{textDecoration:'none', color:'white'}} class="nav-link">ABOUT</Link></li>
        <li><Link to='/gallery' style={{textDecoration:'none', color:'white'}} class="nav-link">GALLERY</Link></li>
        <li><Link to='/wing' style={{textDecoration:'none', color:'white'}} class="nav-link">WINGS</Link></li>
        <li><a href="https://amgenious.github.io/videos" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'white'}} class="nav-link">VIDEOS</a></li>
        <li><a href='https://amgenious.github.io/prayer-counselling/'target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'white'}} class="nav-link">NEED ASSISTANCE</a></li>
    </ol>

</div>
    </nav>
     </header>
     );
}

export default Nav;
