import { cardData } from './cardData'
import './cards.css'
const Cards=()=>{
    // console.log(cardData)
    return(
    <>
    <div className="cards">
        <h1>Flowers <span>Gallery</span></h1>
        <div className="container">
            {cardData.map((elem)=>{
                let {title ,desc, imgUrl}=elem
                return(
                    <>
                    <div className="card">
                        <div>
                            <img src={imgUrl}/>
                            
                        </div>
                        <div className="title">{title}
                        <div className="desc">{desc}</div>
                        </div>
                    </div>
                    </>
                )

            })}
        </div>
    </div>
    </>
    )
    
}
export default Cards