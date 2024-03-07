type Props = {
  labelText: string;
  handleChange: any;
  value: number;
};

export const Selector = ({ labelText, handleChange, value }: Props) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="number-of-dogs"
        className="block items text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {labelText}
      </label>
      <select
        id="number-of-dogs"
        value={value}
        onChange={handleChange}
        className="mt-1  block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:text-white"
      >
        {Array.from(Array(10).keys()).map((num) => {
          const uniqueValue = num + 1;
          return (
            <option key={uniqueValue} value={uniqueValue}>
              {uniqueValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
