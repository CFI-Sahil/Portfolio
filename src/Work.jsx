import './work.css'
import pic1 from '../allpic/pic-1.jpg'
import pic2 from '../allpic/pic-2.jpg'
import pic3 from '../allpic/pic-3.jpg'
import pic4 from '../allpic/pic-4.jpg'
import pic5 from '../allpic/pic-5.jpg'
import pic6 from '../allpic/pic-6.jpg'
const Work = () => {
    return (
        <section id="works">
            <span className="port">My Portfolio</span> <br />
            <span className="portdetails">I take pride in paying attention to the smallest details and making sure that my work is pixel <br className='makeitnone' /> perfect. I am
                excited to bring my skills and experience to help business achieve their goalsand create a strong</span>
            <div className="portfoliopages">

                <img src={pic1} className='mywebpro' alt="" />

                <img src={pic2} className='mywebpro' alt="" />

                <img src={pic3} className='mywebpro' alt="" />

                <img src={pic4} className='mywebpro' alt="" />

                <img src={pic5} className='mywebpro' alt="" />

                <img src={pic6} className='mywebpro' alt="" />

            </div>
            <button className="seemore">See More</button>
        </section>
    )
}

export default Work
