import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`;

interface GroupContainerProps {
  direction?: 'row' | 'column';
}

export const GroupContainer = styled.div<GroupContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${props => props.direction === 'column' ?
    css`
      > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 24px;
        column-gap: 16px;
      }
  ` : css`
      > div {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
  `}
`;
