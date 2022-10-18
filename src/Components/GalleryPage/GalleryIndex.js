// import g1 from '../../../public/images/gallery/1.jpg';
// import g2 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/2.jpg';
// import g3 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/3.jpg';
// import g4 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/4.jpg';
// import g5 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/5.jpg';
// import g6 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/6.jpg';
// import g7 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/7.jpg';
// import g8 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/8.jpg';
// import g9 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/9.jpg';
// import g10 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/10.jpg';
// import g11 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/11.jpg';
// import g12 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/12.jpg';
// import g13 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/13.jpeg';
// import g14 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/14.jpg';
// import g15 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/15.jpg';
// import g16 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/16.jpg';
// import g17 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/17.jpg';
// import g18 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/18.jpg';
// import g19 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/19.jpg';
// import g20 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/20.jpg';
// import g21 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/21.jpg';
// import g22 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/22.jpg';
// import g23 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/23.jpeg';
// import g24 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/24.jpg';
// import g25 from 'D:/Sketches/react apps/final/nubsuenr/src/images/gallery/25.jpg';



function GalleryIndex() {
    return ( 
        <div>
            <div class="row"> 
        <div class="column">
            <img src={process.env.PUBLIC_URL + '/images/gallery/1.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/2.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/3.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/4.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/5.jpg'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/6.jpg'} alt="" />
        </div>
        <div class="column">
        <img src={process.env.PUBLIC_URL + '/images/gallery/7.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/8.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/9.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/10.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/11.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/12.jpg'} alt="" />
        </div>  
        <div class="column">
        <img src={process.env.PUBLIC_URL + '/images/gallery/13.jpeg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/14.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/15.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/16.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/17.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/18.jpg'} alt="" />
        </div>
        <div class="column">
        <img src={process.env.PUBLIC_URL + '/images/gallery/19.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/20.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/21.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/22.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/23.jpeg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/24.jpg'} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/gallery/25.jpg'} alt="" />
        </div>
        </div>
        </div>
     );
}

export default GalleryIndex;