import "./phone.css";
import "keen-slider/keen-slider.min.css"
import Header from "./Header";
import Footer from "./Footer";
import { GrYoutube } from "react-icons/gr";
import { SiAnydesk } from "react-icons/si";
import { IoLogoSkype } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

function Slider(){

    return(
        <div>
            <div className="keen-slider__slide number-slide2">
                <Header />
                <div className="slider2_icons">
                    <div className="youtube_part">
                        <GrYoutube className="youtube_icon" />
                    </div>
                    <div className="skype_part">
                        <IoLogoSkype className="skype_icon" />
                    </div>
                    <div className="anydesk_part">
                        <SiAnydesk className="anydesk_icon" />
                    </div>
                    <div className="linkedin_part">
                        <FaLinkedinIn className="linkedin_icon" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Slider;