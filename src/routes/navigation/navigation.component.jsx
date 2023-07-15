import { Outlet } from "react-router-dom"
import {Fragment} from 'react';
const Navigation = () => (
  <Fragment>
    <div className="Navigation"> 
      <h1>I am the Navigation Bar</h1>
    </div>
    <Outlet />
  </Fragment>
)

export default Navigation;