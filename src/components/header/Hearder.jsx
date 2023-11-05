import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { navbars } from '../../utils/navbars';

function Hearder() {
    return (
        <div className="header border-box text-white bg-[#292d31]">
            <div className="wrapper-top ">
                <div className="inner mx-[110px] px-[30px]">
                    <div className="border-box text-[#a7a9aa] text-[16px]  leading-[24px] py-[5px] items-center text-right">
                        <Link to="\" className="">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                            <span className="text-[15px]">Hotline:</span>
                            <span className="text-white">0389 670 921</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="wrapper-bottom border-box w-[100%]  my-[0px] mx-auto border-t-[1px] border-solid border-[#a7a9aa]">
                <div className="inner  mx-[110px] px-[30px] ">
                    <div className="flex flex-row justify-between items-center h-[60px]  text-[15px]">
                        <div className="logo w-[10%]">
                            <Link to="\">
                                <img
                                    src="https://libi.vn/app/images/logo.png"
                                    alt=""
                                    className="w-[100px] h-[40px] object-contain"
                                />
                            </Link>
                        </div>
                        <div className="navbar w-[70%] ">
                            <ul className="flex flex-row justify-center bg-transparent ">
                                {navbars.map((navbar, index) => (
                                    <li key={index} className="px-[10px] py-[10px]  hover:text-[#ffe4c4] ">
                                        <Link to={`${navbar.link}`}>{navbar.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="search border-box w-[10%]  border-x-[1px] border-solid border-[#a7a9aa]">
                            <button className="searcher flex flex-row justify-center content-center m-auto py-[20px]">
                                <FontAwesomeIcon icon={faSearch} className="text-[20px]" />
                                <span className="text-[#fff] block font-light ml-[6px] opacity-60   text-[15px]">
                                    Tìm kiếm
                                </span>
                            </button>
                        </div>
                        <div className="cart border-box w-[10%] border-r-[1px] border-solid border-[#a7a9aa]   ">
                            <Link to="\" className="flex  flex-row justify-center content-center py-[20px] relative">
                                <FontAwesomeIcon icon={faCartShopping} className="text-[20px] text-center" />
                                <span className="cart text-[#fff] block font-light ml-[6px] opacity-60   text-[15px]">
                                    Giỏ hàng
                                </span>
                                <span className="bg-[rgba(255,255,255,.2)] text-[14px] leading-normal px-[5px]  absolute right-0 top-0">
                                    0
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hearder;
