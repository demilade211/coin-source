import React from 'react'
import {section_container,section_mini_container,section_links,section_paragraphs,section_two,section_two_container,section_three,section_three_container,section_three_mini_container,footer,footer_container}  from '../styles/homePage.module.css'
import Image from 'next/image'

const contact = () => {
    return (
        <>
            <section className={section_two}>
                <div className={section_two_container}>
                <Image src="/images/about-img.jpg" alt="" width={800} height={700}/>
                </div>
                <div className={section_two_container} style={{backgroundColor:"#1a1a1a",color:"white",padding:"40px"}}>
                <Image src="/images/ico.png" alt="" width={40} height={40}/>
                                <h1 >
                                CONTACT US<br/>
                                
                                </h1>
                                <p>
							        <ul>
                                        <li><strong>Address:</strong><br/> 38 Tabernacle street London, United Kingdome</li><br/>
                                        <li><strong>Telephone:</strong><br/> (863) 417-6273</li><br/>
                                        <li><strong>E-mail:</strong><br/> Coincloudhashing@gmail.com</li>
									
								    </ul>
							</p>
                </div>
            </section>  
        </>
    )
}

export default contact
