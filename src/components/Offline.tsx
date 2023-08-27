/* eslint-disable react/no-unescaped-entities */
const Offline = () => {
  return (
    <div className="flex justify-center">
      <div className="absolute z-50 p-2">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm">
              You are offline. Don't you worry, you still can do things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offline;
