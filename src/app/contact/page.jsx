// components/ContactUs.js
import Image from "next/image";
import Link from "next/link";

// Make sure this path is correct

// pages/contact.js

const Contact = () => {
  return (
    <div className="mt-20 flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full bg-gray-100 shadow-md rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div>
            <h2 className="text-purple-600 text-2xl font-bold">
              Let's get in touch
            </h2>
            <Image src="/Connect.png" alt="" width={600} height={200} />
          </div>
          <div className="text-gray-600 slg:text-center">
            <h2 className="text-purple-600 text-2xl font-bold mb-4">
              Contact us.
            </h2>

            <p className="mb-2 font-semibold text-lg">
              <Image src="/Email.jpg" alt="Email" width={35} height={35} />
              <Link
                href="mailto:greatintai@gmail.com.com?subject=Inquiry&body=I%20would%20like%20to%20know%20more%20about%20your%20services."
                className="text-blue-500"
              >
                greatintai@gmail.com
              </Link>
            </p>
            <p className="mb-2 text-lg font-semibold">
              <Image src="/Phone.png" alt="" width={60} height={60} />
              0707862016
            </p>
            <p className="mb-6">
              <strong>Follow Us</strong>
              <br />
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://web.facebook.com/profile.php?id=61566477825060"
                  className="text-green-500"
                  target="_blank"
                  rel="noopener noreferrer" // Prevents security risks
                >
                  <Image
                    src="/facebook.png"
                    alt="facebook"
                    width={30}
                    height={30}
                    className="fab fa-facebook-f"
                  />
                </Link>

                <a href="#" className="text-green-500">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
