import React from 'react'
import Image from 'next/image'
import {section_container,section_mini_container,section_links,section_paragraphs,section_two,section_two_container,section_three,section_three_container,section_three_mini_container,footer,footer_container}  from '../styles/homePage.module.css'

const certification = () => {
    return (
        <>
            <section className={section_three}>
                <h1>CERTIFICATION</h1>
                <Image src="/images/fc.jpg" alt="" width={570} height={400}/>
                <Image src="/images/ifc.jpg" alt="" width={500} height={400}/>
            </section>
            <section className={section_three} style={{padding:"10px 20px"}}>
            <h1>Our Features</h1>
						<p className={section_paragraphs}>
							Cryptocurrency is the simplest way to exchange money online at very low cost and our company provide a good investment service which entails
						</p>
            <div className={section_three_container}>
              <div className={section_three_mini_container}>
                <a className={section_links} href="#"><h4 ><span style={{marginRight:"10px"}}><Image src="/images/user.png" alt="" width={20} height={20}/></span>Investment privacy.</h4></a>
                <p className={section_paragraphs}>
                  We respect your privacy, we never share any of your information to any third party at any circumstance,CRYPTO CLOUD HASHING system also design to auto remove your data once your payout complete. So don’t worry you are working on a fully on a fully secured investment platform.
                </p>
              </div>
              <div className={section_three_mini_container}>
                <a className={section_links} href="#"><h4 ><span style={{marginRight:"10px"}}><Image src="/images/credit-card.png" alt="" width={20} height={20}/></span>Trusted Bitcoin Company</h4></a>
                <p className={section_paragraphs}>
                  CRYPTO CLOUD HASHING is trusted brand under “BITCOIN BLOCK LIMITED” we are expert in making profit using Bitcoin,  altcoins and many other cryptocurrency Under crypto cloud hashing company we are providing multiple cryptocurrency investment solutions with full trust.</p>
              </div>
              <div className={section_three_mini_container}>
                <a className={section_links} href="#"><h4 ><span style={{marginRight:"10px"}}><Image src="/images/rocket.png" alt="" width={20} height={20}/></span>Rapidly Growing System</h4></a>
                <p className={section_paragraphs}>
                  Thousands of investors already has joined our growing investment community. We provide you with legitimate investment plans which enables you to invest and make daily profits on your investments. We are dedicated to improving the financial status of all our investors by helping them have a stable finance by trading trading through the financial markets and our mining facility.</p>
              </div>
            </div>
            
        </section>
        </>
    )
}

export default certification
