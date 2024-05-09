function Component() {
    return (
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className='avatar' src="https://media.licdn.com/dms/image/D4D35AQEAuNf4YyVuVQ/profile-framedphoto-shrink_400_400/0/1715263718506?e=1715871600&v=beta&t=LEKG8fxxpyscBL9Bq_EBXLgoOPWx19fc86EO8HTOmB8" alt=""/>
                <h1 className="name">Mihail Pesterev</h1>
                <h3 className="tagline">
                    Senior Front End Developer
                </h3>
            </div>
            <div className="container-block">
                <ul className="list-unstyled">
                    <li>monya1987@gmail.com</li>
                    <li><i className="bi bi-telephone-fill"/>+380639382130</li>

                    <li><i className="bi bi-telegram"/>@MPesterev</li>
                    <li className='hideOnPrinting'><i className="bi bi-linkedin"/><a
                        href="www.linkedin.com/in/mihail-pesterev-76997543">Linkedin
                        profile</a></li>
                    <li className='hideOnPrinting'><i className="bi bi-filetype-pdf"/><a target='_blank' href="/CV.pdf">Download
                        PDF</a></li>

                </ul>
            </div>
            <div className="container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled">
                    <li>English <span className="lang-desc">(Intermediate)</span></li>
                    <li>Russian <span className="lang-desc">(Native)</span></li>
                    <li>Ukrainian <span className="lang-desc">(Native)</span></li>
                </ul>
            </div>

        </div>
    );
}

export default Component;