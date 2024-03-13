import React from "react";
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa";
import Container from "@/components/share/Container";

const Footer = () => {
  return (
    <footer className=" bg-[#000C21] py-5">
      <Container>
        <div className="lg:footer lg:text-start text-center py-10  text-white max-w-screen-xl mx-auto ">
          <nav>
            <header className="footer-title text-4xl font-bold text-blue-500">
              Fresher Super Market
            </header>

            <p className=" text-justify text-sm text-[#9999] ">
              Fresher Super Market is dedicated to fulfilling all your grocery
              needs. We offer high-quality products, excellent customer service,
              and a convenient shopping experience. Our wide selection includes
              fresh produce, and household essentials.
            </p>
          </nav>
          <nav>
            <header className="footer-title text-xl">CONTACT US</header>
            <p className="link link-hover">
              Address :
              <span className="text-[#9999]"> 123 Fake Street, New York</span>
            </p>
            <p className="link link-hover">
              Phone :<span className="text-[#9999]"> (08) 8827 633354</span>
            </p>
            <p className="link link-hover">
              Fax :<span className="text-[#9999]"> (08) 8827 633354</span>
            </p>
            <p className="link link-hover">
              Mail :<span className="text-[#9999]"> contact@yoursite.com</span>
            </p>
            <p className="link link-hover">
              Openning :
              <span className="text-[#9999]"> 8:00 - 19:00, Mon - Sat</span>
            </p>
          </nav>
          <nav>
            <header className="footer-title text-xl">INFORMATION</header>

            <p className="link link-hover">Legal Notice</p>
            <p className="link link-hover">Addresses</p>
            <p className="link link-hover">About us</p>
            <p className="link link-hover">Order</p>
            <p className="link link-hover"> Payment</p>
            <p className="link link-hover">Suppliers</p>
          </nav>
          <nav>
            <header className="footer-title text-xl">MY ACCOUNT</header>
            <p className="link link-hover">Delivery</p>
            <p className="link link-hover">Legal Notice</p>
            <p className="link link-hover">About us</p>
            <p className="link link-hover">Prices drop</p>
            <p className="link link-hover">New products</p>
            <p className="link link-hover">Best sales</p>
          </nav>
          <nav>
            <header className="footer-title  text-xl">COMPANY</header>

            <p className="link link-hover">My account</p>
            <p className="link link-hover">My Cart</p>
            <p className="link link-hover">Identity</p>
            <p className="link link-hover">Order</p>
            <p className="link link-hover">Contact us</p>
            <p className="link link-hover">Addresses</p>
          </nav>
        </div>
        <div className="max-w-screen-xl mx-auto ">
          <hr className="border-t border-gray-600 my-4" />
          <div className="text-center mt-5  text-sm font-semibold  text-white ">
            <a className="link link-hover p-3">RETURNS</a>
            <a className="link link-hover p-3">ORDERS HISTORY</a>
            <a className="link link-hover p-3">SITE MAP</a>
            <a className="link link-hover mb-5 p-3">TESTIMONIAL</a>
          </div>
          <p className="text-center my-4 text-gray-600">
            Copyright © {new Date().getFullYear()} Automotive Quick-Ship. All
            Rights Reserved.
          </p>
          <div className="flex justify-center items-center text-4xl gap-3">
            <FaCcVisa className="text-[#fdbb0a]"></FaCcVisa>
            <FaCcPaypal className="text-[#3b7bbf]"></FaCcPaypal>
            <FaCcAmazonPay className="text-white"></FaCcAmazonPay>
            <FaCcApplePay className="text-[#6a262b]"></FaCcApplePay>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
