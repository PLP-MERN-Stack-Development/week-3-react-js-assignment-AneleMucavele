function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
      </div>
    </footer>
  );
}

export default Footer;
