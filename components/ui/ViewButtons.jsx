import React from 'react';
import { useSetRecoilState } from 'recoil';

// styles
import styled from 'styled-components';
import { viewAtom } from '../../config/atoms';

const StyledButton = styled.button`
width: 5rem;
  margin: 0 0.5rem 0 0.5rem !important;
  color : ${ props => props.theme.primary } !important;
  border-color : ${ props => props.theme.primary } !important;
  background-color: rgba(0,0,0,0) ;
  border-radius: 0.5rem;
  border-style: solid;
  height:2rem;
  min-width:3rem;
  font-size:1rem;
  cursor:pointer;
`;

const ViewButtons = () => {
  const setView = useSetRecoilState(viewAtom);
  // set as list, gallery or table
  const setNewScreen = ( newScreen ) => {
    //dispatch( setScreen( newScreen ) );
  }
  return ( 
    <div>
      <StyledButton onClick = { () => setView( 'list' ) }>List</StyledButton>
      <StyledButton onClick = { () => setView( 'table' ) }>Table</StyledButton>
      <StyledButton onClick = { () => setView( 'gallery' ) }>Gallery</StyledButton>
    </div>
   );
}
 
export default ViewButtons;