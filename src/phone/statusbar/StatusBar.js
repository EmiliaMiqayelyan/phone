import "./statusbar.css";
import { useEffect, useState } from "react";
import { BsWifi, BsBellSlashFill } from "react-icons/bs";
import { IoIosBluetooth, IoMdAirplane } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { SlCamrecorder } from "react-icons/sl";
import { AiOutlineScan } from "react-icons/ai";
import {
  MdOutlineMobiledataOff,
  MdLightMode,
  MdFlashlightOn,
} from "react-icons/md";
import {
  RiScreenshotLine,
  RiRotateLockLine,
  RiSettingsLine,
  RiEditBoxLine,
} from "react-icons/ri";
import Header from "../phonestyle/Header";

function StatusBar() {
  const [icons, setIcons] = useState(false);
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [buttons, setButtons] = useState([
    {
      icon: <MdOutlineMobiledataOff className="btn_icons" />,
      text: "Mobile data",
      p: "Off",
      isActive: false,
    },
    {
      icon: <BsWifi className="btn_icons" />,
      text: "Ucom0728",
      p: "Connected",
      isActive: false,
    },
    {
      icon: <IoIosBluetooth className="btn_icons" />,
      text: "Bluetooth",
      p: "Off",
      isActive: false,
    },
    {
      icon: <MdFlashlightOn className="btn_icons" />,
      text: "Flashlight",
      p: "Off",
      isActive: false,
    },
  ]);

  const [btnIcon, setBtnIcon] = useState([
    {
      icon: <BsBellSlashFill className="icons" />,
      isActive: false,
    },
    {
      icon: <RiScreenshotLine className="icons" />,
      isActive: false,
    },
    {
      icon: <IoMdAirplane className="icons" />,
      isActive: false,
    },
    {
      icon: <HiLockClosed className="icons" />,
      isActive: false,
    },
    {
      icon: <FaLocationArrow className="icons" />,
      isActive: false,
    },
    {
      icon: <RiRotateLockLine className="icons" />,
      isActive: false,
    },
    {
      icon: <SlCamrecorder className="icons" />,
      isActive: false,
    },
    {
      icon: <AiOutlineScan className="icons" />,
      isActive: false,
    },
  ]);

  const handleButtonClick = (index) => {
    const parsed = buttons.map((item, i) => {
      if (i === index)
        return {
          ...item,
          isActive: !item.isActive,
        };
      return item;
    });
    setButtons(parsed);
  };

  const handleIconClick = (index) => {
    const parsed = btnIcon.map((item, i) => {
      if (i === index)
        return {
          ...item,
          isActive: !item.isActive,
        };
      return item;
    });
    setBtnIcon(parsed);
  };

  useEffect(() => {
    setInterval(() => setTime(new Date()), 30000);
  }, []);

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  return (
    <div className="status_bar">
      <div className="status_header">
        <div>
          <span style={{ fontSize: "30px", color: "#E4E4E4" }}>
            {time.toLocaleTimeString("en-GB", {
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
          <span
            style={{ fontSize: "12px", marginLeft: "5px", color: "#AEAEAE" }}
          >
            {date.toLocaleDateString("en-AM", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        <div>
          <RiSettingsLine className="status_header_icon" />
          <RiEditBoxLine className="status_header_icon" />
        </div>
      </div>
      <div>
        <div className="btns">
          {buttons.map((button, index) => {
            return (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`menu_btn ${button.isActive ? "change-color" : ""}`}
              >
                {button.icon}
                {button.text}
                <p>{button.p}</p>
              </button>
            );
          })}
        </div>
        <div className="icons_inner">
          {btnIcon.map((icon, index) => {
            return (
              <>
                <button
                  key={index}
                  onClick={() => handleIconClick(index)}
                  className={`icons_part menu_btn ${
                    icon.isActive ? "change-color" : ""
                  }`}
                >
                  {icon.icon}
                </button>
              </>
            );
          })}
          <div
            className="icons_inner_text1"
            style={{ display: icons ? "flex" : "none" }}
          >
            <p className="icons_part_text">Mute</p>
            <p className="icons_part_text">Screenshot</p>
            <p className="icons_part_text">Airplane</p>
            <p className="icons_part_text">Lock</p>
          </div>
        </div>

        <div
          className="icons_inner_text2"
          style={{ display: icons ? "flex" : "none" }}
        >
          <p className="icons_part_text">Location</p>
          <p className="icons_part_text">Lock</p>
          <p className="icons_part_text">Screen</p>
          <p className="icons_part_text">Scanner</p>
        </div>
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button className="icons_part">
            <span className="icons">A</span>
          </button>
          <div className="auto_light">
            <MdLightMode className="auto_light_icon" />
          </div>
        </div>
        <button
          className="open_close_btn"
          style={{ display: icons ? "block" : "block" }}
          onClick={() => setIcons(!icons)}
        ></button>
      </div>
    </div>
  );
}
export default StatusBar;
