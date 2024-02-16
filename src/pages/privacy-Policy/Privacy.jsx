import Contact from "../../components/homecomponents/contact/Contact";
import { IoHome } from "react-icons/io5";
const Privacy = () => {
  return (
    <>
        <section
        className="bg-gray-100 mb-10  h-[320px] md:h-[400px] relative border-4 grid items-end"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 700px",
          backgroundPosition: "center",
          backgroundImage: "url(https://i.ibb.co/8PmVZMt/banner-bg.jpg)",
        }}
      >
        <div className=" opacity-80 text-black  z-10    w-full items-center text-center mb-[10%] absolute">
          <h1 className=" text-5xl "> Privacy Policy </h1>
          <span className=" items-center flex  justify-center gap-1 text-xl mt-7">
            <IoHome></IoHome> Home . Privacy Policy
          </span>
        </div>
      </section>

      <div className=" lg:px-20 px-5 mt-14 ">
        <div className="text-[16px] ">
          <h3 className=" font-semibold ">
            Last updated on January 16, 2024.
          </h3>
          <p className=" mt-2 text-[16px]  text-gray-700 font-poppins">
            Hi there, were Homify, and welcome to our privacy policy which also
            applies to our customers.
            <br />
            <br />
            This policy sets out how we handle your personal information if
            youre an Homify user or visitor to our site.
            <br />
            <br />
            When we say we us or Homify its because thats who we are
            and we own and run the site.
            <br />
            <br />
            If we say policy were talking about this privacy policy. If we say
            user terms we are talking about the rules for using the site. The
            rules vary by product; each product makes them Homifyrately
            available and seeks consent to them Homifyrately to this policy.
          </p>
        </div>
        {/* 222 */}
        <div className=" mt-5">
          <h2 className="text-xl text-black font-sans mb-4">
            The Type Of Personal Information We Collect
          </h2>
          <p className="text-gray-700">
            We collect certain personal information about visitors and users of
            our site. The most common types of information we collect include
            things like: user-names, member names, email addresses, other
            contact details, support queries, and item comments (if applicable).
          </p>
        </div>
        {/* 333 */}
        <div className=" mt-5">
          <h2 className=" text-xl text-black font-sans mb-4">
            How We Use Personal Information
          </h2>
          <p className="text-gray-700">
            This data is intended to identify you as our customer subscriber and
            deliver products/information and other marketing elements. Visitors
            arent allowed to purchase any product or subscribe to the
            newsletter or make a comment anonymously. So, this information is
            the only means we can identify you and allow you to make these
            actions on the site.
          </p>
        </div>

        {/* 44 */}

        <div className="mt-5">
          <h2 className="text-xl text-black font-sans mb-4">
            When We Disclose Your Personal Information
          </h2>
          <p className="text-gray-700">
            We wont disclose your data to third parties in a way as to reveal
            any of your personal information like email, name, etc. (subject to
            laws and regulations). Only our authorities have access to your data
            and no third-party access to your data from us.
          </p>
        </div>
        {/* 55 */}
        <div className=" mt-5">
          <h2 className=" text-xl text-black font-sans mb-4">
            How We Keep Your Personal Information Secure
          </h2>
          <p className="text-gray-700">
            We store personal information on secure servers managed by us, and
            our service providers and files are kept in a secure location.
            Personal information that we store is protected by security and
            access controls, including username and password authentication,
            two-factor authentication, and data encryption where appropriate
          </p>
        </div>
        {/* 66 */}
        <div className="mt-4">
          <h2 className=" text-xl text-black font-sans mb-4">
            How You Can Access Your Personal Information
          </h2>
          <p className="text-gray-700">
            You can access some of the personal information we collect by
            logging in to your account. You also have the right to request
            access to other personal information we hold about you and to
            request corrections of any errors in that data. Contact our support
            using the contact details to make an access or correction request.
          </p>
        </div>
        {/* 77 */}
        <div className=" mt-5">
          <h2 className=" text-xl text-black font-sans mb-4">
            Marketing Choices Regarding Your Personal Information
          </h2>
          <p className="text-gray-700">
            Where we have your consent to do so (e.g., if you have subscribed to
            one of our email lists or have indicated that you are interested in
            receiving offers or information from us), we send you marketing
            communications by email about products and services that we feel may
            be of interest to you. You can opt-out of such communications if
            you prefer not to receive them in the future by using the
            “unsubscribe” facility provided in the communication.
            <br />
            <br />
            You also have choices about cookies, as described below. By
            modifying your browser preferences, you can accept all cookies, be
            notified when a cookie is set, or reject all cookies. If you reject
            cookies, some parts of our site may not work properly in your case.
          </p>
        </div>
        {/* 88 */}
        <div className="mt-5">
          <h2 className=" text-xl text-black font-sans mb-4">
            How Long We Keep Your Personal Information
          </h2>
          <p className="text-gray-700">
            We retain your personal information for as long as is necessary to
            provide the services to you and others and to comply with our legal
            obligations. If you no longer want us to use your personal
            information or to provide you with the Homify services, you can
            request that we erase your personal information and close your
            account.
          </p>
        </div>
        {/* 99 */}
        <div className="mt-4">
          <h2 className="text-xl text-black font-sans mb-4">When We Need To Update This Policy</h2>
          <p className="text-gray-700">
            We will need to change this policy from time to time to ensure it
            stays up to date with the latest legal requirements and any changes
            to our privacy management practices. When changing the policy, we
            will notify you about such changes; where required, a copy of the
            latest version of this policy will always be available page.
          </p>
        </div>
        {/* 10 */}

        <div className=" mt-4">
          <h2 className="text-xl text-black font-sans mb-4">How You Can Contact Us</h2>
          <p className="text-gray-700">
            How You Can Contact Us If you have any questions about our privacy
            practices or how we have been managing your personal information,
            please get in touch with our support at hridoy@Homify.com. Both
            personal information and personal data have the same meaning in the
            context of this Privacy Policy.
          </p>
        </div>
        <div className="mt-5 border-2 mb-7">
          <Contact></Contact>
        </div>
      </div>
    </>
  );
};

export default Privacy;
