import './Main.css'
import backgroundImage from './Images/background.svg'

function LeftSide() {
    return (
        <section className="leftSide">

            <div className="steps">

                <div className="step">
                    <span className='SpanNumaber'>1</span>

                    <div className="stepText">
                        <span className="stepNumber">STEP 1</span>
                        <span className="stepTitle">YOUR INFO</span>
                    </div>
                </div>

                <div className="step">
                    <span className='SpanNumaber'>2</span>

                    <div className="stepText">
                        <span className="stepNumber">STEP 2</span>
                        <span className="stepTitle">SELECT PLAN</span>
                    </div>
                </div>

                <div className="step">
                    <span className='SpanNumaber'>3</span>

                    <div className="stepText">
                        <span className="stepNumber">STEP 3</span>
                        <span className="stepTitle">ADD-ONS</span>
                    </div>
                </div>

                <div className="step">
                    <span className='SpanNumaber'>4</span>

                    <div className="stepText">
                        <span className="stepNumber">STEP 4</span>
                        <span className="stepTitle">SUMMARY</span>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default LeftSide;