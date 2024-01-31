

const Order = () => {
    return (
        <div className="w-full xl:w-[1150px] mx-auto overflow-x-auto">
            <h1 className="text-xl  font-bold  mb-6 ml-3 mt-3"> Dashboard Order</h1>
            <div className="overflow-x-auto px-3">
  <table className="table table-xl">
    <thead>
      <tr className="text-xl border bg-[#88928d] text-black">
        <th> Serial </th> 
        <th>Package</th> 
        <th>Purchase Data</th> 
        <th>Expired Date</th> 
        <th>Price</th> 
        <th>Action</th> 
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th  className="text-center">1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
  
      </tr>
      <tr>
        <th  className="text-center">2</th> 
        <td>Hart Hagerty</td> 
        <td>Desktop Support Technician</td> 
        <td>Zemlak, Daniel and Leannon</td> 
        <td>United States</td> 
        <td>12/5/2020</td> 

      </tr>
      <tr>
        <th  className="text-center">3</th> 
        <td>Brice Swyre</td> 
        <td>Tax Accountant</td> 
        <td>Carroll Group</td> 
        <td>China</td> 
        <td>8/15/2020</td> 
       
      </tr>
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default Order;