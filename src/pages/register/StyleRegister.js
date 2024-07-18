import styled from "styled-components";

const StContainer = styled.div`
    margin-top:200px;
    padding-left:20px;
    padding-right:20px;
`

const StFirstNav = styled.h1`
    display:flex;
    align-items:center;
    justify-content:center
`

const StInput = styled.input`
    border-radius:8px;
    border: 1px solid rgb(0, 0, 0);
    width:100%;
    height:46px;
    margin-bottom:20px;
`

const StButton = styled.button`
border-radius: 8px;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(254, 83, 31);
  color: rgb(255, 255, 255);
  cursor: pointer;
  width: 100%;
  height: 46px;
  margin-bottom: 20px;
`

export {StContainer,StFirstNav,StInput,StButton}