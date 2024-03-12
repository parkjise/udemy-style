import styled,{css} from "styled-components";
import PropTypes from 'prop-types'

const largeStyles = ({large}) => {
  if(large){  
    return css `
      padding:10px;
      border-radius: 5px;
      font-size:1.6rem;
    `;
  }else{
    return css `
      padding:8px;
      border-radius: 2px;
      font-size:1rem;
    `;
  }
}
const Button = styled.button`
  color:white;
  background:${p => p.secondary ? p.theme.secondaryColor : p.theme.primaryColor} ;
  font-weight:bold;
  padding:8px;
  border-radius:4px;
  box-shadow:none;
  font-size:1.25rem;
  border:none;
  width:100%;
  display:block;
  ${largeStyles}
  &:disabled{
    background:#eee;
    color:#666;
  }
`
Button.propTypes = {
  large:PropTypes.bool,
  secondary:PropTypes.bool
}
export  {Button};

