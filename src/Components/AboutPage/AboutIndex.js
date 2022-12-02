import Table from "./Table";

function AboutIndex() {
    return ( 
        <div>
        <div id="aboutpg" style={{ backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'}}>
             <div style={{background: 'rgba(0, 0, 0, 0.616)'}}>
                <h1 style={{textAlign: 'center', color: 'ghostwhite'}}>About NUBS-UENR </h1> 
                    <div style={{padding: '20px', color: 'ghostwhite'}}>
                        Nubs- Uenr was established on <b>Saturday, 26th October, 2013</b>. God willing 2023 <b>Nubs- Uenr will be <i>10 years</i></b>.
                        <br />Weekly activities of the union: Bible Studies (Tuesday), Prayer meeting (Thursday), Intercessors meeting (Saturday) and Sunday service.
                        <br />Successive executives under the administration of various presidents, have handled the activities of the union to make us come this far.
                        <hr />
                <div>
                <p style={{color:'white'}}><b>Our Patron </b>- Mr. Alfred Appiah </p>
                <p style={{color:'white'}}><b>Our Matron </b>- Dr. Baaba A. Danquah</p>
                <p style={{color:'white'}}><b>Campus Pastor </b>- Rev. Fred Kumi Achiever</p>
                </div>
            </div>
                <Table />
        <div style={{padding: '20px', color: 'ghostwhite'}}>
        <h3>Various Wings</h3>
        Bible Studies Wing
        <br />Prayer Wing
        <br />Music Wing
        <br />Outreach/ Evangelism wing
        <br />Organizing wing 
        <br />Theatre wing
      </div>
      <br/>
    </div>
</div>
</div>
     );
}

export default AboutIndex;