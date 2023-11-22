// ProfilePage.js
import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className='container'>
      <h1>PROFILE</h1>

      <div className='about_me card'>
        <h2>ABOUT ME</h2>
        <p>Aspiring computer science engineer specializing in the ML&AI domain, equipped with substantial technical proficiency in Python (including TensorFlow, scikit-learn, NumPy, and pandas), as well as in web development. Proficient in problem analysis and resolution, with the ability to take on independent responsibilities. Actively seeking a position to contribute significantly to organizational growth and development over the long term, with additional interests and skills in web development and backend technologies.</p>
      </div>

      <div className='language card'>
        <h2>LANGUAGES PROFICIENCY</h2>
        <div className='logobox'>
        <img width={100} src='https://code.benco.io/icon-collection/logos/python-colour.svg'></img>
        <img width={150} src='https://code.benco.io/icon-collection/logos/nodejs-1.svg'></img>
        <img width={100} src='https://code.benco.io/icon-collection/logos/java.svg'></img>
        </div>
      </div>

      <div className='card'>
        <h2>PACKAGES AND FRAMEWORKS</h2>
        <div className='logobox'>
        <img width={200} src='https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png?20170429090805'></img>
          <img width={100} src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/786px-JQuery_logo.svg.png?20200327024708'></img>
          <img width={200} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png'></img>
          <img width={200} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/768px-TensorFlow_logo.svg.png'></img>
          <img width={200} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/390px-Scikit_learn_logo_small.svg.png'></img>
          <img width={220} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/768px-Pandas_logo.svg.png'></img>

        </div>
      </div>
      
    </div>
  );
};

export default ProfilePage;
