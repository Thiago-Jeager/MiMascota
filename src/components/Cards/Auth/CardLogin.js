import { Component } from "react";
import { Link } from "react-router-dom";
import background from "../../../assets/img/register_bg_2.png";
import GitHubsvg from "../../../assets/svg/github.svg";
import Googlesvg from "../../../assets/svg/google.svg";

class CardLogin extends Component {
  render() {
    return (
      <div
        className="d-flex align-items-center justify-content-center vh-100"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#1E293B"
        }}
      >
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-6 col-sm-8">
              <div className="shadow-lg p-4 rounded" style={{backgroundColor:"#E2E8F0"}}  >
                <div className="text-center">
                  <h6 className="text-muted fw-bold">Sign in with</h6>
                  <div className="d-flex flex-wrap justify-content-center mt-3">
                    <button className="btn btn-light mx-2 shadow-sm">
                      <img
                        alt="Github"
                        className="me-2"
                        src={GitHubsvg}
                        width="20"
                      />
                      Github
                    </button>
                    <button className="btn btn-light mx-2 shadow-sm">
                      <img
                        alt="Google"
                        className="me-2"
                        src={Googlesvg}
                        width="20"
                      />
                      Google
                    </button>
                  </div>
                </div>

                <div className="">
                  <p className="text-center text-muted fw-bold">
                    Or sign in with credentials
                  </p>
                  <form>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>

                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-dark w-100 shadow-sm"
                    >
                      Sign In
                    </button>
                  </form>
                </div>

              </div>
                <div className=" d-flex justify-content-between bg-transparent mt-5 text-white" >
                  <a href="#forgot-password" className="text-white">
                    Forgot password?
                  </a>
                  <Link to="/auth/register" className="text-white" >
                    Create new account
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardLogin;
