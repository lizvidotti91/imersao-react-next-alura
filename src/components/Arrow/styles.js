import styled from 'styled-components';

const WrapperArrow = styled.a`
    color: ${({ theme }) => theme.colors.contrastText};
    font-weight: bold;
    margin-right: 1vw;
    text-decoration: none;
    transition: 0.3s;
    &:hover{
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

export function Arrow() {
    return (
        <span>
            <WrapperArrow href="/"> &#60; </WrapperArrow>
        </span>
    );
}

export default Arrow;