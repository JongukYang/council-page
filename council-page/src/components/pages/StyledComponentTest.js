import React from 'react';
import Container from './styles';
function StyledComponentTest() {
    return(
        <Container>
            테스트
            <div className="classes">
                className이 적용된 경우
            </div>
        </Container>
    )
}

export default StyledComponentTest;