import React, {Component} from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Image,
  Segment,
  Form,
  Button,
  Grid,
  Header,
  Message
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />

        <Grid textAlign="center">
          <Grid.Column style={{maxWidth: 450}}>
            <Header as="h2" color="teal" textAlign="center">
              <Image
                src={
                  "https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"
                }
              />{" "}
              Member Login
              <br />
            </Header>

            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email Address"
                />

                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Form.Checkbox label="I Agree to terms and conditions" />

                <Button color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>

            <Message>
              Tidak punya akun ? Silahkan <a href="/">Register</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
