import styled from "@emotion/styled";

export const Box = styled.div<{ bgColor: string }>`
    display: block;
    width: 100px;
    height: 100px;

    background-color: ${(props) => props.bgColor};
`;
