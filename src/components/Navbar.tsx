import Link from "next/link";
import "../styles/navbar.css"; // Adjust the path as needed

export default function Navbar() {
  return (
      <div>
    <nav className="navbar-box">
      <h1>
        <Link href="/">SCNZ᙮</Link>
      </h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        
        <li><Link href="/catalog">Catalog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>

    </div>  
  );
}