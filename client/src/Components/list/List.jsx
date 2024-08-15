import React, { useRef, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import "./list.css";
import ListItem from "../listItem/ListItem";

const List = ({list}) => {
  const[isMoved,setIsMoved]=useState(false);
  const[slideNumber,setSlideNumber]=useState(0);
  const listRef=useRef();
  const handleClick=(direction)=>{
    setIsMoved(true)
    let distance=listRef.current.getBoundingClientRect().x-50;
    if(direction === "left" && slideNumber>0){
      setSlideNumber(slideNumber-1)
      listRef.current.style.transform=`translateX(${230+distance}px)`
    }
    if(direction === "right" && slideNumber<8 ){
      setSlideNumber(slideNumber+1)
      listRef.current.style.transform=`translateX(${distance-230}px)`
    }
//console.log(distance)
//console.log(list.content)
  }
  return (
    <>
      <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
          <ArrowBackIos className="sliderArrowLeft" onClick={()=>handleClick("left")} style={{display:!isMoved && "none"}}/>
          <div className="container1" ref={listRef}>
            {list.content.map((item,i)=>{
              return(
                <ListItem index={i} item={item}/>
              )
            })}
           
          </div>
          <ArrowForwardIos className="sliderArrowRight" onClick={()=>handleClick("right")}/>
        </div>
      </div>
    </>
  );
};

export default List;
