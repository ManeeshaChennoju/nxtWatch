import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  //   flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#404040' : '#f2f2f2')};
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: ${props =>
    props.isDark ? '1px 1px 1px 1px #000000' : '1px 1px 1px 1px #f2f2f2'};
  background-image: ${props =>
    props.isDark
      ? 'linear-gradient(#000000,#0d0d0d)'
      : 'linear-gradient(#f2f2f2,#e6e6e6)'};
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
  color: ${props => (props.isDark ? 'white' : 'black')};
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
