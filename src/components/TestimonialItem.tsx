import React from "react";

export const TestimonialItem = () => {
  return (
    <div className="text-black bg-gray-100 p-8 shadow rounded-xl overflow:hidden md:flex md:p-0">
      <img
        className="w-32 h-32 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto "
        src="https://source.unsplash.com/random/200x200?sig=1"
      />
      <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
        <div className="text-lg font-semibold">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci sapiente placeat expedita explicabo temporibus dolores alias quibusdam eveniet tempora! Pariatur modi omnis architecto, dicta dolorem assumenda necessitatibus quibusdam commodi facilis!"
        </div>
        <div className="font-medium">
          <div className="text-blue-600 font-bold">Gulini Will</div>
          <div className="text-gray-500">Aluno B7Web</div>
        </div>
      </div>
    </div>
  );
}