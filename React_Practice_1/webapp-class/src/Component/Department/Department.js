import { Component } from "react";
import "./Department.css";

class Department extends Component {
  render() {
    const { departments, onDepartmentSelect, childern } = this.props;
    return (
      <div>
        {childern}
        <ol className="list">
          {departments.map((item, index) => {
            return (
              <li key={index}>
                <button
                  className="btn-sm"
                  onClick={() => onDepartmentSelect(item)}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Department