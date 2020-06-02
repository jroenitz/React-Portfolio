import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer id="footer">
            <div className="uk-contianer uk-flex uk-flex-column uk-flex-middle">
                <hr className="uk-divider-small divider" />
                <div>
                    <a href="https://github.com/jroenitz" target="_blank" rel="noopener noreferrer"><span uk-icon="icon: github" className="uk-icon socialLink"></span></a>
                    <a href="https://www.linkedin.com/in/jordan-roenitz/" target="_blank" rel="noopener noreferrer"><span uk-icon="icon: linkedin" className="uk-icon socialLink"></span></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;