import styled from '@emotion/styled';

export const UserInfowrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const UserName = styled.div`
  position: relative;
  font-family: 'GothamproBold';
  letter-spacing: 0.04em;
  color: ${props => props.theme.fontColors.secondary};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    height: 2px;
    width: 32px;
    background-color: #e0e0e0;
    transform-origin: center center;
    transform: rotate(90deg);
  }
`;

export const UserButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'GothamproBold';
  letter-spacing: 0.04em;
  color: ${props => props.theme.fontColors.primary};
  transition: color
      ${props => props.theme.transitions.primary},
    font-size ${props => props.theme.transitions.primary};

  &:hover,
  &:focus {
    color: ${props => props.theme.hovers.primary};
  }
`;
