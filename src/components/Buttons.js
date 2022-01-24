import React, {useState} from 'react'


function Buttons({video}){
    const [increaseVote, setIncreaseVote] = useState(9210)
    const [decreaseVote, setDecreaseVote] = useState(185)
    const [hideComments, setHideComments] = useState(true)
    //const [commentsListed, setCommentsListed] = useState()

    function handleUpClick (){
        setIncreaseVote(increaseVote + 1);
    }

    function handleDownClick(){
        setDecreaseVote(decreaseVote - 1);
    }

    function handleHideClick(){
        setHideComments((hideComments)=>!hideComments)
    }


   

    return(
        <div>
            <button onClick = {handleUpClick}>{increaseVote}👍</button> <button onClick = {handleDownClick}> {decreaseVote}👎</button> <br></br>
            <br></br><button onClick={handleHideClick}> {hideComments ? 'Hide Comments' : 'Show Comments'} </button> 
            {hideComments && 
            <div>
                <h2>2 comments</h2>
            {/* b/c there's multiple comments, we need to map the data we're looking for. In this case it would be video.comments since the comments are nested arrays. */}
                <ul>
                    {video.comments.map((commentObj)=>
                    <li>{commentObj.user} says: {commentObj.comment}</li>
                    )}
                </ul>
            </div>}
           
            
        </div>
    )
}


export default Buttons;


