function VideoIndex() {
    return ( 
        <div>
        <p style={{textAlign:'center'}}><b>Welcome to the Video Section of Nubs Uenr. Here you will find some videos from our previous prpgrams, and the sermons preached on Sundays.</b></p>
    
    <div id="vid">
        <div class="card" style={{padding: '10px',textAlign:'center', marginBottom:'10px'}}>
        <iframe  height="315" src="https://www.youtube.com/embed/bqy5Lm2TsS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="card" style={{padding: '10px',textAlign:'center', marginBottom:'10px'}}>
        <iframe  height="315" src="https://www.youtube.com/embed/DfhP7W9R4lw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="card" style={{padding: '10px',textAlign:'center', marginBottom:'10px'}}>
        <iframe  height="315" src="https://www.youtube.com/embed/ZTy1OiQnwYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="card" style={{padding: '10px',textAlign:'center', marginBottom:'10px'}}>
        <iframe  height="315" src="https://www.youtube.com/embed/xTRCrdKoP9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
        </div>
     );
}

export default VideoIndex;