export default () => (
  <>
    <section className="text-center mt-20">
      <h2 className="text-5xl font-bold">Hey, moi c'est <span className="text-teal-400">Luuxis</span></h2>
      <p className="mt-4 text-lg">Développeur Web Full-Stack & Passionné de Tech</p>
      <p className="mt-4 text-sm text-gray-400">Étudiant à EPITECH, passionné par le développement, la cybersécurité et l'optimisation système.</p>
      <button className="mt-6 px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">Me Contacter</button>
    </section>


    <section id="about" className="mt-20 p-10 bg-gray-800 rounded-lg w-3/4 mx-auto">
      <h3 className="text-2xl text-teal-400">À propos de moi</h3>
      <p className="mt-4 text-gray-300">Je suis un développeur full-stack étudiant à EPITECH, passionné par le développement web et mobile. Je crée des solutions optimisées et performantes en utilisant des technologies modernes.</p>
    </section>


    <section id="projects" className="mt-20 text-center">
      <h3 className="text-2xl text-teal-400">Mes Projets</h3>
      <div className="flex justify-center space-x-10 mt-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-teal-300 text-lg font-bold">Dashboard</p>
          <p className="text-gray-400 text-sm">Un outil de gestion avancé avec des visualisations et automatisations.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-teal-300 text-lg font-bold">Modding NFS MW</p>
          <p className="text-gray-400 text-sm">Customisation et optimisation du jeu pour une meilleure expérience.</p>
        </div>
      </div>
    </section>

    <section id="skills" className="mt-20 text-center">
      <h3 className="text-2xl text-teal-400">Compétences</h3>
      <div className="flex justify-center space-x-10 mt-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-teal-300">Web Development</p>
          <p className="text-gray-400 text-sm">React - Node.js - TailwindCSS</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-teal-300">DevOps</p>
          <p className="text-gray-400 text-sm">Docker - Caddy Server - SQLite</p>
        </div>
      </div>
    </section>

    <section id="contact" className="mt-20 p-10 bg-gray-800 rounded-lg w-3/4 mx-auto">
      <h3 className="text-2xl text-teal-400">Me Contacter</h3>
      {/* <form className="mt-6">
        <input type="text" placeholder="Nom" className="w-full p-2 mb-4 bg-gray-700 rounded-md">
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-gray-700 rounded-md">
            <textarea placeholder="Message" className="w-full p-2 bg-gray-700 rounded-md"></textarea>
            <button className="mt-6 px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">Envoyer</button>
          </form> */}
    </section>
  </>
);
