import './intro.css'
import pic from '../allpic/my_main.png';
import { Link } from 'react-scroll';
import { PiBagSimpleFill } from 'react-icons/pi';
const Intro = () => {
  return (
    <section id="intro">
        <div className="infocontent">
            <span className="hello">Hello,</span>
            <span className="mycontent">I'm <span className="restcontent">Sahil</span><br />Website Designer</span>
            <p className="intropara">I am a skilled and passionate web designer with experience in creating <br className='makeitnone' /> visually appealing and user-friendly websites.</p>
            <Link>
            <button className="hirebtn">
                <PiBagSimpleFill size={22} /><p>Hire Me</p>
            </button>
            </Link>
        </div>
        <img src= {pic} className='mainImg' alt="" />
    </section>
  )
}

export default Intro
