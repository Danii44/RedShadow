import ContactUsForm from "../form/ContactUsForm";
import Image from "next/image";
import Link from "next/link";

const ContactUsFormArea = () => {
    return (
        <div id="contact" className="tp-contact-area pt-160 pb-110">
            <div className="container">
                <div className="tp-contact-bg">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="tp-contact-author-wrap d-flex align-items-center mb-30">
                                <div className="tp-contact-author-thumb mr-15">
                                    <Image width={60} height={60} src="/assets/img/contact/author.jpg" alt="author" />
                                </div>
                                <div className="tp-contact-author-content">
                                    <h6>Daniyal Ahmad</h6>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tp-contact-info mb-30">
                                <div className="mb-20">
                                    <Link className="tp-contact-tel" href="tel:+923338917021">+92 333 891 7021</Link>
                                </div>
                                <div className="mb-30">
                                    <Link className="tp-contact-mail" href="mailto:hello@redshadowdesigns.com" style={{ fontSize: '24px' }}>
                                        hello@redshadowdesigns.com
                                    </Link>
                                </div>
                                <div className="tp-contact-address mb-30">
                                    <h4>Address</h4>
                                    <Link href="https://www.google.com/maps/search/?api=1&query=2nd+Floor%2C+Plot+6%2C+Main+PWD+Road%2C+PWD+Housing+Society+Sector+C%2C+Islamabad%2C+Pakistan" className="common-underline" target="_blank">2nd Floor, Plot 6, Main PWD Road,<br />PWD Housing Society Sector C,<br />Islamabad, Pakistan</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-contact-form-wrap ml-95 mb-30">
                                <ContactUsForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsFormArea;
