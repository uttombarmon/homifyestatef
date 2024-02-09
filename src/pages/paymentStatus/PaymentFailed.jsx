import { useEffect } from 'react';
import failed from './remove.png'
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/axiosPublic/useAxiosPublic';

const PaymentFailed = () => {
  const { transId } = useParams();
  const useAxios = useAxiosPublic()

  useEffect(() => {
    useAxios.delete(`/order/payment/success/${transId}`)
      .then(e => console.log(e))
      .catch(err => console.log(err))
  }, [useAxios, transId])
  return (
    <div className="mx-auto my-12 p-8 max-w-md bg-red-100 border border-red-500 rounded-md text-center">
      <div className="text-2xl text-red-700 font-semibold mb-4">Payment Failed</div>
      <div className="mb-6">
        <img
          src={failed} // Replace with your failure icon URL
          alt="Failure Icon"
          className="w-16 h-16 mx-auto mb-2"
        />
      </div>
      <div className="text-lg text-gray-800 mb-4">
        Oops! Something went wrong with your payment. Please try again later.
      </div>
      <div className="text-gray-600">HomifyEstate</div>
    </div>
  );
};

export default PaymentFailed;