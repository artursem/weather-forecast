const Card = (props) => {
	return (
		<div
			className={`rounded-lg m-2 p-1 text-blue-100
            backdrop-filter backdrop-blur-sm bg-fog-100
            flex flex-row justify-center items-center
            ${props.classes}`}
		>
			{props.children}
		</div>
	);
};

export default Card;
