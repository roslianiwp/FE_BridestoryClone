import React, { Fragment } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import "../css/Home.css";
import SignIn from "./SignIn.jsx";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

const KotakLogIn = (props, clickSignUp) => {
  clickSignUp = async () => {
    await props.doSignUp();
    props.history.push("/vendors");
  };

  const responseFacebook = async (response) => {
    await props.logInFB(response);
    const is_login = localStorage.getItem("is_login");
    if (is_login) {
      props.history.push("/vendors");
    }
  };

  const responseGoogle = async (response) => {
    await props.logInGoogle(response);
    const is_login = localStorage.getItem("is_login");
    if (is_login) {
      props.history.push("/vendors");
    }
  };

  return (
    <Fragment>
      <MDBCol md={5} className="d-flex justify-content-end text-center">
        <div className="login">
          <img
            src="https://london.bridestory.com/image/upload/dpr_2.0,f_webp,fl_progressive,q_80,c_fill,g_faces/v1/raw/footer/logo.webp"
            alt="logo"
            id="logo"
          ></img>
          {props.is_signup ? (
            <div className="signupku">
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                What should we call you?
              </p>
              <div style={{ paddingLeft: "70px", paddingRight: "70px" }}>
                <MDBRow>
                  <SignIn {...props} />
                </MDBRow>
                <MDBRow style={{ marginBottom: "20px" }}>
                  <MDBCol md="1">
                    <img
                      src="https://alexandra.bridestory.com/image/upload/assets/on2x-H16TQ8BhX.png"
                      alt="ceklis"
                      style={{ marginRight: "5px" }}
                    />
                  </MDBCol>
                  <MDBCol md="10">
                    <span className="initulisansignup">
                      I'd like to receive promotional mails and <br />{" "}
                      newsletters from Bridestory Inc. and its affiliates.
                    </span>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <div className="text-center">
                    <button
                      className="buton-signup"
                      type="button"
                      onClick={clickSignUp}
                    >
                      Sign Up
                    </button>
                  </div>
                </MDBRow>
                <MDBRow>
                  <p className="tncp">
                    By signing up, you are agree with the{" "}
                    <span className="tncspan">
                      Terms and <br />
                      Conditions
                    </span>{" "}
                    applied.
                  </p>
                </MDBRow>
              </div>
              <div className="join-vendor-signup">
                <p className="join-vendor-tag">
                  Have a wedding business?
                  <span>Join us as a vendor.</span>
                </p>
              </div>
            </div>
          ) : (
            <Fragment>
              <div style={{ paddingRight: "70px", paddingLeft: "70px" }}>
                <p>
                  It takes less than a minute to start your
                  <br /> wedding journey
                </p>
                <p style={{ color: "#555" }}>Login with: </p>
                <MDBRow>
                  <MDBCol md={6}>
                    <FacebookLogin
                      appId="588676948421286"
                      autoLoad={false}
                      callback={responseFacebook}
                      fields="name,picture"
                      render={(renderProps) => (
                        <div className="kotak-kecil-login">
                          <img
                            src="https://alexandra.bridestory.com/image/upload/assets/facebook2x-H10SkJiD8.png"
                            alt="fb"
                            className="fb-google"
                          ></img>
                          <span
                            className="logo-login"
                            onClick={renderProps.onClick}
                          >
                            Facebook
                          </span>
                        </div>
                      )}
                    />
                  </MDBCol>
                  <MDBCol md={6}>
                    <GoogleLogin
                      clientId="7968812398-dcf8ckgcjm1j1np8anjc0nudno4q5ons.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <div className="kotak-kecil-login">
                          <img
                            src="https://alexandra.bridestory.com/image/upload/assets/google-logo2x-rkgZVmis7.png"
                            alt="google"
                            className="fb-google"
                          ></img>
                          <span
                            className="logo-login"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                          >
                            Google
                          </span>
                        </div>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{ marginTop: "10px" }}>
                  <hr
                    style={{
                      width: "42%",
                      textAlign: "left",
                      marginLeft: "0",
                    }}
                  />
                  <span style={{ textAlign: "center", color: "#848484" }}>
                    Or
                  </span>
                  <hr
                    style={{
                      width: "42%",
                      textAlign: "right",
                      marginLeft: "9",
                    }}
                  />
                </MDBRow>
                <MDBRow>
                  <SignIn {...props} />
                </MDBRow>
                <MDBRow>
                  <p className="tncp">
                    By signing up, you are agree with the{" "}
                    <span className="tncspan">
                      Terms and <br />
                      Conditions
                    </span>{" "}
                    applied.
                  </p>
                </MDBRow>
              </div>
              <div className="join-vendor">
                <p className="join-vendor-tag">
                  Have a wedding business?
                  <span>Join us as a vendor.</span>
                </p>
              </div>
            </Fragment>
          )}
        </div>
      </MDBCol>
    </Fragment>
  );
};
export default KotakLogIn;
