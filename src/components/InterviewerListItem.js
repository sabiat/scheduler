import React from "react";
import "components/InterviewerListItem.scss";

const classNames = require("classnames");



export default function InterviewerListItem(props) {
  console.log(props)

  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected 
  })

  const interviewerImageClass = classNames("interviewers__item-image", {
    "interviewers__item-image--selected": props.selected
  })



  return (
  <li className={interviewerClass} onClick={() => props.setInterviewer(props.name)}>
    <img
      className={interviewerImageClass}
      src={props.avatar}
      alt={props.name}
    />
    <span className={interviewerClass}>{props.name}</span>
    
  </li>
  );

} 
