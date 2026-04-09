import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">MediNova Pharmacy</h2>
          <p className="text-sm text-black">
            Your trusted online medicine shop. We provide genuine medicines
            with fast and reliable delivery.
          </p>
        </div>

        {/* Quick Links */}
        {/* <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-black">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Medicines</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div> */}

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-black">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-black">
            <li>Email: support@medixo.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-center items-center text-sm text-black">
          <p>© {new Date().getFullYear()}MediNova Pharmacy. All rights reserved.</p>

          {/* <div className="flex gap-4 mt-2 md:mt-0">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;