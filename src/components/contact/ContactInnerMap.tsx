import Image from "next/image";

const ContactInnerMap = () => {
    return (
        <div className="tp-contact-map-ptb p-relative">
            <div className="tp-contact-map-wrapper p-relative">
                <div className="tp-contact-map-icon-box">
                    <div className="tp-contact-map-icon">
                        <span><Image width={24} height={24} src="/assets/img/contact/map-icon.svg" alt="map-icon" /></span>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps?q=2nd%20Floor%2C%20Plot%206%2C%20Main%20PWD%20Road%2C%20PWD%20Housing%20Society%20Sector%20C%2C%20Islamabad%2C%20Pakistan&output=embed" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Red Shadow Designs Islamabad office"></iframe>
            </div>
        </div>
    );
};

export default ContactInnerMap;
