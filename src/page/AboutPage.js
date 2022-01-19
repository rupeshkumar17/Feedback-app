import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>this is a react app to eave feedback or review</p>
        <p>version 1.0.0</p>
        <Link to="/">back to home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
