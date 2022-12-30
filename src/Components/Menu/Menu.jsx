import React from "react";
import { NavLink as Link } from "react-router-dom";

import "./Menu.scss";

export default function Menu() {
    return(
        <section className="menu">
            <Link to={"/form"} className={'menu__link'}>Murojaat yollash</Link>
        </section>
    )
}