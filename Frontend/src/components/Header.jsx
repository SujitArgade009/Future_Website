import "../assets/Styles/Header.css";

export default function Header(){
    return(
        <div className="head">
            <h1>Header</h1>
            <span 
            role="img" 
            aria-label="Search" 
            style="--icon-primary-color:currentColor;--icon-secondary-color:var(--ds-surface, #FFFFFF)" 
            className="css-snhnyn">
            </span>
        </div>
    )
}