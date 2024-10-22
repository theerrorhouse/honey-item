export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground p-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">Sitemap</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Discounts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Legal</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-2">Email: info@discountdeals.com</p>
        </div>
      </div>
    </footer>
  );
}
