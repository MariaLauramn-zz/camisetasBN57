import * as React from "react";
import './login.scss';
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

export const Login = () => {
    return (<div className="principal">
            <Container>
                <div className="contenedor">
                    <div className="form-box">
                        <div className="header-form">
                            <h4 className="text-primary text-center"><i className="fa fa-user-circle"
                                                                        style={{fontSize: "110px"}}></i></h4>
                            <div className="image">
                            </div>
                        </div>
                        <div className="body-form">
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Password"/>
                                </div>
                                <Link to="/tabla">
                                    <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
                                </Link>
                                <div className="message">
                                    <div><input type="checkbox"/> Remember ME</div>
                                    <div><a href="#">Forgot your password</a></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}