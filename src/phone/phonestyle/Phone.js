import "./phone.css"
import { useState,  useEffect } from "react";
import StatusBar from "../statusbar/StatusBar";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Slider from "./Slider";
import Footer from "./Footer";
import { useDrag } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web';
import Header from "./Header";

const BOTTOM_POINT = window.innerHeight - 30;

function  Phone(){

    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [mainTemp, setMainTemp] = useState("");
    const [iconID, setIconID] = useState("");
    const [main,setMain] = useState('');
    const [bar, setBar] = useState(false);
    const key = "a95c7b39ba6b334ccbe77ad085ad0b92";


    const posHandle = useSpring({ y: 0 });

    const bindHandle = useDrag((params) => {
        if (params.dragging) {
            if (params.xy[1] > 0 && params.xy[1] < BOTTOM_POINT) {
                posHandle.y.set(params.xy[1]);
            }
        } else {
            if (params.xy[1] < BOTTOM_POINT / 2) {
                posHandle.y.start(0);
            } else {
                posHandle.y.start(BOTTOM_POINT);
            }
        }
    }, {
        bounds: { top: 0, bottom: BOTTOM_POINT },
    });

    useEffect(() => {
        setInterval(() => setTime(new Date()), 30000);
    }, []);

    useEffect(() => {
        setInterval(() => setDate(new Date()), 30000);
    }, []);

    useEffect(() => {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=" +
            key +
            "&units=metric"
        )
            .then((res) => res.json())
            .then((data) => {
                setMainTemp(data.main.temp);
                setMain(data.weather[0].main);
                setIconID(data.weather[0].icon);
            });
    }, []);

    const [sliderRef] = useKeenSlider();

    return(
        <>
        <div className="phone">
            <div className="phone_content">
                <animated.div {...bindHandle()} style={{
                    y: posHandle.y,
                    touchAction: 'none',
                }} className="App-handle-container">
                    <div className="App-handle" />
                </animated.div>
                <div className="animated_div">
                    <animated.div className="div_div" style={{
                        y: posHandle.y,
                    }}>
                        <StatusBar />
                    </animated.div>
                </div>
                <div style={{ display: bar ? "block" : "none"}}>
                    <StatusBar />
                </div>
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                    <div>
                        <Header />
                    </div>
                <div className="time_date">
                    <div>
                        <p className="time">
                            {time.toLocaleTimeString('en-GB', {
                                hour: 'numeric',
                                minute: 'numeric',
                            })}
                        </p>
                        <span className="date">
                            {date.toLocaleDateString('en-AM', {
                            month: 'long',
                            day: 'numeric',
                            weekday: "short"
                        })}
                        </span>
                    </div>
                    <div>
                        <img
                            style={{width: "48px"}}
                            alt=""
                            src={"http://openweathermap.org/img/wn/10d@2x.png"}
                        />
                        <div>
                            <span style={{fontSize: "10px"}}>{main}    </span>
                            <span className="weather_icon">{mainTemp}<sup>o</sup>C</span>
                        </div>
                    </div>
                </div>
                <div className="loudspeaker"></div>
                <div className="voice"></div>
                <div className="off_on"></div>
               <div><Footer /></div>
                    </div>
                    <div><Slider/></div>
                </div>
            </div>
        </div>
        <div className="phone_back">
            <div className="phone_back_camera">
                <div className="phone_back_main_camera">
                    <div className="camera_part">
                        <div className="back_camera">
                            <div className="main_back_camera">
                                <div className="first_back_camera"></div>
                            </div>
                        </div>
                        <div style={{fontSize: "8px", color: "#E4F4FE"}}>50 MP CAMERA</div>
                    </div>
                    <div className="back_cameras">
                        <div className="back_cameras_part1">
                            <div className="first_camera">
                                <div className="main_first_camera">
                                    <div className="first_small_camera"></div>
                                </div>
                            </div>
                            <div className="light">
                                <div className="light_part"></div>
                            </div>
                        </div>
                        <div className="back_cameras_part2">
                            <div className="second_camera">
                                <div className="main_second_camera">
                                    <div className="second_small_camera"></div>
                                </div>
                            </div>
                            <div className="third_camera">
                                <div className="main_third_camera">
                                    <div className="third_small_camera"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span style={{color: "white", fontWeight: "400", fontSize: "10px"}}>AI-CAM</span>
                <p style={{color: "white", margin: "0px", fontSize: "7px",  fontWeight: "500"}}>PHOTOGRAPHY SYSTEM</p>
            </div>
            <div className="phone_name">
                <p>Redmi</p>
            </div>
            <div className="about_phone">
                <img className="ce_icon" style={{width: "35px", height: "35px"}} src="https://cdn-icons-png.flaticon.com/512/1798/1798045.png" alt="" />
                <div style={{width: "190px", fontSize: "7px", fontWeight: "100"}}>
                   <p style={{margin: "0px", color: "#E4F4FE"}}>Made in China Model: 21061119AG </p>
                   <p style={{margin: "0px", color: "#E4F4FE"}}>Xiaomi Communications Co., Ltd.</p>
                   <p style={{margin: "0px", color: "#E4F4FE"}}>Powered by Redmi</p>
               </div>
            </div>
        </div>

        </>
    )
}

export default  Phone;