import React, { useState } from "react";
import NoticeArea from "./NoticeArea";
import NoticeBoard from "./NoticeBoard";

function MainNotice() {
    return (
        <div className="container">
            <NoticeArea />
            <NoticeBoard />
        </div>
    );
}

export default MainNotice;
