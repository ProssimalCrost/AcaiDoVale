import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function BackG() {
  return (
    <ParallaxProvider>
      <Parallax speed={-20}>
        <div style={{
          backgroundImage: "url('src/assets/images/background/pexels-sabel-blanco-662810-3034427.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh"
        }}>
        </div>
      </Parallax>

      <section style={{ height: "100vh", background: "#222", color: "white" }}>
        <h2>Conteúdo normal</h2>
      </section>
    </ParallaxProvider>
  );
}
