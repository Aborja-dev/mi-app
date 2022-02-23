export const Alert = ({message, type}) => {
   const typesAlert = {
      alert: 'alert-info',
      error: 'alert-danger',
      warning: 'alert-warning'
   }
   const color = typesAlert[type] || 'alert-primary'
   const _style = {
      background: '#ddd',
      padding:'20px',
      borderRadius: '14px',
      color: color,
      fontSize: '24px',
      border: `3px solid ${color}`
   }
   if (typeof(message)=='undefined') {
      return null
    }
   return (
      <div className="m-2">
         <p className={`alert ${color}`}>{message}</p>
      </div>
   )
}