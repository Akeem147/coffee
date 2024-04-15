import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "../contacts/Contact.css";

const Contact = () => {
  return (
    <div className="contacts text-white w-full h-screen min-[320px]:mb-[150%] min-[375px]:mb-[50%] xl:px-[4rem] min-[414px]:mb-[10%] min-[360px]:mb-[65%] px-[2rem] pt-[50px]">
      <div className="overlayyy min-[320px]:h-auto">
        <div className="text-center mr-2 xl:mr-0">
          <h1 className="text-3xl mb-4 font-semibold">Contacts us</h1>
          <p className="xl:w-[500px] xl:pr-0 w-[350px] mx-auto leading-6 min-[320px]:w-[290px] min-[320px]:pr-[100px] min-[375px]:w-[500px] min-[375px]:pr-[250px] min-[414px]:w-[600px] min-[414px]:pr-[300px] min-[360px]:w-[370px] min-[360px]:pr-[130px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            sapiente animi? Exercitationem, repellat quia totam in ad nemo
            laboriosam voluptatum, ipsam veritatis impedit vero neque!
          </p>
        </div>
        <div className="flex items-center flex-col xl:flex-row justify-around mt-[50px]">
          <div className="">
            <div className="flex items-center mb-[30px] gap-5">
              <div className="text-[#b08968] bg-white h-[30px] w-[30px] p-[7px] rounded-full">
                <FaLocationDot />
              </div>
              <div>
                <p>
                  Address: Fatokun street, Abule egba, Lagos, Nigeria, 23401
                </p>
              </div>
            </div>
            <div className="flex items-center mb-[30px] gap-5">
              <div className="text-[#b08968] bg-white h-[30px] w-[30px] p-[7px] rounded-full">
                <FaPhone />
              </div>
              <p>Phone: 08108721330</p>
            </div>
            <div className="flex items-center mb-[30px] gap-5">
              <div className="text-[#b08968] bg-white h-[30px] w-[30px] p-[7px] rounded-full">
                <MdEmail />
              </div>
              <p>Email: odedeakeem539@gmail.com</p>
            </div>
          </div>

          <div className="w-[400px] min-[320px]:w-[250px] min-[375px]:w-[330px] sm:w-[600px] xl:w-[450px] h-[330px] ml-1 xl:ml-0 p-[20px] text-black bg-white rounded-md min-[414px]:w-[380px] min-[360px]:w-[310px]">
            <form>
              <h2 className="mb-[20px] text-2xl font-semibold">Send Message</h2>
              <div className="flex flex-col">
                <label htmlFor="name">Full name</label>
                <input
                  className="my-[8px] focus:outline-none border-b-2"
                  type="text"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  className="my-[8px] focus:outline-none border-b-2"
                  type="email"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message">Type your message</label>
                <input
                  className="my-[8px] focus:outline-none border-b-2"
                  type="text"
                  required
                />
              </div>
              <button className="bg-[#b08968] text-white py-1 px-2 rounded-md mt-2">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
