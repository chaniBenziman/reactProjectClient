import { useState, useEffect } from "react";
import BusinessData from "./BusinessData";
import BusinessDataEdit from "./BusinessDataEdit";
import { Button } from "@mui/material";
import AddService from "./AddService";
import Service from "./Service";
import { Link, Outlet } from 'react-router-dom';
export default function homePageAdmin() {

  const [isEdit, setisEdit] = useState(false);
  const [isplus, Setisplus] = useState(false);
  const [isService, SetisService] = useState(true);
  const [isMeeting, SetisMeeting] = useState(true);
  return (
    <>
      {!isplus && (<>
        {!isEdit ? <BusinessData></BusinessData> : <BusinessDataEdit setisEdit={setisEdit} />}
        {!isEdit && (<Button size="small" color="primary" onClick={() => setisEdit(true)}>
          edit
        </Button>)}</>)}
      <br></br>
      {!isEdit && !isplus && (<>
          <Link to="/admin/meetings" onClick={()=>{SetisService(false),SetisMeeting(true)}}>Meetings | </Link>
          <Link to="/admin/services" onClick={()=>{SetisMeeting(false),SetisService(true)}}>Services</Link>
          <Outlet></Outlet>
        </>
        )}
        <br/>
      {!isEdit && (<>
        {!isplus && !isMeeting && isService&&(<>
          <Button size="small" color="primary" onClick={() =>{ Setisplus(true)}} >
            addService
          </Button>
        </>)}
        <br></br>
        {isplus &&(<>
        < AddService Setisplus={Setisplus} />
        </>
        )}
        
      </>)}
      <br></br>

    </>
  )
}