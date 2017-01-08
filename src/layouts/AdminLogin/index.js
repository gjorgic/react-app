import React from 'react'
import SidebarMenu from '../../components/SidebarMenu';


class Admin extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div data-reactroot="">
			    <header className="navbar navbar-default navbar-fixed-top">
			        <div className="container-fluid">
			            <div className="navbar-header">
			                <a className="navbar-brand"><img alt="Brand" width="" height="40" src="./img/logo.png" />
			                </a>
			                <ul className="nav navbar-nav navbar-right">
			                    <li>
			                        <a href="#">
			                            <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>
			                        </a>
			                    </li>
			                </ul>
			            </div>
			            <div className="collapse navbar-collapse"></div>
			        </div>
			    </header>
			    <section className="container-fluid body-container">
			        <div className="row">
			            <SidebarMenu />
			            <div className="col-sm-offset-3 col-sm-9 col-md-offset-2 col-md-10 content">
			                <div className="page-sub-menu">
			                	<a className="btn btn-primary" href="#/distributors/create">Kreiraj trgovinu</a>
			                </div>
			                <h1>Trgovine</h1>
			            </div>
			        </div>
			    </section>
			    <footer></footer>
			    <div className="splash-screen">
			        <div></div><img src="/tehno-min/img/logo.png" />
			    </div>
			</div>);
	}
}

export default Admin;