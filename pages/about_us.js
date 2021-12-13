import React from 'react'
import {section_container,section_mini_container,section_links,section_paragraphs,section_two,section_two_container,section_three,section_three_container,section_three_mini_container,footer,footer_container}  from '../styles/homePage.module.css'
import Image from 'next/image'

const about_us = () => {
    return (
        <>
            <section className={section_two}>
                <div className={section_two_container}>
                <Image src="/images/about-img.jpg" alt="" width={800} height={1000}/>
                </div>
                <div className={section_two_container} style={{backgroundColor:"#1a1a1a",color:"white",padding:"40px"}}>
                <Image src="/images/ico.png" alt="" width={40} height={40}/>
                                <h1 >
                                About CRYPTO CLOUD HASHING<br/>
                                
                                </h1>
                                <p className={section_paragraphs}>
                                CRYPTO CLOUD HASHING System is a Legit Bitcoin Doubler System to double your investment in the range of 24-72 hours . CRYPTO CLOUD HASHING System is fully automated system, once your investment confirms via blockchain, our system start work and provides you huge payout automatically to your registered wallet address . CRYPTO CLOUD HASHING system is completely automated system and running by automated software that called “automated Bitcoin buy/sell software” CRYPTO CLOUD HASHING system mainly design to provide you huge ROI of your bitcoin without hard work. This is a solution when you are searching “multiply my bitcoin” on search engine, we always care about growth and implementation and our multiply bitcoin project is result of this. Multiply bitcoins legit system provide you 200% return of your Bitcoin investment after 24 hours, our multiply bitcoins is really fast and effective product that multiply bitcoins in 24-72hours only. Already thousands of investors already had joined our bitcoin multiplier and making money without any problem. We provide you 100% user satisfaction with our bitcoin multiplier legit product, CRYPTO CLOUD HASHING using bitcoin multiplier bot platform to buy/sell your invested bitcoins on different bitcoin exchanges over globe to make enough profit. Our growth is strongly connected with your growth, we only process on your invested bitcoin and Altcoin to make profit and provide you huge payout after your trading hours and remaining profit we store for our growth & for emergency wallet. Multiply bitcoins is only single way to multiply your bitcoins fast, In this segment CRYPTO CLOUD HASHING is only a fully legit & trusted company, thousands of people daily search “bitcoin multiplier” term on search engine & invested Bitcoin without knowing about the company, please before making any investment with any bitcoin multiplier you must read all about it and also check its review on search engine.
                                </p>
                </div>
            </section>
        </>
    )
}

export default about_us
