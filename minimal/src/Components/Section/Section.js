import "./Section.css";

function Section({ children, title }) {
  return (
    <div className="section">
      <div className="section__title">
        {title}
        <div className="section__underline"></div>
      </div>
      <div className="section__child">{children}</div>
    </div>
  );
}

export default Section;
