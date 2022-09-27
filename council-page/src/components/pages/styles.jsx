import styled from "styled-components";

const Container = styled.div `
    border: 2px solid red;
    
    .classes {
        border: 2px solid blue;
        font-weihgt: 800;
        color: ${(props) => props.color || "red"} 
    }
`

export default Container;