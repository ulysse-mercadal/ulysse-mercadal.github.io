import Link from 'next/link';

export default function HomePage() {
  const teamMembers = [
    {
      name: "Ulysse Mercadal",
      github: "https://github.com/ulysse-mercadal",
      avatar: "https://avatars.githubusercontent.com/u/146720787?v=4&size=200"
    },
    {
      name: "Nathan Deleger",
      github: "https://github.com/nathandeleger",
      avatar: "https://avatars.githubusercontent.com/u/146707451?v=4&size=200"
    },
    {
      name: "Nicolas Nunney",
      github: "https://github.com/nicolasnny",
      avatar: "https://avatars.githubusercontent.com/u/106173230?v=4&size=200"
    },
    {
      name: "Lorenzo La Rocca",
      github: "https://github.com/lorenzolarc",
      avatar: "https://avatars.githubusercontent.com/u/86523064?v=4&size=200"
    },
    {
      name: "Max Robert",
      github: "https://github.com/MaxxRobert",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQE5AUbloOxgDg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712666502135?e=2147483647&v=beta&t=0UtEAxsssekP8Vhc-6hVvtgU_y_ZSMfVor99_VSSPqI"
    }
  ];

  return (
    <div className="flex flex-col items-center px-4 py-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-black dark:text-white">
          R-type
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
          An EPITECH Advanced C++ project
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Game Engine | 3d Engine | Multiplayer Network Implementation
        </p>
      </div>

      {/* Main Documentation Card */}
      <Link
        href="/docs"
        className="w-full max-w-2xl mb-12 bg-black dark:bg-white text-white dark:text-black rounded-lg p-8 shadow-lg hover:shadow-xl transition-all border-2 border-black dark:border-white">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h2 className="text-3xl font-bold mb-3">Get Started with R-TYPE</h2>
          <p className="text-lg mb-4 opacity-90 ">
            Explore our complete documentation to learn about the game engine, network architecture, and implementation details
          </p>
          <div className="p-3 mt-3 rounded-lg inline-flex items-center font-semibold bg-white dark:bg-black text-black dark:text-white">
            View Documentation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>

      {/* Project Description */}
      <div className="w-full mb-16 border-2 border-gray-300 dark:border-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
          About the Project
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          R-TYPE is a tek3 project that aims to recreate the classic space shooter, but with an original twist. Our version will be in 3D and offer networked multiplayer features.
          This project includes the development of a custom game engine, as well as a robust client-server architecture and a homemade 3D engine using OpenGL.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our goal is to create a modern gaming experience while preserving the spirit of the original game,
          with a focus on network performance and engine extensibility.
        </p>
      </div>

      {/* Quick Links */}
      <div className="w-full mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="https://www.notion.so/R-TYPE-2af50aa1c82980638b37cbd28b2886e3"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-gray-300 dark:border-white rounded-lg p-6 hover:border-black dark:hover:border-gray-400 transition-colors" >
          <svg className="w-10 h-10 mb-3 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Notion Workspace</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Project planning and collaboration space
          </p>
        </a>

        <a
          href="https://www.youtube.com/watch?v=b54oABKKV7E&list=RDb54oABKKV7E&start_radio=1"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-gray-300 dark:border-white rounded-lg p-6 hover:border-black dark:hover:border-gray-400 transition-colors" >
          <svg className="w-10 h-10 mb-3 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Video Tutorials</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Watch our video tutorials
          </p>
        </a>
      </div>

      {/* Team Section */}
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
          The Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group" >
              <div className="relative mb-3 overflow-hidden rounded-full transition-transform group-hover:scale-110 border-2 border-gray-300 dark:border-white">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <h3 className="text-center font-medium text-black dark:text-white">
                {member.name}
              </h3>
            </a>
          ))}
        </div>
      </div>

      {/* EPITECH Badge */}
      <div className="mt-16 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Project developed as part of the EPITECH curriculum
        </p>
      </div>
    </div>
  );
}
