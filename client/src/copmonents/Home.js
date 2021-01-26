import React, {useState, useEffect, useRef} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Typist from "react-typist";
import NET from 'vanta/dist/vanta.net.min'
import DOTS from 'vanta/dist/vanta.dots.min'


// import AOS from 'aos';
// import 'aos/dist/aos.css';

import '../assets/css/Home.css'

import cleaningImg from '../assets/images/cleaning.png'
import drukursImg from '../assets/images/drukurs.png'

import CV from '../my_cv.pdf'

const Home = () => {


    const [vantaEffectNet, setVantaEffectNet] = useState(0)
    const vantaRefNet = useRef(null)
    useEffect(() => {
        if (!vantaEffectNet) {
            setVantaEffectNet(NET({
                el: vantaRefNet.current,
                // backgroundColor: 0x181640,
                // color: 0x3215e0,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                points: 12.00,
                maxDistance: 21.00
            }))
        }
        // return () => {
        //     if (vantaEffectNet) vantaEffectNet.destroy()
        // }
    }, [vantaEffectNet])

    // 3d background Waves

    const [vantaEffectWaves, setVantaEffectWaves] = useState(0)
    const vantaRefWaves = useRef(null)
    useEffect(() => {
        if (!vantaEffectWaves) {
            setVantaEffectWaves(DOTS({
                el: vantaRefWaves.current
            }))
        }
        // return () => {
        //     if (vantaEffectNet) vantaEffectNet.destroy()
        // }
    }, [vantaEffectWaves])


    // wow js

    // useEffect(() => {
    //     const wow = new WOW.WOW()
    //     wow.init()
    // }, [])


    // dialog


    // const Frame = styled(animated.div)`
    //   position: fixed;
    //   left: 0;
    //   top: 0;
    //   right: 0;
    //   bottom: 0;
    //   background-color: rgba(0, 0, 0, 0.25);
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // `;
    //
    // const Content = styled(animated.div)`
    //   width: 93vw;
    //   height: 93vh;
    //   background-color: rgba(255, 255, 255, 1);
    //   border-radius: 8px;
    //   overflow: scroll;
    // `;
    //
    // const Wrapper = styled.div`
    //   padding: 32px;
    // `;
    //
    // const Dialog = ({show, children}) => {
    //     const transitions = useTransition(show, null, {
    //         from: {transform: "translate3d(0,-10px,0)", opacity: 0},
    //         enter: {opacity: 1, transform: "translate3d(0,0,0)"},
    //         leave: {
    //             opacity: 0,
    //             transform: "translate3d(0,10px,0)"
    //         }
    //     });
    //
    //
    //     return transitions.map(
    //         ({item, key, props}) =>
    //             item && (
    //                 <Frame key={key} style={{opacity: props.opacity}}>
    //                     <Content style={props}>{children}</Content>
    //                 </Frame>
    //             )
    //     );
    // };
    // const [showDialog, setShowDialog] = useState(false);

    // AOS.init();


    return (
        <ReactFullpage
            //fullpage options
            navigation={true}
            scrollingSpeed={1000}
            fadingEffect={true}
            parallax={true}
            // scrollOverflow={true}

            // resetSliders={true}
            // controlArrows={true}
            // animateAnchor={true}
            // keyboardScrolling={true}
            // dragAndMove={true}
            // fadingEffect={"slides"}
            // menu={'#menu'} // menu for anchors
            licenseKey={'GPLv3'}
            anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage']}
            lockAnchors={true} //anchor feature
            arrowNavigation={true} //enables arrows for slides
            // slidesNavigation={true}
            // slidesNavPosition={'bottom'}

            autoScrolling={window.innerWidth < 768 ? false : true}
            render={({state, fullpageApi}) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section" ref={vantaRefNet}>
                            <Typist
                                // speed={1000}
                                startDelay={1500}
                                // stdTypingDelay={10}
                                // avgTypingDelay={50}
                                className="welcome-text"
                            >
                                <div className="welcome-text"
                                     data-text="Hi, I`m Eugene, web developer.">
                                    <span>Hi, I`m Eugene, web developer.</span>
                                </div>

                                {/*<div class="glitch" data-text="Hi, I`m Eugene, web developer.">Hi, I`m Eugene, web developer.</div>*/}
                                {/*<div class="glow">Hi, I`m Eugene, web developer.</div>*/}
                            </Typist>


                            <div className="contact-btn">
                                <a href="/contact">Contact Me</a>
                            </div>
                        </div>
                        <div className="section">
                            <div className="card-wrapper">
                                <div className="card"><img
                                    src={drukursImg} alt="drukurs"/>
                                    <div className="info">
                                        <h1>Drukurs</h1>
                                        <p>It's app for creating business card design and much more.</p>
                                        <a href='http://creator.drukurs.pl/' target="_blank" rel="noreferrer">Go to
                                            website!</a>
                                    </div>
                                </div>
                                <div className="card"><img
                                    src={cleaningImg} alt="cleaning"/>
                                    <div className="info">
                                        <h1>Cleaning</h1>
                                        <p>It's app for cleaning company</p>
                                        <a href='https://cleaning-react.herokuapp.com/' target="_blank"
                                           rel="noreferrer">Go to
                                            website!</a>
                                    </div>
                                </div>
                                {/*<div className="card"><img*/}
                                {/*    src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>*/}
                                {/*    <div className="info">*/}
                                {/*        <h1>Protester</h1>*/}
                                {/*        <p>Lorem Ipsum is simply dummy text from the printing and typeseting*/}
                                {/*            industry</p>*/}
                                {/*        <button>Read More</button>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        <div className="section" ref={vantaRefWaves}>
                            <footer className="site-footer">
                                <div className="footer-container">
                                    <div className="footer-row">
                                        <div className="col-md-8 col-sm-6 col-xs-12">
                                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved
                                                by
                                                <span className="underline-author"><a
                                                    href="https://github.com/ishimoron" rel="noreferrer"
                                                    target="_blank">Ishimoron</a></span>
                                            </p>
                                        </div>

                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <ul className="social-icons">
                                                <li><a className="cv" href={CV}><i
                                                    className="fa fa-file-pdf" target = "_blank"></i></a></li>
                                                <li><a className="facebook" rel="noreferrer"
                                                       href="https://www.facebook.com/evgeni.ishimov.3"
                                                       target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                <li><a className="github" href="https://github.com/ishimoron"
                                                       target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                                                </li>
                                                <li><a className="telegram" href="https://t.me/ishimoron"><i
                                                    className="fa fa-telegram" target="_blank"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                        {/*Dialog Content*/}
                        {/*<Dialog show={showDialog}>*/}
                        {/*    <Wrapper>*/}
                        {/*        <iframe src="http://creator.drukurs.pl/" height="1000px" width="100%"*/}
                        {/*                title="Iframe Example"></iframe>*/}
                        {/*        <button onClick={() => setShowDialog(false)}>Dismiss</button>*/}
                        {/*    </Wrapper>*/}
                        {/*</Dialog>*/}
                    </ReactFullpage.Wrapper>


                )
                    ;
            }}
        />
    )
}

export default Home;