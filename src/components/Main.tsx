import React from "react";
import LoginForm from "./LoginForm";

export function Main(): React.ReactElement {

    return (
        <React.Fragment>
            <main>
                <div className="container text-center d-flex align-items-center main--vh">
                    <div className="row flex-grow-1 no-gutters">
                        <div className="col-sm-12 col-md-7 mt-md-5">
                            <h1 className="description mt-4 text-white text-left">Make money driving with Bolt</h1>
                            <p className="mini-description text-left text-white">Become a Bolt driver, set your schedule and earn extra money by driving!</p>
                            <div className="text-white text-left font-weight-bold text-uppercase">
                                <span className="align-items-center letter-space d-sm-none d-md-inline-flex d-none">Learn more
                                    <span className="material-symbols-outlined ml-2">
                                        expand_circle_down
                                    </span>
                                </span>
                            </div>
                        </div>

                        {/* login form */}
                        <div className="col-sm-12 col-md-5 bg-white py-4 px-4 mb-5 rounded-lg text-left mt-lg-0 mt-3 text-muted">
                            <LoginForm />
                        </div>
                        {/* end login form */}
                    </div>
                </div>
            </main>
        </ React.Fragment>
    );
}