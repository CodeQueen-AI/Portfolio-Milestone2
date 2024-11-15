import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <section id="skill" className="py-16 bg-gray-100">
      <div className="skill w-11/12 md:w-3/4 lg:w-2/3 mx-auto p-6 shadow-lg border border-red-500 rounded-lg bg-white">
        <h1 className="index text-4xl font-bold text-red-500 text-center mb-8">
          🚀 My Skills</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="skill-box flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <Image src="/Html.png" alt="HTML" className="w-20 h-20 mb-4" width={100} height={100}/>
            <h3 className="text-xl font-semibold text-red-500">HTML</h3>
            <span className="text-lg font-medium text-red-700">80%</span>
          </div>

          <div className="skill-box flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <Image src="/css.png" alt="CSS" className="w-20 h-20 mb-4" width={100} height={100}/>
            <h3 className="text-xl font-semibold text-red-500">CSS</h3>
            <span className="text-lg font-medium text-red-700">60%</span>
          </div>

          <div className="skill-box flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <Image src="/js.png" alt="JavaScript" className="w-20 h-20 mb-4" width={100} height={100}/>
            <h3 className="text-xl font-semibold text-red-500">JavaScript</h3>
            <span className="text-lg font-medium text-red-700">60%</span>
          </div>

          <div className="skill-box flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <Image src="/Ts.png" alt="TypeScript" className="w-20 h-20 mb-4" width={100} height={100}/>
            <h3 className="text-xl font-semibold text-red-500">TypeScript</h3>
            <span className="text-lg font-medium text-red-700">70%</span>
          </div>

          <div className="skill-box flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <Image src="/React.png" alt="React" className="w-20 h-20 mb-4" width={100} height={100}/>
            <h3 className="text-xl font-semibold text-red-500">React</h3>
            <span className="text-lg font-medium text-red-700">50%</span>
          </div>

          <div className="skill-box flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <Image src="/Next.png" alt="Next.js" className="w-20 h-20 mb-4" width={100} height={100}/>
            <h3 className="text-xl font-semibold text-red-500">Next.js</h3>
            <span className="text-lg font-medium text-red-700">50%</span>
          </div>

          <div className="skill-box flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <Image src="/figma.png" alt="Next.js" className="w-20 h-20 mb-4" width={100} height={100}/>
            <h3 className="text-xl font-semibold text-red-500">UI/UX Design</h3>
            <span className="text-lg font-medium text-red-700">50%</span>
          </div>

          <div className="skill-box flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <Image src="/canva.png" alt="Next.js" className="w-20 h-20 mb-4" width={100} height={100} />
            <h3 className="text-xl font-semibold text-red-500">Canva</h3>
            <span className="text-lg font-medium text-red-700">70%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
