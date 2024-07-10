import Image from 'next/image';

interface HeroImageProps {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const HeroImage = ({ src, alt, title, subtitle }: HeroImageProps) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', padding: '2rem' }}>
      <Image
        src={src}
        fill
        priority
        alt={alt}
        style={{ objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '1rem', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>{title}</h1>
        <p style={{ fontSize: '1.5rem', margin: 0 }}>{subtitle}</p>
      </div>
    </div>
  );
}

export default HeroImage;