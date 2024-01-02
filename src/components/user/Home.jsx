import {BrowserRouter, Route, Routes, Link, Outlet, useParams} from 'react-router-dom';
import BusinessData from '../admin/BusinessData';
import Services from '../admin/Service';
import AddMeeting from './AddMeeting';
export default function Home(){
return(
<>
  <header style={{
      position: 'sticky',
      top: 0 // כדי שהקומפוננטה תישאר בראש הדף
    }}>
       <nav>     
        <Link to="/admin">לכניסת מנהל</Link>  
      </nav> 
      <h2>ברוך בואך</h2>

      <BusinessData/>
 </header>
<br/>
<AddMeeting />
<h3>SERVICES</h3>
<Services/>
 <footer>
 </footer>
</>
)}