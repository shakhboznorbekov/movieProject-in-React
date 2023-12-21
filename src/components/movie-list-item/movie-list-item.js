import "./movie-list-item.css";

const MovieListItem = (props) => {
  const { name, viewers, onDelete, onToggleProp, favourite, like } = props;
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        favourite && "favourite"
      } ${like && "like"}`}
    >
      <span
        onClick={onToggleProp}
        className="list-group-item-label"
        data-toggle="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={viewers}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
          data-toggle="favourite"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

// class MovieListItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { favourite: false, like: false };
//   }

//   onFavourite = () => {
//     this.setState(({ favourite }) => ({
//       favourite: !favourite,
//     }));
//   };

//   onLike = () => {
//     this.setState(({ like }) => ({
//       like: !like,
//     }));
//   };
//   render() {
//     const { name, viewers, onDelete, onToggleProp, favourite, like } =
//       this.props;
//     return (
//       <li
//         className={`list-group-item d-flex justify-content-between ${
//           favourite && "favourite"
//         } ${like && "like"}`}
//       >
//         <span
//           onClick={onToggleProp}
//           className="list-group-item-label"
//           data-toggle="like"
//         >
//           {name}
//         </span>
//         <input
//           type="number"
//           className="list-group-item-input"
//           defaultValue={viewers}
//         />
//         <div className="d-flex justify-content-center align-items-center">
//           <button
//             type="button"
//             className="btn-cookie btn-sm"
//             onClick={onToggleProp}
//             data-toggle="favourite"
//           >
//             <i className="fas fa-cookie"></i>
//           </button>
//           <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
//             <i className="fas fa-trash"></i>
//           </button>
//           <i className="fas fa-star"></i>
//         </div>
//       </li>
//     );
//   }
// }

// const MovieListItem = ({ name, viewers, favourite }) => {
//   let className = "list-group-item d-flex justify-content-between";
//   if (favourite) {
//     className += " favourite";
//   }

//   return (
//     <li className={className}>
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="number"
//         className="list-group-item-input"
//         defaultValue={viewers}
//       />
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm">
//           <i className="fas fa-cookie"></i>
//         </button>
//         <button type="button" className="btn-trash btn-sm">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };

export default MovieListItem;
