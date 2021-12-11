import React from "react";
import Image from 'next/image';

function ThemeSwitchButton(props) {
    let active, buttonClassName;
    if (props.dark) {
        active = "dark";
        buttonClassName = "SwitchBtn SwitchBtn-Active";
    } else {
        active = "light";
        buttonClassName = "SwitchBtn";
    }

    let activeDayIcon = `assets/img/${active}-theme/icon-day.svg`;
    let activeNightIcon = `assets/img/${active}-theme/icon-night.svg`;

    return (
        <div className="DarkThemeSwitchBtn-wrapper">
            <picture className="ThemeIndicator-Icon">
                <Image src={activeDayIcon} alt="icon for lite theme" />
            </picture>
            <div className="SwitchBtn-Track" onClick={props.changeTheme}>
                <button className={buttonClassName}/>
            </div>
            <picture className="ThemeIndicator-Icon">
                <Image src={activeNightIcon} alt="icon for dark theme" />
            </picture>
        </div>
    );
}

export default ThemeSwitchButton;
