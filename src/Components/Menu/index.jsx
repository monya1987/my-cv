function Component() {
    return (
        <div className="sidebar-wrapper">
            <div className="profile-container">

                <h1 className="name">Mihail Sergeev</h1>
                <h3 className="tagline">
                    Front-End Developer
                </h3>
                <h3>React, Redux, Next.js</h3>
            </div>

            <div className="container-block">
                <ul className="list-unstyled">
                    <li>Email: <br/>sergeev.mikhail90@gmail.com</li>
                    <li><br/><i className="bi bi-telephone-fill"/>+359888128218</li>
                    <li><i className="bi bi-telegram"/>Telegram: @MSergeev1990</li>
                    {/*<li>LinkedIn: <a href={"https://www.linkedin.com/in/mihail-pesterev-76997543/"}>https://www.linkedin.com/in/mihail-pesterev-76997543/</a></li>*/}
                </ul>
            </div>

            <div className="container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled">
                    <li>English <span className="lang-desc">B2</span></li>
                    <li>Russian <span className="lang-desc">(Native)</span></li>
                    <li>Ukrainian <span className="lang-desc">(Native)</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Component;