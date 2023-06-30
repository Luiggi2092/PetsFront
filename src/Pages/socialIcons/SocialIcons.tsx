import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/people/PetMatch/100094033158394/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://instagram.com/oficial_petmatch?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://api.whatsapp.com/send?phone=xxxxxxxxxx" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
        <FaMapMarkerAlt />
      </a>
    </div>
  );
};

export default SocialIcons;



