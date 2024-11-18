import "../styles/page.css";
import Link from "next/link";


export default function Home() {
  return (
    <div className="top-h">
          <div className="content">
              <button className="shop-button"><Link href="/catalog">SHOP NOW // BATCH 008</Link></button>
          </div>
    </div>
  );
}