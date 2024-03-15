"use client";
import Container from "@/components/share/Container";
import Gallery from "./Gallery";
import { useState } from "react";

const Faq = () => {
  // Set initial state to 0 for the "Connected Devices" question
  const [isOpen, setIsOpen] = useState(0);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  const data = [
    {
      title: "What payment methods do you accept?",
      color: "green",
      description:
        "We accept various payment methods including credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. You can select your preferred payment option during the checkout process.",
    },
    {
      title: "How can I track my order?",
      color: "sky",
      description:
        "Once your order has been processed and shipped, you will receive a confirmation email with a tracking number and a link to track your package. You can also track your order by logging into your account on our website.",
    },
    {
      title: "What is your return policy?",
      color: "purple",
      description:
        "We have a hassle-free return policy. If you are not satisfied with your purchase for any reason, you can return the item within 30 days of receipt for a full refund or exchange. Please refer to our Returns & Exchanges page for detailed instructions.",
    },
    {
      title: "Do you offer international shipping?",
      color: "amber",
      description:
        "Yes, we offer international shipping to select countries. Shipping costs and delivery times may vary depending on your location. You can check if we ship to your country during the checkout process.",
    },
    {
      title: "How can I contact customer support?",
      color: "red",
      description:
        "Our customer support team is available 24/7 to assist you with any inquiries or concerns you may have. You can contact us via email at support@supershop.com or by phone at 1-800-SUPERSHOP.",
    },
  ];

  return (
    <div className="pt-10 pb-20">
      <Container>
        <div className="justify-center items-center grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <Gallery />
          <div>
            <div className="pt-7">
              <p className="text-center text-purple-600 mb-2">
                Still have questions ?
              </p>
              <h1 className="text-center text-3xl mb-7 font-extrabold uppercase">
                most commonly asked questions
              </h1>
            </div>
            <div className="space-y-4">
              {data?.map((item, idx) => (
                <div key={idx}>
                  {/* header / Title */}
                  <div
                    onClick={() => handleToggle(idx)}
                    className={`px-4 md:px-8 py-4 bg-${item.color}-50 border-${item.color}-500 border-l-[3px] cursor-pointer`}
                  >
                    <div className="flex items-center">
                      <span>
                        <svg
                          className={`mr-4 fill-${item.color}-900 shrink-0`}
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center transition duration-200 ease-out ${
                              isOpen === idx ? "!rotate-180" : ""
                            }`}
                          />
                          <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                              isOpen === idx ? "!rotate-180" : ""
                            }`}
                          />
                        </svg>
                      </span>
                      <h4 className={`text-${item.color}-900 text-lg`}>
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  {/* body / content  */}
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen === idx
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm text-${item.color}-900 bg-${item.color}-50 border-${item.color}-500`}
                      >
                        {item?.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
