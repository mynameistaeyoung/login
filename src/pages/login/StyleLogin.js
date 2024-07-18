import styled from "styled-components"

const Container = styled.div`
  padding-left:20px;
  padding-right: 20px;
  align-items: center;
  justify-content:center;
  margin-top: 250px;
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

const StInput = styled.input`
  border-radius:8px;
  border: 1px solid rgb(0, 0, 0);
  height: 46px;
  width: 100%;
  margin-bottom:20px;
`

export {Container,StButton,StInput}