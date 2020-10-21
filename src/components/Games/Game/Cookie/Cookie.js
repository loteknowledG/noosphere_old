import React, { useState } from 'react'
import $ from 'jquery'
import './cookie.css'

export function Cookie (props) {
    const [pp, setpp] = useState(0)

    function handleClick(event) {
        let $div = $(event.target)
        let offset = $div.offset();
        var x = event.clientX - offset.left;
        var y = event.clientY - offset.top;
        setpp((pp + 1))
        $("#cookie").append('<div id="x'+pp+'" hidden>+37</div>');
        $("#x"+pp).css("top", y);
        $("#x"+pp).css("left", x);
        $("#x"+pp).css("position", "absolute");
        $("#x"+pp).css("width", "25px");
        $("#x"+pp).css("height", "25px");
        $("#x"+pp).css("color", "white");
        $("#x"+pp).css("font-weight", "bold");
        $("#x"+pp).css("animation", "GoUp 2s forwards linear");
        $("#x"+pp).show();
        props.handlePP(37);
    } 

    return (
        <div id="cookie" onClick={handleClick}>
            {props.children}
        </div>
    )
}
