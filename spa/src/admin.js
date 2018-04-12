import React, { Component } from "react";
import '../public/admin-theme/assets/css/normalize.css';  
import '../public/admin-theme/assets/css/font-awesome.min.css';  
import '../public/admin-theme/assets/css/themify-icons.css';  
import '../public/admin-theme/assets/css/flag-icon.min.css';  
import '../public/admin-theme/assets/css/cs-skin-elastic.css';  
import '../public/admin-theme/assets/scss/style.css'; 

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";
import Login from "./login";

import { withRouter } from "react-router-dom";

class Admin extends Component {

  constructor(props) {
    super(props)
    this.changePage = this.changePage.bind(this)
    this.changePage2 = this.changePage2.bind(this)
    this.logout = this.logout.bind(this)

    //this is called every time the route changes. 
    //Here we will check user authentication.
    this.props.history.listen((location, action) => {
      debugger;  
      var user = null;
      if(sessionStorage.user) 
         user = JSON.parse(sessionStorage.user);
      if(!user || !user.isLoggedIn){
        this.props.updateLoginState(false); //isloggedin = false
      }
      //else this.props.updateLoginState(false); //isloggedin = false
    });
  }

  changePage(){
    debugger;
    this.props.history.push('/page1');
    }

  changePage2(){
    debugger;
    this.props.history.push('/page2');
    }

  logout(){
    sessionStorage.removeItem('user');
    this.props.updateLoginState(false);
  }

  render() {   
    return (
      <div style={{width:'100%', display: 'table'}}>
        <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">

            <div className="navbar-header">
                <a className="navbar-brand" href="#">Welcome {this.props.userName}!</a>
                <a className="navbar-brand hidden" href="./"></a>
            </div>

            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="index.html"> <i className="menu-icon fa fa-dashboard"></i>Dashboard </a>
                    </li>
                    <h3 className="menu-title">UI elements</h3>
                    
                    <li className="menu-item-has-children active dropdown">
                    <a onClick={this.changePage}> <i className="menu-icon fa fa-laptop"></i>Page 1 </a>                                                            
                    </li>
                    
                    <li className="menu-item-has-children dropdown">
                        <a onClick={this.changePage2} className="dropdown-toggle" > <i className="menu-icon fa fa-table"></i>Page 2 </a>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Forms</a>
                    </li>

                    <h3 className="menu-title">Icons</h3>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-tasks"></i>Icons</a>
                    </li>
                    <li>
                        <a href="widgets.html"> <i className="menu-icon ti-email"></i>Widgets </a>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart"></i>Charts</a>
                    </li>

                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>Maps</a>
                    </li>
                    <h3 className="menu-title">Extras</h3>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-glass"></i>Pages</a>
                    </li>

                    <h3 className="menu-title">Settings</h3>
                    <li className="menu-item-has-children dropdown">
                        <a href="#" onClick={this.logout} className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-exclamation-circle"></i>Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>



    <div id="right-panel" className="right-panel">

        <header id="header" className="header">

            <div className="header-menu">

                <div className="col-sm-7">
                    <a id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-tasks"></i></a>
                    <div className="header-left">
                        <button className="search-trigger"><i className="fa fa-search"></i></button>
                        <div className="form-inline">
                            <form className="search-form">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                                <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                            </form>
                        </div>

                        <div className="dropdown for-notification">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bell"></i>
                            <span className="count bg-danger">5</span>
                          </button>
                          <div className="dropdown-menu" aria-labelledby="notification">
                            <p className="red">You have 3 Notification</p>
                            <a className="dropdown-item media bg-flat-color-1" href="#">
                                <i className="fa fa-check"></i>
                                <p>Server #1 overloaded.</p>
                            </a>
                            <a className="dropdown-item media bg-flat-color-4" href="#">
                                <i className="fa fa-info"></i>
                                <p>Server #2 overloaded.</p>
                            </a>
                            <a className="dropdown-item media bg-flat-color-5" href="#">
                                <i className="fa fa-warning"></i>
                                <p>Server #3 overloaded.</p>
                            </a>
                          </div>
                        </div>

                        <div className="dropdown for-message">
                          <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="message"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ti-email"></i>
                            <span className="count bg-primary">9</span>
                          </button>
                          <div className="dropdown-menu" aria-labelledby="message">
                            <p className="red">You have 4 Mails</p>
                            <a className="dropdown-item media bg-flat-color-1" href="#">
                                <span className="photo media-left"><img alt="avatar" src="images/avatar/1.jpg" /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Jonathan Smith</span>
                                    <span className="time float-right">Just now</span>
                                        <p>Hello, this is an example msg</p>
                                </span>
                            </a>
                            <a className="dropdown-item media bg-flat-color-4" href="#">
                                <span className="photo media-left"><img alt="avatar" src="images/avatar/2.jpg" /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Jack Sanders</span>
                                    <span className="time float-right">5 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                            </a>
                            <a className="dropdown-item media bg-flat-color-5" href="#">
                                <span className="photo media-left"><img alt="avatar" src="images/avatar/3.jpg" /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Cheryl Wheeler</span>
                                    <span className="time float-right">10 minutes ago</span>
                                        <p>Hello, this is an example msg</p>
                                </span>
                            </a>
                            <a className="dropdown-item media bg-flat-color-3" href="#">
                                <span className="photo media-left"><img alt="avatar" src="images/avatar/4.jpg" /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Rachel Santos</span>
                                    <span className="time float-right">15 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                            </a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>

        <div className="breadcrumbs">
            <div className="col-sm-4">
                <div className="page-header float-left">
                    <div className="page-title">
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="page-header float-right">
                    <div className="page-title">
                        <ol className="breadcrumb text-right">
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">UI Elements</a></li>
                            <li className="active">Badges</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div className="content mt-3">
            <div className="animated fadeIn">
                <div className="row">
                  <div className="col-md-12">

                    <div className="animated fadeIn">
                      <Route exact path="/" component={Page1}/>
                      <Route path="/page1" component={Page1}/>
                      <Route path="/page2" component={Page2}/>
                    </div> 

                  </div>
                </div>
            </div>
        </div>


    </div>



      </div>
    );
  }
}
 
//export default Admin;
export default withRouter(Admin);