import './Main.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
function Main () {
    return (
        <main className='mainPage'>
            <div className='container'>
                <LeftSide />
                <RightSide />
            </div>
        </main>
    );
}

export default Main;