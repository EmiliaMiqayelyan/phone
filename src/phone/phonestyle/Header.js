import "./phone.css";
import {TbBellRinging, TbWifi} from "react-icons/tb";
import {FaSignal} from "react-icons/fa";
import {IoBatteryHalfOutline} from "react-icons/io5";
import {useEffect, useState} from "react";
function Header(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date()), 30000);
    }, []);

    return(
        <div>
            <div className="header_part">
                <div className="header_left_part">
                        <span style={{fontSize: "13px", fontWeight: "bold"}}>
                            {time.toLocaleTimeString('en-GB', {
                                hour: 'numeric',
                                minute: 'numeric',
                            })}
                        </span>
                    <TbBellRinging />
                </div>
                <div className="camera">
                    <div className="main-camera">
                        <div className="small_camera"></div>
                    </div>
                </div>
                <div className="header_right_part">
                    <FaSignal style={{width: "13px"}} />
                    <TbWifi />
                    <IoBatteryHalfOutline />
                </div>
            </div>
        </div>
    )
}

export default Header;