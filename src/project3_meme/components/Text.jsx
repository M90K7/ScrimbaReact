

export default function Text(props) {
  return (
    <input type="text"
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChange={props.change} />
  );
}