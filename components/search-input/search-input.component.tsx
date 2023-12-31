import { memo } from 'react';

export const SearchInput = memo(() => {
  return (
    <div className="flex flex-row justify-between items-center w-full border border-gray-300 rounded-md h-[60px] px-5 gap-5">
      <input
        type="text"
        placeholder="찾는 자산을 입력하세요"
        className="flex-1 font-normal leading-5 text-white bg-primary focus:outline-none text-20 placeholder:text-gray-300"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M21.25 21.25L26.25 26.25M3.75 13.75C3.75 16.4022 4.80357 18.9457 6.67893 20.8211C8.5543 22.6964 11.0978 23.75 13.75 23.75C16.4022 23.75 18.9457 22.6964 20.8211 20.8211C22.6964 18.9457 23.75 16.4022 23.75 13.75C23.75 11.0978 22.6964 8.5543 20.8211 6.67893C18.9457 4.80357 16.4022 3.75 13.75 3.75C11.0978 3.75 8.5543 4.80357 6.67893 6.67893C4.80357 8.5543 3.75 11.0978 3.75 13.75Z"
          stroke="#A4B2BA"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
});

SearchInput.displayName = 'SearchInput';
