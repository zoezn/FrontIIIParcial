import styled from "styled-components";

export const AppStyled = styled.div`
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
`

export const Header = styled.header`
    background-color: #ddd;
    padding: 20px 40px;
  
  h1{
    margin-bottom: 10px;
  }
  
  span {
    background-color: black;
    color: white;
    padding: 3px 5px;
    border-radius: 5px;
  }
`;

export const Container = styled.div`
    padding: 20px 40px;
    display: flex;
    flex-direction: row;
    gap: 30px;
`;

export const Producto = styled.div`
    border: 0.5px solid #ddd;
    padding: 20px;
    width: 33%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    box-shadow: 0px 2px 5px rgba(0,0,0, 0.5);
  
  h5{
    text-align: center;
  }
  
  button{
    padding: 5px;
    text-transform: uppercase;
  }

  .siStock:hover{
    background-color: #fdd6dd;
  }

  .agotado {
    background-color: #fdd6dd;
    padding: 3px;
    font-weight: lighter;
    color: #b95667;
    border-radius: 3px;
  }
  `;