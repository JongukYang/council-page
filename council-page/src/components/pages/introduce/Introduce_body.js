import React from 'react'
import "../../../App.css";
import Profile_img from "./images/profile.png";
import "./Introduce.css";
import Card from 'react-bootstrap/Card';

function Introduce_body() {
    return (
        <>
            <div className="Body-container">
                <img className='profile_img' src={Profile_img} />
            </div>
            <div id='card-container'>
                <Card className='card'>
                    <Card.Title className='card-title'>안녕하십니까. 37대 총학생회 ‘BASE’ 총학생회장 지승빈, 부총학생회장 백혜린입니다.</Card.Title>
                    <Card.Body className='card-body'>
                        <p>다시 한번 학생대표에 자리에 설 수 있게 해주신 학우 여러분께 감사의 말씀 올립니다.<br></br>
                        또한 추운 날씨에 고생해주신 단위별 선거운동본부와 중앙선거관리위원회 분들께도 감사드립니다.</p>

                        <p>이번 선거를 통해서 많은 것을 배웠습니다. 투표율도 타 대학에 비해 상당히 높은 수치이고<br></br>
                        유세하면서 나눠드린 리플렛도 하나하나 꼼꼼히 읽는 모습들을 보면서<br></br>
                        학우분들의 학생회에 관한 관심도 및 열정을 느낄 수 있었습니다.</p>
                        <p>올해 한성대학교에서는 트랙 통폐합, 과 학생회장 폐지, 학생회 구조조정 등 많은 변화가 있었습니다.<br></br>
                        이러한 변화들은 트랙제의 단점들을 보완하고 채워나가는 과정이라고 생각합니다.<br></br>
                        이런 변화하는 상황 속에서 많이 혼란스러워하실 것으로 예상됩니다.</p>

                        <div>혼란을 바로잡고 '기본에 충실하다' 라는 슬로건과 함께 학우분들과 같이 걷는 총학생회가 되겠습니다. 감사합니다.</div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}



export default Introduce_body