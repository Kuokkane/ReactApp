import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold underline">
                Valikko
                        </div>

            <ul>
                <li>
                    <Link to="/" className="block" onClick={props.closeMenu}>Etusivu</Link>
                </li>
                <li>
                    <Link to="/tyohistoria" className="block" onClick={props.closeMenu}>Työhistoria</Link>
                </li>
                <li>
                    <Link to="/yhteystiedot" className="block" onClick={props.closeMenu}>Yhteystiedot</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu