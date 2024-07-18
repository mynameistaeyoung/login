import styled from "styled-components"
import { Link } from 'react-router-dom'

const StHeader = styled.div`
    display:flex;
    justify-content:center;
`
const StLink = styled(Link)`
    display:flex;
    justify-content: right;
`

const StTodoInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px
`

const StInput = styled.input`
    border-radius:8px;
  border: 1px solid rgb(0, 0, 0);
  height: 46px;
  width: 300px;
  margin-bottom:20px;
  margin-right: 20px;
`

const StSubmitButton = styled.button`
    border-radius: 8px;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(254, 83, 31);
  color: rgb(255, 255, 255);
  cursor: pointer;
  height: 52px;
  margin-bottom: 20px;
`

const StTodoContainer = styled.div`
    border: 1px solid rgb(254, 83, 31);
    border-radius:8px;
    margin-left:100px;
    margin-right:100px;
    margin-bottom: 30px;
    width:900;
    height:46px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:rgb(254, 83, 31);
    color: white;
`

const StTodoMain = styled.h3`
    display:flex;
    align-items:center;
    justify-content:center;
` 

const StDeleteButton = styled.button`
    border:1px solid white;
    border-radius:8px;
    background-color:white;
    
`

export {StHeader,StLink,StTodoInputContainer,StInput,StSubmitButton,StTodoContainer,StTodoMain,StDeleteButton}