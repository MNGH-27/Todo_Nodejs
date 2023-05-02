import React, { useState, useEffect } from "react";

const TaskList = () => {
  return (
    <div className="bg-[#25273D] w-full rounded-t-md">
      <div className="w-full flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
        <span className="flex items-center justify-center bg-[#767992] w-6 h-6 rounded-full border border-[#767992]">
          <span className="text-white">&#10003;</span>
        </span>
        <span className="text-[#4D5067] text-xl line-through">
          Complete online JavaScript course
        </span>
      </div>
      <div className="w-full flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
        <i className="w-6 h-6 block rounded-full border border-[#767992]" />
        <span className="text-[#C8CBE7] text-xl">Jog around the park 3x</span>
      </div>
      <div className="w-full flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
        <i className="w-6 h-6 block rounded-full border border-[#767992]" />
        <span className="text-[#C8CBE7] text-xl">10 minutes meditation</span>
      </div>
      <div className="w-full flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
        <i className="w-6 h-6 block rounded-full border border-[#767992]" />
        <span className="text-[#C8CBE7] text-xl">Read for 1 hour</span>
      </div>
      <div className="w-full flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
        <i className="w-6 h-6 block rounded-full border border-[#767992]" />
        <span className="text-[#C8CBE7] text-xl">Pick up groceries</span>
      </div>
      <div className="w-full flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
        <i className="w-6 h-6 block rounded-full border border-[#767992]" />
        <span className="text-[#C8CBE7] text-xl">
          Complete Todo App on Frontend Mentor
        </span>
      </div>
    </div>
  );
};

export default TaskList;
