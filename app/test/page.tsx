export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Devicon Test</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">
          <i className="devicon-html5-plain colored text-4xl"></i>
          <p>HTML5</p>
        </div>
        <div className="text-center">
          <i className="devicon-css3-plain colored text-4xl"></i>
          <p>CSS3</p>
        </div>
        <div className="text-center">
          <i className="devicon-javascript-plain colored text-4xl"></i>
          <p>JavaScript</p>
        </div>
        <div className="text-center">
          <i className="devicon-react-original colored text-4xl"></i>
          <p>React</p>
        </div>
      </div>
    </div>
  );
}
