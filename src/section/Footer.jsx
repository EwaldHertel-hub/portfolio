import { useSelector } from "react-redux";
import { useSmoothLanguage } from "../lib/hooks/useSmoothLanguage";

const Footer = () => {
  const { language } = useSelector((state) => state.language);
  const content = useSelector((state) => (language === 'en' ? state.enPack : state.dePack)['footer']);

  const { displayedContent, style } = useSmoothLanguage(content);

  if (!displayedContent) {
    return null;
  }

  return (
    <footer className="footer">
      <div style={style} className="footer-container">
        <div className="flex flex-col justify-center">
          <p>{displayedContent.terms}</p>
        </div>
        <div className="socials">
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            {displayedContent.copyright.replace('2024', new Date().getFullYear())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;