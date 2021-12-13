import React from 'react'
import {section_container,section_mini_container,section_links,section_paragraphs,footer,footer_container}  from '../styles/homePage.module.css'

const Footer = () => {
    return (
        <>
            <footer className={footer}>
                <div className={footer_container}>
                            <h4 className="text-white">About Us</h4>
                                <p className={section_paragraphs}>
                                    CRYPTO CLOUD HASHING system is completely automated system and running by automated software that called “automated Bitcoin buy/sell software” CRYPTO CLOUD HASHING system mainly design to provide you multiply your bitcoin without hard work.
                                </p>
                </div>
                <div className={footer_container}>
                                        <h4 style={{marginLeft:"30px"}}>Quick Link</h4>
                                        <ul className={section_links}>
                                            <li><a className={section_links,section_paragraphs} href="#">Register</a></li>
                                            <li><a className={section_links,section_paragraphs} href="terms.html">Terms</a></li>
                                            <li><a className={section_links,section_paragraphs} href="policy.html">Policy</a></li>
                                            <li><a className={section_links,section_paragraphs} href="contact.html">Contact</a></li>
                                        </ul>
                                            
                </div>
                <div className={footer_container}>
                    <h4 style={{marginLeft:"30px"}}>Contact</h4>
                                <ul className={section_links}>
                                    <li className={section_paragraphs}><strong>Address:</strong> 38 Tabernacle street London, United Kingdome</li>
                                    <li className={section_paragraphs}><strong>Telephone:</strong> (863) 417-6273</li>
                                    <li className={section_paragraphs}><strong>E-mail:</strong> Coincloudhashing@gmail.com</li>
                                            
                </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
