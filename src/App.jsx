// src/App.jsx
// src/App.jsx

const App = () => {
  const welcome = { text: "Welcome to this page", done: true };
  const hobbies = [
    { text: "Learing Languages ", done: true },
  { text: "Laerning How to Code", done: true },
  { text: "Snowboarding", done: true },
  ];

  const mySkills = [
    {text: 'Knows how to snowbaord', done: true},
    {text: 'Speaks spanish', done: true},
    {text: 'speaks english', done: true},
    {text: 'knows how to shuffle', done: true},
    {text: 'begginer in react', done: true},
  ];

  const skillList = mySkills.map((welcome, index) =>
    <li key={index}>{welcome.text}</li>
  );

  const hobbyList = hobbies.map((hobbies, index) =>
    <li key={index}>{hobbies.text}</li>
  );
  return (
    <>
      <h1>Angel's Favorite Hobbies</h1>
     <p>{hobbies.text}</p>
      <ul>{hobbyList}</ul>

     

      <h2>Angel's Skill Set</h2>
      <ul>{skillList}</ul>
    </>
  );
};


export default App

