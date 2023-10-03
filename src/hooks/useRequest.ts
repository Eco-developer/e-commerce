import axios from "axios";
import { useCallback, useState } from "react";
import { alertState, requestParameters } from "@/interfaces";

export const useRequest = () => {
    const [alert, setAlert] = useState<alertState>({
        open: false,
    });

    const handleCloseAlert = useCallback(() => {
        setAlert((prevState) => ({
            ...prevState,
            open: false,
        }))
    }, [setAlert])

    const handleRequest = useCallback(async ({
        method="GET",
        data={},
        endpoint,
        params="",
        succesAlert=false,
        subresource="",
    }: requestParameters) => {
        try {
            const response = await axios({
                method,
                url: `${subresource}${endpoint}${params}`,
                data,
            });
            if (succesAlert) {
                setAlert({
                    severity: "success",
                    open: true,
                    message: response?.data?.message
                })
            }
            return response.data.data
        } catch (err:any) {
            setAlert({
                severity:"error",
                open: true,
                message: err.response?.data?.message ? (
                   typeof err.response.data.message === "string" ? 
                   err.response.data.message
                   : err.response.data.message.join("\n")
                ) : "Server Error",
            })
            return null;
        }
    }, [setAlert])

    return {
        alert,
        handleRequest,
        handleCloseAlert
    }
}