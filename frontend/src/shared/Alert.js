export const Alert = ({message, type}) => {
   const typesAlert = {
      alert: '#00aa00',
      error: '#ee0000',
      warning: '#aaaa00'
   }
   const color = typesAlert[type] || '#000000'
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
      <>
         <p style={_style}>{message}</p>
      </>
   )
}