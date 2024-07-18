import React, { useEffect, useState } from 'react'
import {
    StHeader,
    StLink,
    StSubmitButton,
    StInput,
    StTodoInputContainer,
    StTodoContainer,
    StTodoMain,
    StDeleteButton
} from './StyleHome'
import axios from 'axios'
import styled from 'styled-components'

function Home() {
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const [todos, setTodos] = useState(null)


    const fetchTodos = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`)
            setTodos(data)
        } catch (error) {
            console.log("에러 발생", error)
        }
    }

    const onSubmitHandler = async () => {
        try {
            const{data}=await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, { title, contents, })
            setTitle('')
            setContents('')
            setTodos([...todos, data])
        } catch (error) {
            console.error("에러 발생", error)
        }
    }

    const onDeleteButtonHandler = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`)
            setTodos(todos.filter(item => item.id !== id))
        } catch (error) {
            console.error("에러 발생", error)
        }
    }

useEffect(() => {
    fetchTodos();
}, [])

return (
    // header
    <>
        <div>
            <StLink to="/">로그아웃</StLink>
            <StHeader>
                <h1 style={{ fontSize: "50px" }}>ToDoList</h1>
            </StHeader>
        </div>
        {/*  body */}
        <StTodoInputContainer>
            <div>
                할 일: <StInput
                    type="text"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
            </div>
            <div>
                내용: <StInput
                    type="text"
                    value={contents}
                    onChange={(e) => { setContents(e.target.value) }}
                />
            </div>
            <StSubmitButton onClick={onSubmitHandler}>추가하기</StSubmitButton>
        </StTodoInputContainer>
        <StTodoMain>오늘의 할 일 목록</StTodoMain>
        <div>
            {todos?.map(item =>
                <StTodoContainer key={item.id}>
                    {item.contents}
                    <StDeleteButton onClick={() => onDeleteButtonHandler(item.id)}>삭제</StDeleteButton>
                </StTodoContainer>)}</div>
    </>
)
}

export default Home
