function WingsSec(props) {
    return ( 
        <div>
    <div className="row">
    <div className="card_content">
      <div className="card">
        <div class="card-title" style={{color: 'ghostwhite'}}>{props.name}</div>
        <div>
          <p style={{color: 'ghostwhite'}}>{props.word1}<br style={{color: 'ghostwhite'}} />{props.word2}</p>
        </div>
        <button class="btn btn-outline-success" style={{width:'100px', borderRadius: '20px'}}>
          <a style={{textDecoration: 'none'}} href="https://nubsuenrforms.netlify.app">Join</a>
        </button>
      </div>
    </div>
  </div>
        </div>
     );
}

export default WingsSec;