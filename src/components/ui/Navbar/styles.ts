import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background: #FFFFFF;
  padding: 48px 16px 96px 16px;


  div {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

export const PageIconContainer = styled.nav`
  border-radius: 20px;
  padding: 16px;
  transition: all 0.1s ease-in;

  &:hover {
    background: #00CC66;

    img {
      filter: brightness(0) invert(1);
    }
  }
`;
