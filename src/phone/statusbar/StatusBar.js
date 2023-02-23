import "./statusbar.css"
import { MdOutlineMobiledataOff } from "react-icons/md";
import { BsWifi } from "react-icons/bs";
import { IoIosBluetooth } from "react-icons/io";
import { MdFlashlightOn } from "react-icons/md";
import { BsBellSlashFill } from "react-icons/bs";
import { RiScreenshotLine } from "react-icons/ri";
import { IoMdAirplane } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { RiRotateLockLine } from "react-icons/ri";
import { SlCamrecorder } from "react-icons/sl";
import { AiOutlineScan } from "react-icons/ai";
// import { CiRead } from "react-icons/ci";
// import { IoInvertModeOutline } from "react-icons/io5";
// import { MdDarkMode } from "react-icons/md";
// import { RiBatteryChargeFill } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { RiSettingsLine } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
import {useEffect, useState} from "react";

function StatusBar(){

    const [icons,  setIcons] = useState(false);
    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [buttons, setButtons] = useState([
        {
            icon: <MdOutlineMobiledataOff className="btn_icons" />,
            text: "Mobile data",
            p: "Off",
            isActive: false
        },
        {
            icon: <BsWifi className="btn_icons" />,
            text: "Ucom0728",
            p: "Connected",
            isActive: false
        },
        {
            icon: <IoIosBluetooth className="btn_icons" />,
            text: "Bluetooth",
            p: "Off",
            isActive: false
        },
        {
            icon: <MdFlashlightOn className="btn_icons" />,
            text: "Flashlight",
            p: "Off",
            isActive: false
        }
    ])

    const [btnicon, setBtnicon] = useState([
        {
            icon: <BsBellSlashFill className="icons"/>,
        },
        {
            icon: <RiScreenshotLine className="icons"/>,
        },
        {
            icon: <IoMdAirplane className="icons"/>,
        },
        {
            icon: <HiLockClosed className="icons"/>,
        },
        {
            icon: <FaLocationArrow className="icons"/>,
        },
        {
            icon: <RiRotateLockLine className="icons"/>,
        },
        {
            icon: <SlCamrecorder className="icons"/>,
        },
        {
            icon: <AiOutlineScan className="icons"/>,
        },

    ])

    const handleButtonClick = (index) => {
        const parsed = buttons.map((item, i) => {
            if(i === index) return {
                ...item,
            isActive: !item.isActive
            }
            return item
        })
        setButtons(parsed)
    }

    const handleIconClick = (index) => {
        const parsed = btnicon.map((item, i) => {
            if(i === index) return {
                ...item,
                isActive: !item.isActive
            }
            return item
        })
        setBtnicon(parsed)
    }

    useEffect(() => {
        setInterval(() => setTime(new Date()), 30000);
    }, []);

    useEffect(() => {
        setInterval(() => setDate(new Date()), 30000);
    }, []);

    return(
        <div className="status_bar">
            <div className="status_header">
                <span style={{fontSize: "30px", color: "#E4E4E4"}}>
                      {time.toLocaleTimeString('en-GB', {
                          hour: 'numeric',
                          minute: 'numeric',
                      })}
                </span>
                <span style={{fontSize: "12px", marginLeft: "5px", color: "#AEAEAE"}}>
                      {date.toLocaleDateString('en-AM', {
                          weekday: "long",
                          month: 'long',
                          day: 'numeric'
                      })}
                </span>
                <RiSettingsLine className="status_header_icon" />
                <RiEditBoxLine className="status_header_icon" />
            </div>
            <div>
                <div className="btns">
                    {buttons.map((button, index) => {
                        return (
                            <button key={index} onClick={() => handleButtonClick(index) } className={`menu_btn ${ button.isActive ? "change-color" : ""}`}>
                                {button.icon}
                                {button.text}
                                <p>{button.p} </p>
                            </button>
                        )
                    })}
                </div>
                <div className="icons_inner">
                    {btnicon.map((icon, index) => {
                        return (
                            <button key={index} onClick={() => handleIconClick(index) } className={`icons_part ${ icon.isActive ? "change-color" : ""}`}>
                                {icon.icon}
                            </button>
                        )
                    })}
                    <div className="icons_inner_text1" style={{ display: icons ? "flex" : "none" }}>
                        <p className="icons_part_text">Mute</p>
                        <p className="icons_part_text">Screenshot</p>
                        <p className="icons_part_text">Airplane</p>
                        <p className="icons_part_text">Lock</p>
                    </div>
                </div>

                <div className="icons_inner_text2" style={{ display: icons ? "flex" : "none" }}>
                    <p className="icons_part_text">Location</p>
                    <p className="icons_part_text">Lock</p>
                    <p className="icons_part_text">Screen</p>
                    <p className="icons_part_text">Scanner</p>
                </div>
                <div style={{marginTop: "15px",  display: "flex", justifyContent: "space-around"}}>
                    <button className="icons_part"><span className="icons">A</span></button>
                    <div className="auto_light"><MdLightMode className="auto_light_icon"/></div>
                </div>
                <button className="open_close_btn" style={{ display: icons ? "block" : "block" }} onClick={() => setIcons(!icons)}></button>
            </div>
        </div>
    )
}

export default StatusBar;