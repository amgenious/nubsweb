import { Link } from 'react-router-dom';

function Nav() {
    return ( 
     <header id='top'>
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
        <li><Link to='/donations' style={{textDecoration:'none', color:'white'}} class="nav-link">MAKE DONATIONS</Link></li>
        <li><a href="https://amgenious.github.io/videos" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'white'}} class="nav-link">VIDEOS</a></li>
        <li><a href='https://amgenious.github.io/prayer-counselling/'target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'white'}} class="nav-link">NEED ASSISTANCE</a></li>
    </ol>

</div>
    </nav>
     </header>
     );
}

export default Nav;
