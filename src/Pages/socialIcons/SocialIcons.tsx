import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/profile.php?id=100094033158394" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/oficial_petmatch/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      {/* <a href="https://api.whatsapp.com/send?phone=xxxxxxxxxx" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
        <FaMapMarkerAlt />
      </a> */}
    </div>
  );
};

export default SocialIcons;



