import React from "react";

class FilterTask extends React.Component {
  render() {
    return (
      <div>
        <span>
        <p>Filtro</p>
        </span>
        <select>
          <option value="pendente">Pendente</option>
          <option value="completa">Completa</option>
        </select> 
      </div>
    );
  }
}

export default FilterTask;
