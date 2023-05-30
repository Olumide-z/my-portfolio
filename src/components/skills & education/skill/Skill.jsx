import "./skill.css";

const Skill = ({ skill }) => {
  return (
    <div className="skills__icon">
      <p>{skill.icon}</p>
    </div>
  );
};

export default Skill;
