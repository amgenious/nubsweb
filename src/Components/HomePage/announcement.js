function Announcement(){
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ marginTop: "10px" }}>
              <center>
                <h1>Upcoming Events</h1>
              </center>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div
                  style={{
                    width: "50%",
                    boxShadow: "2px 2px 10px",
                    marginRight: "10px",
                  }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/nubs@10_fliers.jpg"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
}
export default Announcement