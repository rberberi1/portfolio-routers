

function SkillsItems(props){
 
  return(
      <div class="skill-item">
        <img width="48" height="48" src={props.image} alt={props.alt}/>
        <p>{props.name}</p>
      </div>
  );
}

export default SkillsItems;