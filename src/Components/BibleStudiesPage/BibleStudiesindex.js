import React from 'react'
import { Link } from 'react-router-dom';

export const BibleStudiesindex = () => {
  return (
    <>
       <div className="container top">
        <div className="row">
            <div className="col-md-12">
                <h1 style={{marginTop:'10px'}}><b>Welcome to Nubs Uenr Bible Studies Blog</b></h1>
                <hr/>
            </div>
            <div className="col-md-12" id="disp">
                <h3>All Blogs</h3>
                <div className="card_content">
                <div className="card" >
                    <Link href="" className="single">
                    
                    <div className="card-body">
                      {/* eslint-disable-next-line */}
                      <h5 className="card-title title"><b></b></h5>
                      {/* eslint-disable-next-line */}
                      <h6 className="card-subtitle mb-2 text-muted date"></h6>
                      <p className="card-text snippet"></p>
                    </div>
                </Link>
                </div>
                <p>There are no Blogs to be displayed</p>
            </div>
            </div>
        </div>
    </div>
    </>

  )
}
