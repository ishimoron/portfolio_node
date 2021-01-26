import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import '../assets/css/Cursor.css'

const Cursor = () => {

    const isMobile = () => {
        const ua = navigator.userAgent;
        return /Android|Mobi/i.test(ua);
    };

    const [position, setPosition] = useState({x: 0, y: 0});
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);


    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };
    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };


    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const cursorClasses = classNames(
        'cursor',
        {
            'cursor--clicked': clicked,
            'cursor--hidden': hidden,
            'cursor--link-hovered': linkHovered
        }
    );

    const onMouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    };

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);
    if (typeof navigator !== 'undefined' && isMobile()) return null;
    return (


        <div className={cursorClasses} style={{
            left: `${position.x}px`,
            top: `${position.y}px`
        }}></div>
    );
};

export default Cursor;