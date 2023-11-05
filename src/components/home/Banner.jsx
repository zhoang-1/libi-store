import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import ReactPlayer from 'react-player';

// import './Banner.css';

function Banner() {
    return (
        <div className="banner-main">
            <div className="banner-container">
                <div className="banner-inner mx-[110px] px-[30px] my-[5px] ">
                    <div className="banner-slide1">
                        <Link to="\">
                            <img
                                src="https://web1g.cdn.vccloud.vn/libi/category/banner-02.jpg"
                                alt="libi - bình giữ nhiệt Yeti chính hãng"
                            />
                        </Link>
                    </div>
                    <div className="banner-slide2 border-box w-[100%]  pt-[10px]">
                        <div className="flex flex-row flex-auto justify-between">
                            <div className="items-video w-[calc(50%-5px)]  ">
                                <video
                                    className=" lazyloading overflow-x-clip object-fill"
                                    data-src="https://web1g.cdn.vccloud.vn/libi/video/v8.mp4"
                                    width="2160"
                                    height="3840"
                                    autoplay
                                    muted
                                    controls
                                    poster="https://web1g.cdn.vccloud.vn/libi/element/9x16-1006-ph.webp"
                                    src="https://web1g.cdn.vccloud.vn/libi/video/v8.mp4"
                                />
                            </div>
                            <div className="items-img w-[50%] ml-[5px] flex  flex-col justify-between  object-cover">
                                <Link to="\" className="">
                                    <img
                                        src="https://web1g.cdn.vccloud.vn/libi/element/web-02.jpg"
                                        alt="Ly giữ nhiệt Yeti"
                                        className="h-[544px] w-[620px]"
                                    />
                                </Link>
                                <Link to="\" className="">
                                    <img
                                        src="https://web1g.cdn.vccloud.vn/libi/element/123.jpg"
                                        alt="Ly giữ nhiệt Yeti"
                                        className="h-[544px] w-[620px]"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="banner-slide3 pt-[10px]">
                        <Link to="\">
                            <img
                                src="https://web1g.cdn.vccloud.vn/libi/background/01-1920x720-l.jpg"
                                alt="libi - Ly giữ nhiệt, Bình giữ nhiệt Yeti chính hãng"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
