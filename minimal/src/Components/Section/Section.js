import "./Section.css";

function Section({ children, title, backgroundColor = "inherit" }) {
  const childName = children.type.name.toLowerCase();

  return (
    <div
      className="section"
      id={`${childName}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="section__title">
        {title}
        <div className="section__underline"></div>
      </div>
      <div className="section__child">{children}</div>
    </div>
  );
}

export default Section;
