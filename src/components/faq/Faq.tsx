"use client";

import { useState } from "react";
import { studioFaq } from "@/data/faq-data";
import SmartLink from "../common/SmartLink";
import { ArrowIconFour } from "@/svg";
import Image from "next/image";

const StudioFaqArea = () => {
    const [openId, setOpenId] = useState<string | null>(
        studioFaq.find((f) => f.isOpen)?.id || null
    );

    return (
        <div id="faq" className="ca-faq-area pt-135 pb-145">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ca-faq-title-wrap mb-40 tp_fade_anim" data-delay=".3">
                            <span className="ca-team-subtitle text-uppercase d-block mb-15">
                                <span>[ </span>Our Faq<span> ]</span>
                            </span>
                            <Image width={131} height={92} className="mb-10" src="/assets/img/faq/faq-thumb.png" alt="thumb" />

                            <h2 className="ca-section-title mb-15">Have Questions</h2>
                            <p className="tp-faq-dec mb-35">Let us know how we can assist</p>

                            <SmartLink href="/contact-us" className="tp-btn tp-btn-xl tp-btn-grey tp-btn-switch-animation">
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">Contact Me</span>
                                    {[1, 2].map((i) => (
                                        <span key={i} className="btn-icon">
                                            <ArrowIconFour />
                                        </span>
                                    ))}
                                </span>
                            </SmartLink>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="tp-faq ml-115">
                            <div className="accordion" id="accordionExample">
                                {studioFaq.map((item) => {
                                    const isOpen = openId === item.id;
                                    return (
                                        <div key={item.id} className="tp-faq-item tp_fade_anim" data-delay=".3">
                                            <h2 className="accordion-header">
                                                <button
                                                    className={`tp-faq-button ${isOpen ? "" : "collapsed"}`}
                                                    type="button"
                                                    onClick={() => setOpenId(isOpen ? null : item.id)}
                                                    aria-expanded={isOpen}
                                                >
                                                    {item.question}
                                                </button>
                                            </h2>

                                            <div className={`tp-faq-collapse collapse ${isOpen ? "show" : ""}`}>
                                                <div className="tp-faq-body">
                                                    <p>
                                                        {item?.answer?.split("\n").map((line, i) => (
                                                            <span key={i}>
                                                                {line}
                                                                <br />
                                                            </span>
                                                        ))}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudioFaqArea;
