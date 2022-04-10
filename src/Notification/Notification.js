import './Notification.css'
import { useContext } from "react"

const Notification = ({message, severity}) => {

    const notificationStyles = {
        backgroundColor: severity === 'success' ? 'green' : 'red',
    }
    if (message === '') {
        return null
    }

    // const config = true ? 
    // {
    //     style: notificationStyles,
    //     className: `${severity === 'success' ? 'success' : 'error'}`
    // }
       
 return(
     <div style={notificationStyles} className={severity === 'success' ? 'success' : 'error'}>
        {message}
     </div>
 )
}


const NotificationContext = createContext() 

export const NotificationProvider = ({children}) => {
    // color
    const [message, setMessage] = useState ('') 
    // mensaje
    const [severity, setSeverity] = useState ('success')

    const setNotification = (sev, msg) => {
        setMessage(msg) 
        setSeverity(sev)  
        setTimeout (() => {
            setMessage('')
        },3000)
    }

    return (
     < NotificationContext.Provider value={{setNotification}}>
         < Notification message={message} severity={severity}/>
         {children}
     </NotificationContext.Provider> 
    )
}

export const useNotification = () =>{
return useContext(NotificationContext)
}



