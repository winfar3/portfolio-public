import Button from '../../components/Button/Button';

import classes from './sass/Introduce.module.scss';

const IntroduceView = () => {
  const buttonStyles = {width: '100%', 'textAlign': 'center'}

  return (
    <section className={classes.introduce}>
      <h1 className={classes.introduce__title}>
          Hello, I'm Bogdan <br/> React and React Native developer
      </h1>
      <div className={classes.introduce__buttons}>
        <Button 
          title={"Send email"} 
          href={"mailto:bogdanwinfar@gmail.com"} 
          styles={buttonStyles}
        />
        <Button 
          title={"Open telegram"} 
          href={"https://telegram.me/Troglly"} 
          styles={buttonStyles}
        />
        <Button 
          title={"Check git"} 
          href={"https://github.com/winfar3/portfolio-public/"} 
          styles={buttonStyles}
        />
      </div>
    </section>
  );
}

export default IntroduceView;
