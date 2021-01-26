import React from 'react';

import cleaningImg from '../assets/images/cleaning.png'
import drukursImg from '../assets/images/drukurs.png'
import '../assets/css/Works.css'

import Slide from 'react-reveal/Slide';

const Works = () => {


    // const [vantaEffectWaves, setVantaEffectWaves] = useState(0)
    // const vantaRefWaves = useRef(null)
    // useEffect(() => {
    //     if (!vantaEffectWaves) {
    //         setVantaEffectWaves(WAVES({
    //             el: vantaRefWaves.current,
    //             color: 0x404040
    //         }))
    //     }
    //     // return () => {
    //     //     if (vantaEffectNet) vantaEffectNet.destroy()
    //     // }
    // }, [vantaEffectWaves])


    return (
        <div className="works-section">
            <div className="works-wrapper">
                <div className="works-title">
                    <div className="wrap">
                        <p className="text">works</p>
                        <p className="text">works</p>
                        <p className="text">works</p>
                        {/*<p className="crack"></p>*/}
                    </div>

                </div>
                <div className="works-container">
                    <div className="card-wrapper">
                        <div className="card">
                            <Slide top>
                                <img
                                    src={drukursImg} alt="drukurs"/>
                            </Slide>
                            <div className="info">
                                <h1>Drukurs</h1>
                                <p>It's app for creating business card design and much more.</p>
                                <a href='http://creator.drukurs.pl/' target="_blank" rel="noreferrer">Go to
                                    website!</a>
                            </div>
                        </div>
                        <div className="card">
                            <Slide top>
                                <img
                                    src={cleaningImg} alt="drukurs"/>
                            </Slide>
                            <div className="info">
                                <h1>Cleaning</h1>
                                <p>It's app for cleaning company</p>
                                <a href='https://cleaning-react.herokuapp.com/' target="_blank"
                                   rel="noreferrer">Go to
                                    website!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Works