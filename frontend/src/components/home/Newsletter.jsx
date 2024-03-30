import React from 'react';

export default function Newsletter() {
    return (
        <section>  
            <div className="relative m-5 bg-redcard-color rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

                <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                    <svg width="428" height="298" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="32.553%" r="92.031%" id="ni-a">
                                <stop stopColor="#DFDFDF" offset="5%" />
                                <stop stopColor="#4C4C4C" offset="45.317%" />
                                <stop stopColor="#00000" offset="60%" />
                            </radialGradient>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                        <g fill="#FFF">
                            <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                            <ellipse fillOpacity=".4" cx="100" cy="68.402" rx="3" ry="3" />
                            <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                            <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                            <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                            <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                            <ellipse fillOpacity=".6" cx="70" cy="17.072" rx="2" ry="1.947" />
                            <ellipse fillOpacity=".05" cx="185" cy="15.576" rx="16" ry="15.576" />
                            <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                        </g>
                        <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                        </g>
                    </svg>
                </div>

                <div className="relative flex flex-col lg:flex-row justify-between items-center">
                
                <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="text-2xl font-bold text-white mb-1">Want news and bonus?</h3>
                    <p className="text-gray-300 text-lg mb-6">Subscribe in our newsletter and stay on top of everything.</p>
                    
                    <form className="w-full lg:w-auto">
                        <div className="flex flex-row gap-3">
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto text-white rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 outline-none sm:text-sm"
                                placeholder="Your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-gray-300 mt-3">No spam, you can unsubscribe at any time.</p>
                    </form>
                </div>
                </div>
            </div>
        </section>
    );
}