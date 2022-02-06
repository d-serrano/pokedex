import styled from "styled-components";

const StyledTypes = styled.ul`
  display:flex;
  justify-content: start;
  flex-wrap:wrap;
  gap:0.8rem 0.4rem;
  list-style-type:none;
  padding:0;
  li{
    background-color: ${props=>props.theme.primary};
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border-radius:0.5rem;
  }
`;

const PokemonTypes = ({types}) => {

  return ( 
    <>
      {types&&
      <StyledTypes>
         { types.map((t)=>
          <li 
            key={t.type.url}
          >{t.type.name}</li>
         )}
      </StyledTypes>
      }
    </>
  );
}
 
export default PokemonTypes;