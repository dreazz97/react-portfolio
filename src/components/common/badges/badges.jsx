import React from 'react'
import './badges.css'

export default function Badges({ imageArrayList, badgeArrayList }) {
    return (
        <div id='badges-container'>
            <div id='badges-content'>
                {badgeArrayList.map((badgeText, index) => (
                    <div key={badgeText} id="badge"> 
                        <img src={imageArrayList[index]} alt={badgeText} />
                        <p>{badgeText}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
