import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
      <section id="services">
          <h5>What I Offer</h5>
          <h2>Services</h2>
          <div className="container services_container">
              <article className="service">
                  <div className="service_head">
                      <h3>Development</h3>
                  </div>

                  <ul className="service_list">
                      <li className='list_center'>
                          <BiCheck className="service_list-icon" />
                          <p>Progressive Web Applications (PWAs)</p>
                      </li>
                      <li className='list_center' style={{ justifyContent: "normal"}}>
                          <BiCheck className="service_list-icon" />
                          <p>Web Development</p>
                      </li>
                  </ul>
              </article>
          </div>
      </section>
  );
}

export default Services