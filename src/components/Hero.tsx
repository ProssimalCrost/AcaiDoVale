import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Hero() {
  return (
    <ParallaxProvider>
      <div style={{ position: 'relative', height: '50vh', overflow: 'hidden' }}>
        
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
        >
          <source src="src/assets/images/background/Videos/acaimesa.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>

        <Parallax speed={-20}>
          <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
            
          </div>
        </Parallax>

      </div>

      <section style={{ height: "100vh", background: "#222", color: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Conteúdo normal</h2>
      </section>
    </ParallaxProvider>
  );
}
