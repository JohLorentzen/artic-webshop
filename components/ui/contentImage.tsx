import Image from 'next/image';

interface ContentImageProps {
  src: string;
  alt: string;
}

const ContentImage = ({ src, alt }: ContentImageProps) => {
  return (
    <div>
      <Image src={src} alt={alt} priority width={500} height={300} />
    </div>
  );
};

export default ContentImage;
