import React from 'react';

type Props<T> = {
  data: T[];
  columns: { key: keyof T; label: string }[];
  onEdit: (item: T) => void;
};

export function TableWithEdit<T extends { id: number }>({ data, columns, onEdit }: Props<T>) {
  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="min-w-full hidden sm:table">
        <thead className="bg-green-100">
          <tr>
            {columns.map((col) => (
              <th key={col.key as string} className="p-3 text-left text-sm font-semibold">
                {col.label}
              </th>
            ))}
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              {columns.map((col) => (
                <td key={col.key as string} className="p-3 text-sm">
                  {String(item[col.key] ?? '')}
                </td>
              ))}
              <td className="p-3 text-sm">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile stacked view */}
      <div className="sm:hidden">
        {data.map((item) => (
          <div key={item.id} className="border-b px-4 py-2">
            {columns.map((col) => (
              <div key={col.key as string} className="flex justify-between text-sm">
                <span className="font-medium">{col.label}:</span>
                <span>{String(item[col.key] ?? '')}</span>
              </div>
            ))}
            <div className="mt-2 text-right">
              <button
                className="text-blue-600 hover:underline text-sm"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
