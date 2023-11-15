import { Css, Cv, Html, JavaScript, Link, React, Supabase, Tailwind } from "../Icons"

function AboutSection() {
    return (
        <section className="section">
            <div className="section__left">
                <h2 className="section__title">About me</h2>
                <div className="section__item">
                    <p className="section__bio">
                    For a number of reasons, the capability of the internal policy financially the proper software of the continuing analysis doctrine the constructive criticism in terms of its dependence on The Attitude of User-Friendly Data (Andre Aponte in The Book of the Structural Comparison, Based On Sequence Analysis) As a matter of fact the assumption, that the market tendencies is a base for developing any part of the tasks priority management, establishes sound conditions for an initial attempt in development of the network development. 
                    </p>
                </div>
                <div className="section__item">
                    <div className="section__current-work">
                        <h3 className="section__caption">Working on</h3>
                        <picture className="section__brand">
                            <img src="https://cdn.dribbble.com/userupload/6423642/file/original-b6f0426d577a60f0aeb19fbd0e20edd0.jpg?resize=1024x768" alt="" />
                        </picture>
                        <p className="section__legend">The Verification of Inherent Control</p>
                    </div>
                </div>
            </div>
            <div className="section__right">
                <div className="section__item">
                    <h3 className="section__caption">Skills</h3>
                    <div className="section__skills">
                        <div className="section__skill-item">
                            <Html></Html>
                        </div>
                        <div className="section__skill-item">
                            <Css></Css>
                        </div>
                        <div className="section__skill-item">
                            <JavaScript></JavaScript>
                        </div>
                        <div className="section__skill-item">
                            <React></React>
                        </div>
                        <div className="section__skill-item">
                            <Tailwind></Tailwind>
                        </div>
                        <div className="section__skill-item">
                            <Supabase></Supabase>
                        </div>
                    </div>
                </div>
                <div className="section__item">
                    <div className="section__resume-link">
                        <a href="#" className="section__link">
                            <span>
                                <Cv></Cv> Download my Resume
                            </span>
                            <Link></Link>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection