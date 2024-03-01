import html2canvas from 'html2canvas';

const VerifiedFile = () => {
    const convertToImage = () => {
        const element = document.getElementById('your-html-element-id');

        if (element) {
            html2canvas(element, { allowTaint: true })
                .then((canvas) => {
                    const dataUrl = canvas.toDataURL();
                    const img = new Image();
                    img.src = dataUrl;

                    // You can append img to the DOM or perform other actions with the image
                    document.body.appendChild(img);
                })
                .catch((error) => {
                    console.error('Error converting to image:', error);
                });
        }
    };

    return (
        <div>
            <div>
                <h1 className=" font-bold text-2xl text-center mt-4"> Save Your Verified Documents</h1>
            </div>
            <div className="w-full">
                <div id="your-html-element-id" className=" relative w-[400px] md:w-3/4 font-KodeMono mx-auto h-[300px] uppercase md:h-[500px] bg-amber-200 rounded-lg">
                    <h1 className="font-bold text-lg md:text-2xl text-center mt-7 pt-5 underline">VERIFY TOKEN FOR YOUR PROPERTY</h1>
                    <div className=" flex justify-center h-3/5">
                        <div className="w-fit lg:text-3xl relative self-center z-50 mx-auto">
                            <p className=" font-bold my-2 ">Name : <span className="font-thin italic">Uttom Barmon</span></p>
                            <p className=" font-bold my-2 ">Property Id : <span className=" font-thin italic">23dFfffgje43fd</span></p>
                            <p className=" font-bold my-2 ">Address : <span className=" font-thin italic">Dhaka, Bangladesh</span></p>
                            <p className=" font-bold my-2 ">Amount : <span className=" font-thin italic">152365 BDT</span></p>
                            <p className=" font-bold my-2 ">Transaction ID : <span className=" font-thin italic">152365 BDT</span></p>
                        </div>
                    </div>
                    <h2 className="absolute right-5 bottom-4">HomifyEstate</h2>
                    <div className="absolute opacity-[0.4] bg-my-background-image bg-no-repeat top-0 h-full w-full bg-cover z-30"></div>
                </div>
            </div>
            <div className='py-5'>
                <button className='btn btn-info mx-4' onClick={convertToImage}>Save Pdf File</button>
                <button className='btn btn-accent'>Save Image File</button>
            </div>
        </div>
    );
};

export default VerifiedFile;