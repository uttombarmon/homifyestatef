import { useParams } from "react-router-dom";



const PaymentSuccess = () => {
    const {transId} = useParams();
    return (
        <div>
           <h1>payment is successful and transection id: {transId}</h1> 
        </div>
    );
};

export default PaymentSuccess;