import * as React from "react";
export default function Email(props: any) {
    return(
        <>
        <div id="call-to-action" role="note" aria-label="alert messages for customers" className="fullwidth clear">
    <div className="container mobile-w-pad"><strong>{props.c_countact}</strong>
      <ul className="callout-buttons clear">
        <li><a href="tel:+18777736605" title="Button link to Call (877) 773-6605">Call (877) 773-6605</a></li>
        <li><a href="https://www.epnb.com/contact-enb/" title="Button link to Email Us">Email Us</a></li>
      </ul>
    </div>
  </div>
        
        
        </>
    )
}