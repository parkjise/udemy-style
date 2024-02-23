import styled,{css} from "styled-components";


const Button = styled.button`
  color:white;
  background:${p => p.secondary ? 'pink' : 'black'} ;
  font-weight:bold;
  padding:8px;
  border-radius:4px;
  box-shadow:none;
  font-size:1.25rem;
  border:none;
  width:100%;
  display:block;
  ${p => p.large ? css`
    padding:10px;
    border-radius: 5px;
    font-size:1.6rem;
    ` : css`
    padding:8px;
    border-radius: 2px;
    font-size:1rem;
    ` }
  &:disabled{
    background:#eee;
    color:#666;
  }
`

export  {Button};

