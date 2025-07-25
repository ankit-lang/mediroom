import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, FacebookIcon } from 'lucide-react';
import translations from '../translations';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';


interface FooterProps {
  language: 'en' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[#784420] text-white ${dir === 'rtl' ? 'rtl' : ''}`}>
      <div className="container mx-auto text-justify  px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">{t.footer.about.title}</h3>
            <p className="mb-4">{t.footer.about.description}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-custom">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-custom">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/1234567890" className="text-white hover:text-gold transition-custom">
                <MessageCircle size={20} />
              </a>
            </div>
          </div> */}

          {/* Quick Links */}
          <div>
            <div className="text-xl font-semibold mb-4 ">{t.footer.quickLinks.title}</div>
            <ul className="space-y-2">
              {t.footer.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className=" transition-custom">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xl font-semibold mb-4 text-white">{t.footer.contact.title}</div>
            <ul className="space-y-4">
              <li className="flex items-start text-white">
                <MapPin size={20} className="mr-2 mt-1 " />
                <span>Sujan Mohinder Hospital Road, New Friends Colony, Delhi,
                India 110025</span>
              </li>
              <li className="flex items-center text-white">
                <Phone size={20} className="mr-2 " />
                <a href="tel:+911234567890" className=" transition-custom text-white">
                +91 9810000051 | +91 9333333767
                </a>
              </li>
              <li className="flex items-center text-white">
                <Mail size={20} className="mr-2 " />
                <a href="mailto:info@medistay.com" className=" transition-custom text-white">
                  info@moydom.in 
                </a>
              </li>
              <li className="flex items-center text-white">
                <a href="mailto:info@medistay.com" className=" transition-custom text-white">
                  {/* info@moydom.in */}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div >
            {/* <h3 className="text-xl font-semibold mb-4">{t.footer.newsletter.title}</h3> */}
            {/* <p className="mb-4">{t.footer.newsletter.description}</p> */}

            <div className="mb-4"><a href="" className='flex items-center gap-3 ' >   <FaFacebook size={32} color="white" /> <span>Facebook</span>  </a></div>
            <div className="mb-4"><a href="" className='flex items-center gap-3 '><BsWhatsapp color="white" size={30} />  Whatsapp</a></div>
            <div className="mb-2"><a href="" className='flex items-center gap-3 '  > <BsInstagram color="white" size={30} />  Instagram</a></div>
            {/* <form className="flex">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-text-dark"
              />
              <button
                type="submit"
                className="bg-gold px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-custom"
              >
                {t.footer.newsletter.button}
              </button>
            </form> */}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white border-opacity-20 text-center">
          <p className="">
            © {currentYear} Moydom
          </p>
          {/* <div className="mt-4 flex justify-center space-x-6">
            {t.footer.bottomLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-white hover:text-gold transition-custom"
              >
                {link.text}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;