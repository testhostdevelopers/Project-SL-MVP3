import React, { useEffect, useState } from 'react'
import SolanaLogo from '../../assets/img/custom/solanalogo.png';
import MetaplexLogo from '../../assets/img/custom/metaplexlogo.png';
import PrimedImg from '../../assets/img/custom/primedimg.png';

const PrimedandReady = () => {
return (
    <section className="common-gapping primed-and-ready-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="primed-left-block">
                    <div className="primed-left-block-info-block">
                        <h2 className="sec-title">Primed and Ready, <br/> The Future is here.</h2>
                        <p>Every week, 41,250 $SLX tokens are distributed among our users proportional to platform activity and sales volumes.</p>
                    </div>
                    <div className="primed-left-block-info-block">
                        <h2 className="sec-title">Future proofing on the blockchain.</h2>
                        <p>Every week, 41,250 $SLX tokens are distributed among our users proportional to platform activity and sales volumes.</p>
                    </div>
                    <div className="primed-left-block-info-block">
                        <h2 className="sec-title">Changing the way we buy & sell NFTS.</h2>
                        <p>Every week, 41,250 $SLX tokens are distributed among our users proportional to platform activity and sales volumes.</p>
                    </div>
                </div>
                <div className="primed-right-block">
                    <img src={PrimedImg} />
                </div>
            </div>
        </div>
    </section>
    )
}
export default PrimedandReady