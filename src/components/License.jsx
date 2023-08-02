import { loremIpsum } from "../helpers/loremIpsum";

const License = () => {
  <div className="license-text">
    <ol>
      {loremIpsum.map((item, index) => {
        return <li key={index}>{item.text}</li>;
      })}
    </ol>
  </div>;
};

export default License;