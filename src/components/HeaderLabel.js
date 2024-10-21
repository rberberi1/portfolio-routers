import {Link} from 'react-router-dom';

function HeaderLabel(props){
  return(
    <li>
      <Link to ={props.link} className="nav-link">
          {props.name}
      </Link>
    </li>
  );
}

export default HeaderLabel;