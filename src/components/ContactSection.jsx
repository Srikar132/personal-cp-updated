import { socialLinks } from "../constants";

const ContactSection = () => (
    <div>
      {socialLinks.map((item , i) => (
        <div className="flex items-center justify-between">
          <p>{item.name}</p>
          <a href={item.link} role="noreferr" target="_blank" className="underline text-blue-400">
            link
          </a>
        </div>
      ))}
      
    </div>
  );


  export default ContactSection