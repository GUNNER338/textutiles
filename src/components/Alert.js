import React from 'react'

const captialise= (word)=>{
  const lower= word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
function Alert(props) {
    return(
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{captialise(props.alert.type)}</strong>: {props.alert.msg}
  </div>
    )
}

export default Alert
