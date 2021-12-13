import Image from 'next/image'
import {section_container,section_mini_container,section_links,section_paragraphs,section_two,section_two_container,section_three,section_three_container,section_three_mini_container,footer,footer_container}  from '../styles/homePage.module.css'

export default function Home() {
  return (
    <>
      <main >
        <section className={section_container}>
            <div className={section_mini_container}>
              <Image src="/images/s1.png" alt="" width={50} height={50}/>
							<a className={section_links} href="#"><h4 class="pt-30 pb-20">Insert BTC Address</h4></a>
							<p className={section_paragraphs}>
								Visit the Investment Page to initiate a transaction by inserting your btc address. This is the address that will receive the automatically doubled bitcoins
							</p>
            </div>
            <div className={section_mini_container}>
              <Image src="/images/s2.png" alt="" width={50} height={50}/>
							<a className={section_links} href="#"><h4 class="pt-30 pb-20">Send Investment</h4></a>
							<p className={section_paragraphs}>
								Subsequent to step 1, you'll be taken to the deposit page where you are to send payment to the provided address.</p>
            </div>
            <div className={section_mini_container}>
              <Image src="/images/s3.png" alt="" width={50} height={50}/>
							<a className={section_links} href="#"><h4 class="pt-30 pb-20">Track Investment</h4></a>
							<p className={section_paragraphs}>
								Once payment is sent. It will be automatically confirmed, after which you can track the progress of your investment by inserting your receiving wallet address provided upon registration in our tracking system.</p>
            </div>
        </section>
        <section className={section_two}>
            <div className={section_two_container}>
              <Image src="/images/about-img.jpg" alt="" width={800} height={650}/>
            </div>
            <div className={section_two_container} style={{backgroundColor:"#1a1a1a",color:"white",padding:"20px"}}>
            <Image src="/images/ico.png" alt="" width={40} height={40}/>
							<h1 >
								Welcome to CRYPTO CLOUD HASHING<br/>
							
							</h1>
							<p className={section_paragraphs}>
								Cryptocurrency is an innovative payment network and a new kind of money.<br/><br/>
							we have professionals in the finance market to ensure stable management of every investors funds in our possession. Our main goals are: long-term, timely customer support, operative and automatic control of assets balance and row of other solutions contributing to the successful development of our project. Join us right now! We guarantee profitable and secured investments
							</p>
            </div>
        </section>
        <section className={section_three}>
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
      </main>

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
