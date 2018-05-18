import React, { Component } from "react";
import Claire from "../images/Claire.jpg"
import Luis from "../images/Luis.JPG"
import Khusanboy from "../images/Khusanboy_portfolio.png"
import Annie from "../images/Annie.jpg"
import Arthur from "../images/Arthur.PNG"
class About extends React.Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-md-8">
                        <div class="row ">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-2 col-xs-2 col-md-offset-2 about-us team-img">
                                <img src={Claire} class="img-circle" alt="Cinque Terre" width="150px" height="136px" />
                                <h2 class="team-names">
                                    <b>Claire Furino</b>
                                    <br />
                                    <a href="https://github.com/clairefurino88" target="blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/claire-f-bb803b154/" target="blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </h2>
                                <h5 style={{ fontSize: "13px", color: "rgb(83, 78, 78)" }}> Clairefurino88@gmail.com</h5>
                            </div>
                            <div class="col-sm-2 col-xs-2 about-us team-img">
                                <img src={Luis} class="img-circle" alt="Cinque Terre" width="150px" height="136px" />
                                <h2 class="team-names">
                                    <b>Luis Morel</b>
                                    <br />
                                    <a href="https://github.com/LMorel77" target="blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/khusanboy-ibragimov-9182b437/" target="blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </h2>
                                <h5 style={{ fontSize: "13px", color: "rgb(83, 78, 78)" }}> luis.morel@gmail.com</h5>
                            </div>
                            <div class="col-sm-2 col-xs-2 about-us team-img">
                                <img src={Khusanboy} class="img-circle " alt="Cinque Terre" width="150px" height="136px" />
                                <h2 class="team-names">
                                    <b>Khusanboy Ibragimov</b>
                                    <br />
                                    <a href="https://github.com/khusanboyIbragimov" target="blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/khusanboy-ibragimov-9182b437/" target="blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </h2>
                                <h5 style={{ fontSize: "13px", color: "rgb(83, 78, 78)" }}> mail4khusanboy@gmail.com</h5>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-sm-2 col-xs-2 col-md-offset-4 about-us team-img">
                                <img src={Arthur} class="img-circle" alt="Cinque Terre" width="150px" height="136px" />
                                <h2 class="team-names">
                                    <b>Arthur Carvalho</b>
                                    <br />
                                    <a href="https://github.com/amcarv" target="blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/khusanboy-ibragimov-9182b437/" target="blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </h2>
                                <h5 style={{ fontSize: "13px", color: "rgb(83, 78, 78)" }}> arthurmc1996@gmail.com</h5>
                            </div>
                            <div class=" col-sm-2 col-xs-2 about-us team-img">
                                <a href="" target="blank"></a>
                                <img src={Annie} class="img-circle" alt="Cinque Terre" width="150px" height="136px" />
                                <h2 class="team-names">
                                    <b>Annie Schaefer</b>
                                    <br />
                                    <a href="https://github.com/annietanbeehoon" target="blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/annietschaefer/" target="blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </h2>
                                <h5 style={{ fontSize: "13px", color: "rgb(83, 78, 78)" }}> annietschaefer@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <a class="twitter-timeline" data-width="270" data-height="470" href="https://twitter.com/hate_and_date?ref_src=twsrc%5Etfw">Tweets by hate_and_date</a>
                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                </div>
                <video autoplay loop id="video-background" muted plays-inline>
                    <source src="/img/473287184.mp4" type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default About;