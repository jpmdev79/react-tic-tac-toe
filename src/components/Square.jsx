export const Square = ({ children, isSelected, updateBoard, index }) => {

    // esta cadena se meterá en el className del div
    // por lo tanto se imprimirá una cadena is-selected 
    // si la variable isSelected == true
    const className = `square ${isSelected ? 'is-selected' : ''}`;
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }