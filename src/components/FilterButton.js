function FilterButton(props) {
  return (
    <button
      data-category={props.type}
      onClick={() => props.onClick(props.type)} 
    >
      {props.name}
    </button>
  );
}

export default FilterButton;
