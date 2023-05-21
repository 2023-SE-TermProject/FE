import styled, { css } from "styled-components";

const TimeBlock = ({time, onClick, isActive}) => {

    return (
        <button
          style={(isActive ?  activeBtnStyle : btnStyle)}
          onClick= {onClick}
        >
          {time}:00
        </button>
      );
}

const btnStyle = {
    color: "white",
    background: "teal",
    padding: ".375rem .75rem",
    border: "1px solid teal",
    borderRadius: ".25rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    margin: ".005rem .05rem",
    
  };

  const activeBtnStyle = {
    color: "white",
    background: "#77ADAD",
    padding: ".375rem .75rem",
    border: "1px solid #77ADAD",
    borderRadius: ".25rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    margin: ".005rem .05rem",
    
  };
  

export default TimeBlock;