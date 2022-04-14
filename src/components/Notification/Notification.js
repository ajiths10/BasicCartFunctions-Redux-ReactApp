import { useSelector } from "react-redux";
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";

const Notification =()=>{
    const isLoading = useSelector(state=>state.notification.isLoading);
    const isSuccess = useSelector(state=>state.notification.isSuccess);
    const isError = useSelector(state=>state.notification.isError);

    //main return
        return(
            <div>
                {isLoading && <Loading />}
                {isError && <Error />}
               {isSuccess && <Success />}
            </div>
        )
    };
    
    export default Notification;