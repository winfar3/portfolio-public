import { ISkillsBoxProps } from "../../interfaces/ICardProps";
import classes from "../../sass/Card.module.scss";

const SkillsBox = ({skills}: ISkillsBoxProps) => (
    <ul className={classes.skillBox}>
      {skills.map((skill: string) => (
        <li key={skill} className={classes.skillBox__item}>{skill}</li>
      ))}
    </ul>
  );

export default SkillsBox;
