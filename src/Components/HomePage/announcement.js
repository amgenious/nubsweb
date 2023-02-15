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
                    src={process.env.PUBLIC_URL + "/images/congress.jpg"}
                    alt=""
                  />
                </div>
                {/* <div style={{ width: "50%", boxShadow: "2px 2px 10px" }}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/vals.jpg"}
                    alt=""
                  />
                </div> */}
              </div>
              <br></br>
              <center>
                <p>
                  <i>
                    For more info about any program, message or call us on the
                    number on the footer.
                  </i>
                </p>
              </center>
            </div>
          </div>
        </div>
      </>
    );
}
export default Announcement