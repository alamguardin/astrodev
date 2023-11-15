import ProjectOne from '../../assets/project-1.png'
import ProjectTwo from '../../assets/project-2.png'
import ProjectThree from '../../assets/project-3.png'
import ProjectFour from '../../assets/project-4.png'
import ProjectFive from '../../assets/project-5.png'

function PortfolioSection() {
    return (
        <section className="section">
            <div className="section__left">
                <h2 className="section__title">Portfolio</h2>
                <div className="section__project">
                    <a href="#" className='section__project-link'>
                        <figure className="section__image">
                            <img src={ProjectOne.src} alt="" />
                        </figure>
                        <h3 className="section__project-title">Project 1</h3>
                    </a>
                </div>
                <div className="section__project">
                    <a href="#" className='section__project-link'>
                        <figure className="section__image">
                            <img src={ProjectTwo.src} alt="" />
                        </figure>
                        <h3 className="section__project-title">Project 2</h3>
                    </a>
                </div>
            </div>
            <div className="section__right">
                <div className="section__project">
                    <a href="#" className='section__project-link'>
                        <figure className="section__image">
                            <img src={ProjectThree.src} alt="" />
                        </figure>
                        <h3 className="section__project-title">Project 3</h3>
                    </a>
                </div>
                <div className="section__project-mini">
                    <div className="section__project">
                        <a href="#" className='section__project-link'>
                            <figure className="section__image">
                                <img src={ProjectFour.src} alt="" />
                            </figure>
                            <h3 className="section__project-title">Project 4</h3>
                        </a>
                    </div>
                    <div className="section__project">
                        <a href="#" className='section__project-link'>
                            <figure className="section__image">
                                <img src={ProjectFive.src} alt="" />
                            </figure>
                            <h3 className="section__project-title">Project 5</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection