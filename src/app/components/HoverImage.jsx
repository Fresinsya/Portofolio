import {useState} from 'react';
import styles from './HoverImage.module.css';
import Image from 'next/image';

const HoverImage = ({ src1, src2, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`${styles.imageContainer} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Image className={styles.image} src={isHovered ? src2 : src1} width={200} height={200} alt={alt} />
    </div>
  );
};

export default HoverImage;
