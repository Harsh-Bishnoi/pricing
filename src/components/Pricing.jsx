import React, { useState } from 'react'
import { MONTHLY_DATA } from '../utils/helper'

const Pricing = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className="px-3">
                <div className="max-w-[1140px] mx-auto">
                    <h1 className='font-semibold text-3xl sm:text-4xl md:text-[42px] leading-[130%] text-center text-white'>Simple, Transparent Pricing</h1>
                    <p className='text-lg leading-[160%] text-center text-white opacity-70 mt-4'>Choose the plan that works best for you</p>
                    <div className="max-w-[694px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-5 mx-auto"></div>
                    <div className="max-w-[370px] p-[7px] mt-10.5 border bg-[#0D0D0D] border-[#FFFFFF3D] flex gap-[28px] mx-auto rounded-[100px] shadow-[0px_0px_6.5px_0px_#D74CB661_inset] justify-center">
                        <button onClick={() => setToggle(false)} className={`text-white cursor-pointer font-bold text-lg leading-[140%] px-6 py-2.5 sm:px-8.5 sm:py-[14.5px] rounded-[100px] ${!toggle ? "bg-gradient-to-b from-[#B851E0] to-[#EB489B]" : ""}`}>Monthly</button>
                        <button onClick={() => setToggle(true)} className={`text-white cursor-pointer font-bold text-lg leading-[140%] px-4 py-2 sm:py-[10px] flex items-center rounded-[100px] gap-2 ${toggle ? "bg-gradient-to-b from-[#B851E0] to-[#EB489B]" : ""}`} > Yearly{" "}
                            <span className='font-medium whitespace-nowrap bg-[#D04DBF1F] text-sm leading-[160%] text-white text-center border border-white rounded-[34px] px-[7.5px] py-[1px]'>Save 20%</span>
                        </button>
                    </div>
                    <div className="flex flex-wrap mt-[66px] max-lg:gap-6">
                        {MONTHLY_DATA.map((item, index) => (
                            <div key={index} className={`border md:mb-6 mx-auto max-md:mx-auto border-[#FFFFFF1A] rounded-[20px] backdrop-blur-lg bg-[#040404] w-full p-6 flex flex-col justify-between ${index === 1 ? "z-1 relative border-none bg-[#B81EC90A] shadow-[0px_8px_24px_0px_#42E8E014] border-gradient !max-w-[364px] lg:scale-105 lg:!max-w-[412px]" : "!max-w-[364px] sm:min-h-[575px]"}`}>
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h2 className='text-white text-2xl leading-[100%] font-semibold'>{item.title}</h2>
                                        <div className={`h-[24px] text-white text-[12px] border-gradient relative bg-[#1D0B21] rounded-[30px] w-[103px] flex items-center justify-center ${index === 1 ? "" : "hidden"}`}>{item.popular}</div>
                                    </div>
                                    <div className="flex items-center pt-2.5">
                                        <p className='text-white font-semibold text-[40px] leading-[120%]'>
                                            {toggle ? item.yearDollar : item.monthDollar}
                                        </p>
                                        <p className='text-white text-[32px] leading-[120%]'>
                                            {toggle ? item.year : item.month}
                                        </p>
                                    </div>
                                    <p className='text-white text-lg font-bold leading-[100%] pt-[35px]'>{item.para}</p>
                                    <ul className='pt-1'>
                                        {item.description.map((desc, i) => (
                                            <li className='text-white opacity-70 leading-[160%] pt-4.5 flex items-center gap-[13px]' key={i}>
                                                <desc.icon />
                                                {desc.list}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className={`text-white font-semibold text-lg leading-[160%] px-[80px] sm:px-[100px] py-3.5 rounded-[65px] cursor-pointer mt-6 ${index === 1 ? "bg-gradient-to-b from-[#B851E0] to-[#EB489B] z-1" : "border border-[#B3B3B3] !text-[#B3B3B3] hover:bg-[#E449A4] hover:border-[#E449A4] hover:!text-white transition-all duration-200 ease-linear"}`}>
                                    {item.button}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing