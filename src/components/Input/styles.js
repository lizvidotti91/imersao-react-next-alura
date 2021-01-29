import styled from 'styled-components';

const WrapperInput = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 1vh;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.contrastText};
    margin-bottom: 2vh;
    padding: 0.8vw;
    width: 100%;
`;

function Input({ name, value, type, onChange, placeholder }) { // Passando as propriedades que esse elemento Input deve receber. Essas propriedades estão na página inicial :)
    return (
        <div>
            <WrapperInput
                name={name}
                value={value}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;