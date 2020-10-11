import React, { useState } from 'react'
import $ from 'jquery'
import './cookie.css'


export function Cookie (props) {
    // var x = 0;
    const [pp, setpp] = useState(0)

    function handleClick(event) {
        let $div = $(event.target)
        let offset = $div.offset();
        var x = event.clientX - offset.left;
        var y = event.clientY - offset.top;
        setpp((pp + 1))
        $("#cookie").append('<div id="x'+pp+'" hidden>+1.0</div>');
        $("#x"+pp).css("top", event.clientY);
        $("#x"+pp).css("left", event.clientX - 10);
        $("#x"+pp).css("position", "absolute");
        $("#x"+pp).css("width", "25px");
        $("#x"+pp).css("height", "25px");
        $("#x"+pp).css("color", "white");
        $("#x"+pp).css("font-weight", "bold");
        $("#x"+pp).css("animation", "GoUp 2s forwards linear");
        $("#x"+pp).show();
        props.handlePP(1);
    } 

    return (
        <div id="cookie" onClick={handleClick}>
             {props.children}
        </div>
    )
}
