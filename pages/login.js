import { useRouter } from "next/router";
import { Fragment } from "react";
import LoginCard from "../components/login/LoginCard";

export default function Login(){
    const router = useRouter();

    const {todo} = router.query;
    const setNotification = false;
    return(
        <Fragment>
            <LoginCard todo={todo} notification={setNotification}/>
        </Fragment>
    )
}