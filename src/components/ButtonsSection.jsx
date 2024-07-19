import React from 'react';

const Buttons = ({ openPermanentBranch, openTemporaryBranch, openRequestBranch, openWorkHours }) => {
  return (
    <section className="mt-6 p-4 bg-white shadow-md rounded-md w-full max-w-2xl flex flex-col space-y-4 items-center">
      <button onClick={openPermanentBranch} className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Permanent Branch Details
      </button>
      <button onClick={openTemporaryBranch} className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Temporary Branch Details
      </button>
      <button onClick={openRequestBranch} className="px-4 py-2 bg-green-500 text-white rounded-md">
        Request Temporary Branch
      </button>
      <button onClick={openWorkHours} className="px-4 py-2 bg-green-500 text-white rounded-md">
        Add Preferred Work Hours
      </button>
    </section>
  );
};

export default Buttons;
