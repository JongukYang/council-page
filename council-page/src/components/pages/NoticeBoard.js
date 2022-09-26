import React from 'react';
import './Notice.css';
import ArrowRight from '../../images/arrow-right.png';
export default function NoticeBoard() {
    return(
        <div className="noticeBoard">
            <div className="petitionBoard">
                <div className='board-Title'>청원게시판</div>
                <div className="explain">
                    <div>정책 총학생회에게 요청할 수 있는 게시판 입니다.</div>
                </div>
                <img src={ArrowRight} alt="화살표" className="arrow-white" />
            </div>
            <div className="questionBoard">
                <div className='board-Title'>질문 및 건의 게시판</div>
                <div className="explain">
                    총학생회에게 궁금한 점을 마음껏 질문해주세요!
                </div>
                <img src={ArrowRight} alt="화살표" className="arrow-white" />
            </div>
        </div>
    )
}