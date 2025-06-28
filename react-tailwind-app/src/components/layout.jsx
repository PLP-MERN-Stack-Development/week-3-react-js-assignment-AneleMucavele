import Navbar from "./navbar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
