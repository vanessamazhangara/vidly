import React from "react";

const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    return (
      <i
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ></i>
    );
}
 


// class Like extends Component {
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.liked) classes += "-o";
//     return (
//       <i
//         onClick={this.props.onClick}
//         style={{ cursor: "pointer" }}
//         className={classes}
//         aria-hidden="true"
//       ></i>
//     );
//   }
// }

export default Like;



//  note that Like component is a controlled component. Does not have an handle events, 
// receives data via props. In turn, we can refactor into a SFC (stateless functioncal component)