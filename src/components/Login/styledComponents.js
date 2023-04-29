import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  //   flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#f2f2f2, #e6e6e6);
  padding: 20px;
  box-shadow: 1px 1px 1px 1px #f2f2f2;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Image = styled.img`
  width: 180px;
  height: 50px;
  margin: 50px;
  @media screen and (max-width: 767px) {
    width: 140px;
    height: 40px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center
  width: 100%;
`
export const Label = styled.label`
  font-size: ${props => (props.showPassword ? '16px' : '13px')};
  color: ${props => (props.showPassword ? '#404040' : '#808080')};
  font-weight: 600;
  margin-bottom: 2px;
  align-self: flex-start;
`
export const Input = styled.input`
  width: ${props => (props.checkbox ? '20px' : '400px')};
  height: ${props => (props.checkbox ? '20px' : '')};
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-weight: bold;
  border: 1px solid #bfbfbf;
  @media screen and (max-width: 767px) {
    width: ${props => (props.checkbox ? '18px' : '200px')};
    height: ${props => (props.checkbox ? '18px' : '')};
  }
`
export const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: bold;
  width: 400px;
  @media screen and (max-width: 767px) {
    width: 200px;
  }
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`
export const ErrorPara = styled.p`
  color: red;
  font-weight: bold;
  font-size: 14px;
`
