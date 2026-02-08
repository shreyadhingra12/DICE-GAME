import { useState } from "react";
import styled from "styled-components"

const NumberSelector = () => {
    const arrNumber=[1,2,3,4,5,6];
    const [selectedNumber,setSelectedNumber]=useState();
  return (
    <NumberSelectorContainer>
        <div className="flex">
        {arrNumber.map((val,i)=>(
            <Box 
                isSelected={val == selectedNumber}
                key={i}
                onClick={()=>setSelectedNumber(val)}//event listener
            >{val}</Box>
        ))}
      </div>
      <p>
        Select Number
      </p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const Box= styled.div`
    height: 72px;
    width: 72px;
    border: solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight:700;
    background-color:${(props) => props.isSelected ? "black" :"white"};
    color:${(props) => props.isSelected ?  "white":"black"};
`;

const NumberSelectorContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight:700px;
    }
`;