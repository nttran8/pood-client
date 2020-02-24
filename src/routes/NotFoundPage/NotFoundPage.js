// Library
import React, { Component } from "react";

// Component
import { CreateButton } from "../../components/Utils/Utils";

// Style
import "./NotFoundPage.css";

export default class NotFoundPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleHomePageRedirect = () => {
    // Redirect user to home/login page when user click Back to Home button
    const { history } = this.props;
    history.push("/");
  };

  render() {
    return (
      <section className="NotFoundPage">
        <h2 className="FourOhFour">404</h2>
        <p>Poop. There's nothing here...</p>
        <div className="FourOhFourButton">
          <CreateButton onClick={this.handleHomePageRedirect}>
            Back to home
          </CreateButton>
        </div>
      </section>
    );
  }
}
