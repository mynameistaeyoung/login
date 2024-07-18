import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StButton, StContainer, StInput, StFirstNav } from './StyleRegister'
import axios from 'axios'

function Register() {
    const navigate = useNavigate()
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const [user, setUser] = useState(null)


    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_USER_URL}/users`)
            setUser(data)
        } catch (error) {
            console.log("에러 발생", error)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const onCreateUserButtonHandler = async (e) => {
        e.preventDefault();
        console.log('hello')
        try {
            let isDuplicate = false;
            for (let i = 0; i < user.length; i++) {
                if (user[i].id === id) {
                    isDuplicate = true
                    break;
                }
            }
            if (isDuplicate) {
                setId('')
                setPw('')
                alert('중복된 아이디 입니다. 다시 만들어 주세요!')
            } else {
                const { data } = await axios.post(`${process.env.REACT_APP_SERVER_USER_URL}/users`, { id, pw, });
                setUser(data)
                setId('')
                setPw('')
                navigate('/')
                alert('아이디가 생성되었습니다. 로그인 페이지로 이동합니다!')
            }
        } catch (error) {
            console.log("에러 발생", error)
        }
    };

    return (
        <StContainer>
            <StFirstNav>회원가입</StFirstNav>
            <div>
                <p>사용하실 아이디를 입력해주세요.</p>
                <StInput
                    type='text'
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <p>사용하실 비밀번호를 입력해주세요.</p>
                <StInput
                    type='text'
                    value={pw}
                    onChange={e => setPw(e.target.value)}
                />
                <br />
                <StButton onClick={onCreateUserButtonHandler}>완료</StButton>
                {/* <StButton onClick={() => navigate('/')}>로그인페이지로</StButton> */}
            </div>
        </StContainer>
    )
}

export default Register

