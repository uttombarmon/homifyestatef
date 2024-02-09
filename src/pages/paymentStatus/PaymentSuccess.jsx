import { useParams } from "react-router-dom";
import success from "./checked.png"
import { useEffect } from "react";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";



const PaymentSuccess = () => {
  const { transId } = useParams();
  const useAxios = useAxiosPublic()
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id')
  useEffect(() => {
    useAxios.patch(`/order/payment/success/${transId}?id=${id}`)
      .then(e => console.log(e.da))
      .catch(err => console.log(err))
  }, [useAxios, id, transId])

  return (
    // <div>
    //    <h1>payment is successful and transection id: {transId}</h1> 
    // </div>
    <div className="py-28">
      <div className="mx-auto py-12 p-8 max-w-md bg-green-100 border border-green-500 rounded-md text-center">
        <div className="text-2xl text-green-700 font-semibold mb-4">Payment Successful!</div>
        <div className="mb-6">
          <img
            src={success}// Replace with your success icon URL
            alt="Success Icon"
            className="w-16 h-16 mx-auto mb-2"
          />
        </div>
        <div className="text-lg text-gray-800 mb-4">
          Thank you for choosing our service! Your payment has been successfully processed.
        </div>
        <h1>Transection Id: {transId}</h1>
        <div className="text-gray-600">HomifyEstate</div>
      </div>
    </div>
  );
};

export default PaymentSuccess;