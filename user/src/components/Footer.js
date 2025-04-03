const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center py-4">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} profile. All rights reserved.</p>
          <p>Contact: +91 9823835898 | Email: profilemap.com</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;