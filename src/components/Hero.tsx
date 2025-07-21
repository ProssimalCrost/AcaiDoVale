import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function BackG() {
  return (
    <ParallaxProvider>
      <div style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
        
        <Parallax speed={-50}>
          <img 
            src="src/assets/images/background/images/gpt.png" 
            alt="Parallax Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              
              top: 0,
              left: 0,
              zIndex: -1
            }}
          />
        </Parallax>

         <div style={{
            position: 'relative',
            zIndex: -1,
            color: '#fff',
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}>
         
        </div>

      </div>

      <section style={{ height: "150vh", background: "#222", color: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Conteúdo normal</h2>
      </section>
    </ParallaxProvider>
  );
}
