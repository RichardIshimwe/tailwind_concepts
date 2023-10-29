const ChitChat = () => {
  return (
    <div className="bg-sky-300 h-screen">
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
        <div className='flex-shrink-0'>
          <img
            className='h-12 w-12'
            src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTrq_js35jC7OiEghOQmFP0b4-mEoVEV-mORF7frULfzh1I1_Mc'
            alt='chichat log'
          />
        </div>
        <div className=''>
          <div className="text-xl font-medium text-black">chichat</div>
          <p className="text-gray-500">you have new messages!</p>
        </div>
      </div>
    </div>
  );
};

export default ChitChat;
