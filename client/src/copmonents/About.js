import React, {useState, useEffect, useRef} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Flip from 'react-reveal/Flip';
import Typist from "react-typist";
import WAVES from 'vanta/dist/vanta.waves.min'

import '../assets/css/About.css'


import me from '../assets/images/me.jpg'


const About = () => {

const [vantaEffectWaves, setVantaEffectWaves] = useState(0)
    const vantaRefWaves = useRef(null)
    useEffect(() => {
        if (!vantaEffectWaves) {
            setVantaEffectWaves(WAVES({
                el: vantaRefWaves.current,
                color: 0x2b2b3b
            }))
        }
        // return () => {
        //     if (vantaEffectNet) vantaEffectNet.destroy()
        // }
    }, [vantaEffectWaves])

    return (
        <ReactFullpage
            render={({state, fullpageApi}) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div>
                            <div className="section" ref={vantaRefWaves}>
                                {/*<div className='player-wrapper'>*/}
                                {/*    <ReactPlayer*/}
                                {/*        className='react-player'*/}
                                {/*        url={video}*/}
                                {/*        width='100%'*/}
                                {/*        height='100%'*/}
                                {/*        playing={true}*/}
                                {/*        loop={true}*/}
                                {/*        controls={false}*/}
                                {/*        muted={true}*/}

                                {/*    />*/}
                                {/*</div>*/}


                                <div className="about-wrapper">
                                    <div className="about-container">
                                        <div className="about-img">
                                            <Flip left>
                                                <img src={me} alt="me"/>
                                            </Flip>
                                        </div>
                                        <div className="about-desc">
                                            <Typist
                                                startDelay={1500}
                                                stdTypingDelay={50}
                                                className="desc-greeting desc-text"
                                            >
                                                <span className="desc-greeting">Hello</span>
                                                <Typist.Delay ms={500}/>
                                                <br/>
                                                <span className="desc-text">I`m web developer
                                                with over 1 year of front end
                                                experience and passion for
                                                responsive website design and
                                                a firm believer in the
                                                mobile-first approach.</span>

                                            </Typist>
                                        </div>
                                    </div>
                                    <div className="">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactFullpage.Wrapper>
                )
                    ;
            }}
        />
    )
}
export default About