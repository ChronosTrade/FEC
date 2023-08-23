import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #eee;
  color: #333;
  padding: 2rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    color: #333;
    margin: 1rem;
    padding: 0;
  }

  button {
    border:0;
    color: #333;
    margin: 1rem;
    font-size: 1rem;
    padding: 0;
    cursor: pointer;
  }
`;

export const Copyright = styled.div`
  font-size: 0.8rem;
  margin: 2rem;
  color: #666;
`;
