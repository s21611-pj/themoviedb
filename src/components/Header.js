import { StyledHeader } from "./styles/Header.styled";

export function Header() {
    return (
        <StyledHeader>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                    </div>

                    <ul className="nav-links">
                        <li>
                            Link Todo
                        </li>
                        <li>
                            Link Todo
                        </li>
                        <li>
                            Link Todo
                        </li>
                    </ul>
                </div>
            </div>
        </StyledHeader>
    )
}