import Image from "next/image";
import Link from "next/link";

const contactInfo = {
    title: "Islamabad Office",
    image: "/assets/img/contact/contact-us-thumb-1.jpg",
};

const ContactUsInfoArea = () => {
    return (
        <div className="tp-contact-us-info-area pb-120">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 mb-30">
                            <div
                                className="tp-contact-us-content text-center"
                            >
                                <div className="tp-contact-us-thumb d-flex justify-content-center">
                                    <Image width={378} height={240} src={contactInfo.image} alt={contactInfo.title} />
                                </div>

                                <div className="tp-contact-us-bottom">
                                    <div className="tp-contact-us-info-details">
                                        <h4 className="tp-contact-us-info-title">
                                            {contactInfo.title}
                                        </h4>
                                        <Link href="mailto:hello@redshadowdesigns.com">
                                            hello@redshadowdesigns.com
                                        </Link>
                                        <Link href="tel:+923338917021">
                                            +92 333 891 7021
                                        </Link>
                                    </div>

                                    <div className="tp-contact-us-btn">
                                        <Link
                                            href="https://www.google.com/maps/search/?api=1&query=2nd+Floor%2C+Plot+6%2C+Main+PWD+Road%2C+PWD+Housing+Society+Sector+C%2C+Islamabad%2C+Pakistan"
                                            target="_blank"
                                            className="tp-btn tp-btn-border d-inline-flex align-items-center w-100"
                                        >
                                            <span>
                                                <span className="text-1">View Location</span>
                                                <span className="text-2">View Location</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ContactUsInfoArea;
