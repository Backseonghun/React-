import { useState } from "react";

function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return(
        <div>
            <h1>Hello</h1>
            {unreadMessages.length > 0 &&
                <h2> 현재 {unreadMessages.length} 개의 읽지 않은 메세지가 있습니다.</h2>
            } 
        </div>
    );
}
function Counter(props){
    const count = 0;
    return(
        <div>
            {/* count 값이 0이 들어가서 <div>0</div> 결과가 나옴 */}
            {count && <h1>현재 카운트 : {count}</h1>}            
        </div>
    );
}
function WarningBanner(props){
    if(!props.warning){
        return null;
    }
    return(
        <div>경고</div>
    );
}
function MainPage(props){
    const [showWaring, setShowWarnign] = useState(false);
    const handleToggleClick = () =>{
        setShowWarnign(prevShowWaring => !prevShowWaring);
    }
    return(
        <div>
            <WarningBanner warning = {showWaring}/>
            <button onClick={handleToggleClick}>
                {showWaring ? '감추기':'보이기'}
            </button>
        </div>
    )
}
export default MainPage;