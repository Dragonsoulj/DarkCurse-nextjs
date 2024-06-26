import { table } from 'console';
import Link from 'next/link';
import { useState } from 'react';

const NewsAccordion = ({ news }) => {
  const [isOpen, setIsOpen] = useState(Array(news.length).fill(false));
  
  const toggleAccordion = (index) => {
    const newState = [...isOpen];
    newState[index] = !newState[index];
    setIsOpen(newState);
  };

  return (<>
    <div className="block sm:hidden">
  {news.map((item, index) => (
    <div key={item.id} className="p-4 bg-gray-800 my-2 rounded-lg">
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p>{new Date(item.created_timestamp).toLocaleDateString() + ' ' + new Date(item.created_timestamp).toLocaleTimeString()}</p>
      {isOpen[index] && (
        <>
          <p className="text-gray-500">{item.content.substring(0, 200)}...</p>
          <Link href={`/community/news/${item.id}`} className="text-blue-500 hover:underline">Read more</Link>
        </>
      )}
      <button onClick={() => toggleAccordion(index)} className="mt-2">
        {isOpen[index] ? 'Collapse' : 'Expand'}
      </button>
    </div>
  ))}
    </div>
    <div className="hidden sm:block">
    <table className="w-full divide-y divide-gray-200 my-4 table-auto text-white ">
      <thead>
        <tr className='odd:bg-table-odd even:bg-table-even'>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
            Title
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
            Date
          </th>
          <th scope="col" className="hidden md:block relative px-6 py-3">
            <span className="sr-only">Expand</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {news.map((item, index) => (
          <>
            <tr key={item.id} className="odd:bg-table-odd even:bg-table-even">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {item.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {new Date(item.created_timestamp).toLocaleDateString() + ' ' + new Date(item.created_timestamp).toLocaleTimeString()}
              </td>
              <td className="hidden md:block px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={() => toggleAccordion(index)}>
                  {isOpen[index] ? 'Collapse' : 'Expand'}
                </button>
              </td>
            </tr>
            {isOpen[index] && (
              <tr className="odd:bg-table-odd even:bg-table-even">
                <td colSpan={parseInt("3")} className="px-6 py-4">
                  <p className="text-sm text-gray-500">{item.content.substring(0, 200)}...</p>
                  <Link href={`/community/news/${item.id}`} className="text-blue-500 hover:underline">Read more</Link>
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
      </table>
    </div>
  </>
  );
};

export default NewsAccordion;