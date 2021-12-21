import "./Section.css";

function Section({ children, title, backgroundColor = "inherit" }) {
  return (
    <div className="section" style={{ backgroundColor: backgroundColor }}>
      <div className="section__title">
        {title}
        <div className="section__underline"></div>
      </div>
      <div className="section__child">{children}</div>
    </div>
  );
}

export default Section;
