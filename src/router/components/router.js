import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Controller from "../containers/controller_cont";
import Login from "../../auth/container/logincont";
import Loginotp from "../../auth/container/loginotpcont";
// import Dahboard from "../../pages/admin/dashbord/container/batteryCont";
import Drawer_option_con from "../containers/drawer_cont";


//Admin
import Organization from "../../../src/auth/container/organizationCont";
import Vieworg from "../../../src/auth/container/vieworgCont";
import Error from "../../404";
import Product from "../../pages/product/Admin/Component/product";
import Employee from "../../pages/employee/Admin/Components/Employee";
import Header from '../../../src/common/navbar/header';
import Home from "../../pages/Home/home";


//Executive



//Manager



class Routers extends Component {
  render() {
    const { login, onLogout } = this.props;
    let body;

    if (login.isHome) {
      body = (
        <div>
          <main
            style={{
              flexGrow: 1,
            }}
          >
            <Controller />
            <Routes>
              {/* <Route exact path="/Product" element={<Product />} /> */}
              <Route exact path="/header" element={<Header />} />
              <Route exact path="/home" element={ <><Header/> <Home /></> } />
              <Route exact path="/" element={<Login />} />
              <Route exact path="/loginotp" element={<Loginotp />} />
              <Route  exact path ="/Employee" element ={<><Employee/></>}/>
            
              <Route exact path="*" element={<Error />} />
            </Routes>

          </main>
        </div>
      );
    }
    else if (login.orgHome) {
      if (login.usertype === "A") {
        body = (
          <div
            style={{
              // display: "flex",
            }}
          >
            <Drawer_option_con type={login.type} onLogout={onLogout} name={login.name} />
            <main
              style={{
                flexGrow: 1,
                marginTop: 20,
                marginLeft: 250
              }}
            >
              <Controller />
              <Routes>
                {/* <Route exact path="/" element={<Dahboard />} /> */}
              </Routes>
            </main>
          </div>
        );
      }
    }
    else {
      body = (
        <div
        >
          <main>
            <Controller />
            <Routes>
              <Route exact path="/" element={<><Vieworg /></>} />
              <Route exact path="/organization" element={<><Organization /></>} />
            </Routes>
          </main>
        </div>
      );
    }
    return <Router>{body}</Router>;
  }
}

export default Routers;
