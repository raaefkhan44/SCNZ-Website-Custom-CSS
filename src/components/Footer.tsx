import "../styles/footer.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#search">Search</a>
                    <a href="#refunds">Refunds and Exchange</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#returns">Returns</a>
                    <a href="#terms">Terms of Service</a>
                </div>
                <div className="subscribe-section">
                    <input type="email" placeholder="My email address" />
                    <button>Subscribe</button>
                </div>
                <div className="social-links">
                <a
              href="https://www.instagram.com"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/images/insta.png"
                alt="insta"
                width={40}
                height={40}
                className="icon"

              />
            </a>
                </div>
                <p>Copyright © 2024, SCNZ. Powered by Shopify</p>
                </div>
        </footer>
    );
}