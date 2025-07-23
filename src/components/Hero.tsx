import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';


export default function BackG() {
  return (
    <ParallaxProvider>
    
      <div style={{ position: 'relative', height: '78vh', overflow: 'hidden' }}>  
      
        <Parallax speed={-50}>
          <img 
            src="src/assets/images/background/images/gptroxo.png" 
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
      
         {/* Gradiente de transição */}
    <div
      className="
        absolute bottom-0 left-0 w-full
        h-20            /* ajuste a altura até ficar suave */
        bg-gradient-to-b
        from-transparent /* topo: transparente */
        to-purple-800    /* base: mesma cor do início da sua section */
        pointer-events-none
        z-0
      "
    ></div>

      </div>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-purple-600 px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Sinta o sabor do Açaí do Aço</h1>
          <p className="text-lg md:text-xl">O melhor açaí da região, com ingredientes selecionados e qualidade premium.</p>
          <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition">Peça Agora</button>
        </motion.div>

        {/* Imagem animada */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src="src/assets/images/background/parallax/Website_Collections_HeaderBanner_SFP_1013x900_a01e4949-4e8b-4310-b28f-c4ae7602a820.webp" 
            alt="Mulher comendo açaí"
            className="w-full max-w-md mx-auto rounded-3xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
    
    </ParallaxProvider>
  );
}
