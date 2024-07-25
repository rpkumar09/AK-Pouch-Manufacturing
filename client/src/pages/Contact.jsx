import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall,} from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
        <div className="row contactus">
        <div className="col-md-6 ">
          <img
            src="/images/ContactUS.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="contact-header">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : akpouchmanufacturing@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall />1 : +91 9618114878
          </p>
          <p className="mt-3">
            <BiPhoneCall />2 : +91 8919574855
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact;