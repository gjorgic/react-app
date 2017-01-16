import React from 'react'
import SidebarMenu from '../../components/SidebarMenu';


class AdminLogin extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div data-reactroot="">
			    <section className="container-fluid body-container">
				    <div className="panel panel-primary form-signin">
					    <div className="panel-heading">
					        <h2 className="form-signin-heading">Please sign in</h2>
					    </div>
					    <div className="panel-body">
					        <form>
					            <div className="form-group">
					                <label for="inputEmail">Username</label>
					                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="username" />
					            </div>
					            <div className="form-group">
					                <label for="inputPassword">Password</label>
					                <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" />
					            </div>
					            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
					        </form>
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

export default AdminLogin;