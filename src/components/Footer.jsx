import "../style/Footer.css"

export default function Footer () {
    let currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {currentYear} MUN KOREAN STEAKHOUSE</p>
        </footer>
    )
}