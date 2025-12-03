import './skills.css'
import Uidesign from '../allpic/uiux.png'
import Webdesign from '../allpic/webdesign.png'
import Appdesign from '../allpic/appdesign.png'
const Skills = () => {
  return (
    <section id="skill">
        <hr className='hrforst'/>
        <span className="skilltitle">What I do</span><br />
        <span className="skilldetails">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
        I have a <br className='makeitnone' /> strong understanding of design and a keep eye for details. I am proficient in HTML, CSS, and Javascripts. <br className='makeitnone' /> I also have some basic knowledge of Python.</span>
        <div className="skillbars">
            <div className="skillbar">
                <img src={Uidesign} className='skillbarimg' alt="Uidesign" />
                <div className="skillbartext">
                    <h2>UI/UX Design</h2>
                    <p>I design user-friendly interfaces and smooth experiences by understanding user behavior. <br className='makeitnone'/> My goal is to make digital products simple, usable, and visually appealing.</p>
                </div>
            </div>

            <div className="skillbar">
                <img src={Webdesign} className='skillbarimg' alt="Webdesign" />
                <div className="skillbartext">
                    <h2>Web Design</h2>
                    <p>I create responsive and modern websites that look great on all devices. From layout to color and typography, <br className='makeitnone'/> I build websites that reflect your brand and engage users.</p>
                </div>
            </div>

            <div className="skillbar">
                <img src={Appdesign} className='skillbarimg' alt="Appdesign" />
                <div className="skillbartext">
                    <h2>App Design</h2>
                    <p>I design clean and intuitive mobile app interfaces for iOS and Android. <br className='makeitnone'/> I focus on user flow and interaction to ensure a smooth, enjoyable app experience.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
