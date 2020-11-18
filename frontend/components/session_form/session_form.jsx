import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      last_name: "",
      first_name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === 'signup'){
      let title = 'Sign up';
      return (
        <div className="signup">
          <form className="signup_form" onSubmit={this.handleSubmit}>
            <h2>{`${title}`}</h2>
            <br />
            Already Have An Account? {this.props.navLink}
            {this.renderErrors()}
            <div>
              <br/>
              <input 
                type="text" 
                placeholder="First name"
                value={this.state.first_name}
                onChange={this.update('first_name')}
              />
              <br/>
              <input
                type="text"
                placeholder="Last name"
                value={this.state.last_name}
                onChange={this.update('last_name')}
              />
              <br/>
              <input
                type="text"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.update('email')}
              />
              <br/>
              <input
                type="password"
                placeholder="Password (8+ characters)"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </div>
            <button>CREATE AN ACCOUNT</button>
          </form>
          <br/>
        </div>
      )
    } else {
      let title = 'Log in';
      return (
        <div className="login_container" >

          <form className="login_form_box" onSubmit={this.handleSubmit}>
            <h2 className="form_title">{`${title}`}</h2>
            <br />
            <h3>New To Headspace?</h3> {this.props.navLink}
            {this.renderErrors()}
            <div>
              <br/>
              <input
                type="text"
                className="login_input"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.update('email')}
              />
              <br/>
              <input
                type="password"
                className="login_input"
                placeholder="Password (8+ characters)"
                value={this.state.password}
                onChange={this.update('password')}
              />
              <br/>
              <button className="form_submit">LOG IN</button>
            </div>
          </form>
          <br/>
        </div>
      );
    }

  }

  
}

export default SessionForm;