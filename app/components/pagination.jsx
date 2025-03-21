'use client';
// import { useRouter } from 'next/navigation';

const Pagination = ({ prefixClass, page, totalPages, setCurrentPage }) => {
  let items = [];

  if (totalPages > 0) {
    items.push(1);

    // PAGING
    const middlePage = page;
    if (page <= 4) {
      // 4 first pages
      for (let i = 2; i <= Math.min(Math.max(3, page), totalPages); i++) {
        if (!items.includes(i)) items.push(i);
      }

      if (middlePage + 1 < totalPages && !items.includes(middlePage + 1)) {
        items.push(middlePage + 1);
      }

      if (!items.includes(totalPages) && totalPages - 1 != items.at(-1))
        items.push('...');
    }
    // 4 last page
    else if (page >= totalPages - 3) {
      items.push('...');

      if (Math.min(totalPages - 2, page) == page && page - 1 > 0)
        items.push(page - 1);
      for (let i = Math.min(totalPages - 2, page); i < totalPages; i++) {
        if (!items.includes(i)) items.push(i);
      }
      // Middle case
    } else {
      items.push('...');

      if (middlePage - 1 > 0 && !items.includes(middlePage - 1)) {
        items.push(middlePage - 1);
      }

      items.push(page);
      if (middlePage + 1 < totalPages && !items.includes(middlePage + 1)) {
        items.push(middlePage + 1);
      }
      items.push('...');
    }

    if (!items.includes(totalPages)) items.push(totalPages);

    // BUTTONS
    if (page > 1) items.unshift('prev');
    if (page < totalPages) items.push('next');
  }

  return (
    <div className={`${prefixClass}-pagination mt-5 flex justify-center`}>
      <ul className="flex gap-x-3">
        {items.map((p, idx) => {
          let className = `font-bold border-2 border-orange-500 rounded-sm cursor-pointer outline-none px-3 py-1 ${
            p === page
              ? 'text-white bg-orange-500 '
              : 'text-orange-500 bg-white'
          }`;

          if (p === 'prev' || p === 'next') {
            className =
              'text-orange-500 font-bold bg-white border-2 border-orange-500 rounded-sm cursor-pointer outline-none px-3 py-1';
          } else if (p === '...')
            className = 'text-orange-500 disabled: text-xl outline-none';

          return (
            <li
              key={`${p}-${idx}`}
              className={className}
              onClick={() => {
                if (p === '...') return;

                if (p === 'prev') {
                  // changePage(page - 1 >= 1 ? page - 1 : 1);
                  setCurrentPage(page - 1 >= 1 ? page - 1 : 1);
                } else if (p === 'next') {
                  // changePage(page + 1 <= totalPages ? page + 1 : totalPages);
                  setCurrentPage(
                    page + 1 <= totalPages ? page + 1 : totalPages
                  );
                } else {
                  // changePage(p);
                  setCurrentPage(p);
                }
              }}
            >
              {typeof p === 'string'
                ? p.charAt(0).toUpperCase() + p.slice(1)
                : p}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
