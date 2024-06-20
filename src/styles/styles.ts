import ReactInputMask from 'react-input-mask'
import styled from 'styled-components'

export const FormContact = styled.form`
  height: 300px;
  align-items: center;
  justify-content: center;
`

export const InputContact = styled.input`
  display: flex;
  padding: 8px;
  border-radius: 5%;
  margin: 8px auto;
  margin-top: 28px;
  text-align: center;
`

export const StyleMask = styled(ReactInputMask)`
  display: flex;
  padding: 8px;
  border-radius: 5%;
  margin: 8px auto;
  margin-top: 28px;
  text-align: center;
`

export const BtContact = styled.button`
  display: flex;
  padding: 8px;
  border-radius: 5%;
  margin: 8px auto;
  margin-top: 28px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`

export const HeaderContact = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`

export const ListContact = styled.h2`
  text-align: center;
`

export const UlContact = styled.ul`
  padding: 8px;
`

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
`
