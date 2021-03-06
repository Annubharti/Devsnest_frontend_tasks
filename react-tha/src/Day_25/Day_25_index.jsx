
import Accordion from "react-bootstrap/Accordion";
import "./day_25_index.css";
import Toast from "react-bootstrap/Toast";

const Day25App = () => {
  return (
    <div className="container">
      <h1 variant = "dark" className="display-1 bg"> Bootstrap Practice </h1>
      <br />


      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <strong> HyperText Markup Language </strong>{" "}
            <small> &nbsp; (Accordion Item #1)</small>
          </Accordion.Header>
          <Accordion.Body>
            HTML is a HyperText MarkUp Language. HTML tags are keywords
            surrounded by angle and normally come in pairs. The first tag of the
            pair is the opening or start tag, the next one the closing or end
            tag.Listed below are ONLY a few of the tags you will need to learn
            about in order to work on structuring your web pages.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {" "}
            <strong>Cascading Style Sheet </strong>{" "}
            <small> &nbsp; (Accordion Item #2)</small>
          </Accordion.Header>
          <Accordion.Body>
            CSS describes how HTML elements are to be displayed on screen,
            paper, or in other media CSS saves a lot of work. It can control the
            layout of multiple web pages all at once External stylesheets are
            stored in CSS files.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            {" "}
            <strong>Javascript </strong>{" "}
            <small> &nbsp; (Accordion Item #3)</small>
          </Accordion.Header>
          <Accordion.Body>
            JavaScript is the world's most popular programming language.
            JavaScript is the programming language of the Web. JavaScript is
            easy to learn. This tutorial will teach you JavaScript from basic to
            advanced.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            {" "}
            <strong>Bootstrap </strong>{" "}
            <small> &nbsp; (Accordion Item #4)</small>
          </Accordion.Header>
          <Accordion.Body>
            Bootstrap 4 is the newest version of Bootstrap, which is the most
            popular HTML, CSS, and JavaScript framework for developing
            responsive, mobile-first websites. Bootstrap 4 is completely free to
            download and use!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            {" "}
            <strong>React.js </strong>{" "}
            <small> &nbsp; (Accordion Item #5)</small>
          </Accordion.Header>
          <Accordion.Body>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
            Declarative views make your code more predictable and easier to
            debug. Component-Based.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


      <div className="card">
  <div class="card-body">
  <img className="card-img-top" alt="" src="data:image/jpeg;base64,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"/>
  <h5 className="card-title text-center"> Rose </h5>
  This is image and text within a card.
  </div>
</div>

<Toast className="toast">
  <Toast.Header>
    <img src="https://tse4.mm.bing.net/th?id=OIP.jC0d0rbSyPvBgGg_rM3_iAHaJ4&pid=Api" className="rounded me-2" alt="" />
    <strong className="me-auto">Bootstrap Toast</strong>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
    </div>
  );
};

export default Day25App;
