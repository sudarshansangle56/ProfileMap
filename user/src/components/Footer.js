const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center py-4">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <p>Contact: +91 98765 43210 | Email: contact@yourcompany.com</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;