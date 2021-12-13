import React from 'react'
import Image from 'next/image'
import {section_container,section_mini_container,section_links,section_paragraphs,section_two,section_two_container,section_three,section_three_container,section_three_mini_container,footer,footer_container}  from '../styles/homePage.module.css'

const plans = () => {
    return (
        <>
            <section className={section_three}>
                <h1>Our Investment Plans</h1>
                            <p className={section_paragraphs}>
                            Bitcoin is the simplest way to exchange money at very low cost.
                            </p>
                <div className={section_three_container}>
                    <div className={section_three_mini_container} style={{border:"1px solid  #d9d9d9",alignItems:"center",textAlign:"center",justifyContent:"space-around"}}>
                        <a className={section_links} href="#"><h4 >Standard plan</h4></a>
                        <p className={section_paragraphs}>
                            this allow you to invest your cryptocurrency<br/>
                            Mand make a profit of 5-10 percent daily <br/>
                            on every investment with a trading<br/>
                            and mining cycle of 24hours <br/>
                            For example, <br/>If you invest 0.01 BTC then you will get 0.015 BTC
                        </p>
                    </div>
                    <div className={section_three_mini_container} style={{border:"1px solid  #d9d9d9",alignItems:"center",textAlign:"center",justifyContent:"space-around"}}>
                        <a className={section_links} href="#"><h4 >Premium plan</h4></a>
                        <p className={section_paragraphs}>
                            this allow you to invest your cryptocurrency<br/>
                            Mand make a profit of 10-20 percent daily <br/>
                            on every investment with a trading<br/>
                            and mining cycle of 24hours <br/>
                            For example, <br/>If you invest 0.1 BTC then you will get 0.15 BTC 
                        </p>
                    </div>
                    <div className={section_three_mini_container} style={{border:"1px solid  #d9d9d9",alignItems:"center",textAlign:"center",justifyContent:"space-around"}}>
                    <a className={section_links} href="#"><h4 >Executive plan</h4></a>
                        <p className={section_paragraphs}>
                            this allow you to invest your cryptocurrency<br/>
                            Mand make a profit of 20-50 percent daily <br/>
                            on every investment with a trading<br/>
                            and mining cycle of 24hours <br/>
                            For example,<br/>If you invest 01 BTC then you will get 2 BTC
                        </p>
                    </div>
                </div>
            
        </section>
        </>
    )
}

export default plans
