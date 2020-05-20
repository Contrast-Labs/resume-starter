import React from 'react';
import './App.scss';

import BigHeading from './components/BigHeading/BigHeading';
import NameHeader from './components/NameHeader/NameHeader';
import NumberedHeading from './components/NumberedHeading/NumberedHeading';

import educationHeadings from './content/education.json';
import workHeadings from './content/work.json';

function App() {
  return (
    <div>
      <div className='content'>
        <section className='main'>
          <BigHeading iconClass='fa fa-graduation-cap'
            title='Education'/>
          <NumberedHeading headings={educationHeadings}/>

          <BigHeading iconClass='fa fa-briefcase'
            title='Work Experience'/>
          <NumberedHeading headings={workHeadings}/>


          <BigHeading iconClass='fa fa-graduation-cap'
            title='Honors and Awards'/>
        </section>
        <aside className='sidebar'>
          <NameHeader firstName='First'
            lastName='Last Name'
            title='Cyber Security Extraordinaire'
          /> 
        </aside>
      </div>
      <footer>
        <div className='footer-line'>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
