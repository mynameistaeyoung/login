import React, { useEffect, useState } from 'react'
import { Container, StButton, StInput } from './StyleLogin'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const [userId, setUserId] = useState(null)

    useEffect(() => {
        onClickLoginButton();
    }, [])

    const onClickLoginButton = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_USER_URL}/users`)
            setUserId(data)
            userId.find(item => item.id === id) ? 
            userId.find(item=>item.id === id && item.pw === pw) ? 
            navigate('/home')
            : alert('비밀번호가 틀렸습니다 다시 입력해주세요')
            : alert('존재하지 않는 아이디 입니다.')
        } catch (error) {
            console.log("error", error)
        }
    }

    const navigate = useNavigate();

    return (
        <Container>
            <h1>Log in</h1>
            <p>ID</p>
            <StInput
                type='text'
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <p>PW</p>
            <StInput
                type='password'
                value={pw}
                onChange={e => setPw(e.target.value)}
            />
            <br />
            <StButton onClick={onClickLoginButton}>로그인</StButton>
            <br />
            <StButton onClick={() => navigate("/register")}>회원가입</StButton>
        </Container>
    )
}

export default Login