const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0a0a0a] py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:mesamtamaark@gmail.com" 
            className="inline-block px-8 py-3 border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors rounded-lg"
          >
            Say Hello
          </a>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mesam E Tamaar Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
  
export default Footer;