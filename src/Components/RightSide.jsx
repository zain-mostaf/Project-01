import './Main.css'

function RightSide() {
    return (
        <section className="rightSide">

            <div className="headerSection">
                <h1 className="headerSection1">
                    Personal info
                </h1>

                <p className="description">
                    Please provide your name, email address, and phone
                    <br />
                    number.
                </p>
            </div>

            <div className="inputSection">

                <div className="inputGroup">
                    <label htmlFor="username">
                        Name:
                    </label> 

                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="e.g. Stephen King"
                    />
                </div>

                <div className="inputGroup">
                    <label htmlFor="email">
                        Email Address:
                    </label> 

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. stephenking@lorem.com"
                    />
                </div>

                <div className="inputGroup">
                    <label htmlFor="phone">
                        Phone Number:
                    </label> 

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="e.g. +1 234 567 890"
                    />
                </div>
                <div className='buttonSection'>
                    <button type="button" className="nextButton">Next Step</button>
                </div>

            </div>

        </section>
    )
}

export default RightSide