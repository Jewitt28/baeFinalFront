import React from 'react';

const PhoneRecords = ({ phoneNumber, callerMSISDN, callTowerId, recieverMSISDN, recieverTowerId,  }) => {
    
    return (
        <main>


            <div className="phoneRecords">
              {/*}  <Link to="/form" id="showButton" className="btn btn-secondary "> Register as a seller </Link>*/}

            </div>




            <table className="table1">
                <thead>
                    <tr>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Caller ID</th>
                        <th scope="col">Caller Cell Tower Location</th>
                        <th scope="col">Reciever</th>
                        <th scope="col">Reciever Cell Tower ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date / Time</th>
                    
                    </tr>
                </thead>
                {/* <tbody>
                {

PhoneRecords(rec => <tr key={rec.phoneRecords}>
    <td> {rec.phoneNumber}  </td>
    <td> {rec.callerMSISDN}  </td>
    <td> {rec.callTowerId}  </td>
    <td> {rec.recieverMSISDN}  </td>
    <td> {rec.recieverTowerId}  </td>
    <td> {rec.phoneNumber.firstName.lastName}  </td>
    <td> {rec.event_time}  </td>
    {/* <td><input type="button" onClick={() => removeR(rec.id)}/><FontAwesomeIcon icon={faTrash} id="trashCan"/></td> 
    <td>    <button className="my-button">
        <FontAwesomeIcon icon={faTrash} onClick={() => removeR(rec.sellers_id)} />

    </button></td>
    */}
{/* </tr>
)
}
</tbody> */} 
</table>
</main>
 


        
  );
};

export default PhoneRecords;