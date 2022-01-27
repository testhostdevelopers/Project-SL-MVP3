import React, { useEffect, useState } from 'react'
import raodmap from '../../assets/img/custom/road-map.svg';
import mraodmap from '../../assets/img/custom/mobile-road-map.svg';

const WeAreHereSec = () => {
return (
    <section className="common-gapping weare-here-sec">
        <div className="container">
            <div className="weare-here-block">
                <img className='desktop' src={raodmap}/>
                <img className='mobile' src={mraodmap}/>
                

                {/* <div className="weare-here-list-full-list">
                    <ul className="weare-here-list"> 
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Jun 2021</h6>
                            <p>Napkin scribblings.</p>
                        </li>
                        <li className="active">
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 1: Dec 2021</h6>
                            <p>Soft launch.</p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 2: Jan 2022</h6>
                            <p>Starlight v1 public launch.</p>
                        </li>
                    </ul>
                    <ul className="weare-here-list">
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 5: May 2022</h6>
                            <p>Startlight Rewards launch.</p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 4: May 2022</h6>
                            <p>Starlight v1.1<span>+ Profiles, Create Collectibles, Activity</span></p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 3: Mar 2022</h6>
                            <p>Elders of the Realm 3D <span>Partnership</span></p>
                        </li>
                    </ul>
                    <ul className="weare-here-list">
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 3: Mar 2022</h6>
                            <p>Starlight App Development</p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 7: Sep 2022</h6>
                            <p>Starlight v1.2<span>+ In-game NFT exchange</span></p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 8: have your say.</h6>
                            <p>Global takeover.</p>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    </section>
    )
}
export default WeAreHereSec