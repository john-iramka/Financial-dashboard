import React from 'react';

const RecentTransactions = () => {
  const transactions = [
    { id: 1, description: "Deposit from my Card", amount: "-$850", date: "28 January 2021", type: "withdrawal" },
    { id: 2, description: "Deposit Paypal", amount: "+$2,500", date: "25 January 2021", type: "deposit" },
    { id: 3, description: "Jemi Wilson", amount: "+$5,400", date: "21 January 2021", type: "deposit" }
  ];

  return (
    <div className="bg-white text-gray-800 p-3 rounded-2xl shadow-lg w-full max-w-sm h-44 flex flex-col justify-between">

      <ul className="divide-y divide-gray-200 flex-1 overflow-auto">
        {transactions.map(transaction => (
          <li key={transaction.id} className="flex justify-between items-center py-1">
            <div className="flex items-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                transaction.type === "deposit" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
              }`}>
                {transaction.type === "deposit" ? (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0001 11.379C14.4962 11.379 14.9013 11.7831 14.9013 12.2792C14.9013 12.7319 15.2693 13.0988 15.7219 13.0988C16.1736 13.0988 16.5415 12.7319 16.5415 12.2792C16.5415 11.1671 15.817 10.2287 14.8197 9.88556V9.42048C14.8197 8.96884 14.4528 8.59987 14.0001 8.59987C13.5464 8.59987 13.1795 8.96884 13.1795 9.42048V9.88556C12.1822 10.2287 11.4597 11.1671 11.4597 12.2792C11.4597 13.6817 12.5987 14.8206 14.0001 14.8206C14.4962 14.8206 14.9013 15.2257 14.9013 15.7218C14.9013 16.2189 14.4962 16.6231 14.0001 16.6231C13.504 16.6231 13.0999 16.2189 13.0999 15.7218C13.0999 15.2691 12.732 14.9012 12.2793 14.9012C11.8256 14.9012 11.4597 15.2691 11.4597 15.7218C11.4597 16.8339 12.1822 17.7713 13.1795 18.1144V18.5795C13.1795 19.0332 13.5464 19.4011 14.0001 19.4011C14.4528 19.4011 14.8197 19.0332 14.8197 18.5795V18.1144C15.817 17.7713 16.5415 16.8339 16.5415 15.7218C16.5415 14.3204 15.4016 13.1804 14.0001 13.1804C13.504 13.1804 13.0999 12.7763 13.0999 12.2792C13.0999 11.7831 13.504 11.379 14.0001 11.379ZM20.872 18.5547C21.274 18.7666 21.769 18.6126 21.9799 18.2136C22.662 16.9248 23.0217 15.4676 23.0217 14C23.0217 9.02671 18.9734 4.97947 14.0001 4.97947C9.0258 4.97947 4.97856 9.02671 4.97856 14C4.97856 18.9743 9.0258 23.0215 14.0001 23.0215C15.446 23.0215 16.8826 22.6722 18.1548 22.0097C18.5569 21.802 18.7129 21.3049 18.5042 20.9039C18.2954 20.5039 17.8004 20.3447 17.3973 20.5545C16.3441 21.1044 15.2 21.3824 14.0001 21.3824C9.93013 21.3824 6.61771 18.071 6.61771 14C6.61771 9.93104 9.93013 6.61862 14.0001 6.61862C18.0701 6.61862 21.3825 9.93104 21.3825 14C21.3825 15.202 21.0869 16.3936 20.5309 17.4457C20.318 17.8467 20.471 18.3428 20.872 18.5547ZM14.0001 1.69702C11.6241 1.69702 9.31725 2.37707 7.3298 3.66173C6.94844 3.90771 6.83992 4.41517 7.08589 4.7955C7.3329 5.17583 7.83829 5.28332 8.22069 5.03941C9.94046 3.92735 11.9414 3.33824 14.0001 3.33824C19.8798 3.33824 24.6619 8.12135 24.6619 14C24.6619 19.8797 19.8798 24.6628 14.0001 24.6628C8.12044 24.6628 3.33733 19.8797 3.33733 14C3.33733 11.9609 3.91507 9.97755 5.00956 8.26708C5.25347 7.88468 5.14185 7.37722 4.75945 7.13331C4.37808 6.8894 3.87063 7.00102 3.62775 7.38239C2.36479 9.35744 1.69714 11.6477 1.69714 14C1.69714 20.785 7.21508 26.303 14.0001 26.303C20.7841 26.303 26.3031 20.785 26.3031 14C26.3031 7.21703 20.7841 1.69702 14.0001 1.69702Z" fill="#16DBCC"/>
                  </svg>
                  
                ) : (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6452 24.6094H5.67984C4.9859 24.6087 4.32059 24.3327 3.8299 23.842C3.33921 23.3513 3.06322 22.686 3.0625 21.992V14.2543C3.06322 13.5604 3.33921 12.8951 3.8299 12.4044C4.32059 11.9137 4.9859 11.6377 5.67984 11.637H18.6452C19.3391 11.6377 20.0044 11.9137 20.4951 12.4044C20.9858 12.8951 21.2618 13.5604 21.2625 14.2543V21.992C21.2618 22.686 20.9858 23.3513 20.4951 23.842C20.0044 24.3327 19.3391 24.6087 18.6452 24.6094ZM5.67984 13.2776C5.42089 13.2779 5.17263 13.3809 4.98952 13.564C4.80641 13.7471 4.70341 13.9954 4.70312 14.2543V21.992C4.70341 22.251 4.80641 22.4993 4.98952 22.6824C5.17263 22.8655 5.42089 22.9685 5.67984 22.9688H18.6452C18.9041 22.9685 19.1524 22.8655 19.3355 22.6824C19.5186 22.4993 19.6216 22.251 19.6219 21.992V14.2543C19.6216 13.9954 19.5186 13.7471 19.3355 13.564C19.1524 13.3809 18.9041 13.2779 18.6452 13.2776H5.67984Z" fill="#FFBB38"/>
                    <path d="M22.3212 20.1917H20.4422C20.2246 20.1917 20.016 20.1053 19.8621 19.9515C19.7083 19.7976 19.6219 19.589 19.6219 19.3714C19.6219 19.1538 19.7083 18.9452 19.8621 18.7914C20.016 18.6375 20.2246 18.5511 20.4422 18.5511H22.3212C22.58 18.5505 22.828 18.4474 23.0109 18.2643C23.1937 18.0812 23.2966 17.8331 23.2969 17.5744V9.83664C23.2967 9.57778 23.1939 9.32954 23.0111 9.14635C22.8282 8.96315 22.5801 8.85995 22.3212 8.85938H9.35593C9.09698 8.85966 8.84871 8.96266 8.66561 9.14577C8.4825 9.32888 8.3795 9.57714 8.37921 9.83609V12.4567C8.37921 12.6743 8.29279 12.8829 8.13895 13.0368C7.98511 13.1906 7.77646 13.277 7.5589 13.277C7.34134 13.277 7.13269 13.1906 6.97885 13.0368C6.82501 12.8829 6.73859 12.6743 6.73859 12.4567V9.83664C6.73917 9.1426 7.01509 8.47715 7.5058 7.98635C7.9965 7.49554 8.6619 7.21947 9.35593 7.21875H22.3212C23.0151 7.21976 23.6802 7.49595 24.1707 7.98673C24.6611 8.47751 24.9369 9.14279 24.9375 9.83664V17.5744C24.9368 18.2681 24.6609 18.9333 24.1705 19.4239C23.68 19.9146 23.015 20.1907 22.3212 20.1917Z" fill="#FFBB38"/>
                    <path d="M20.4422 18.7463H3.88281C3.66525 18.7463 3.4566 18.6599 3.30276 18.506C3.14893 18.3522 3.0625 18.1436 3.0625 17.926V15.1708C3.0625 14.9533 3.14893 14.7446 3.30276 14.5908C3.4566 14.437 3.66525 14.3505 3.88281 14.3505H20.4422C20.6597 14.3505 20.8684 14.437 21.0222 14.5908C21.1761 14.7446 21.2625 14.9533 21.2625 15.1708V17.926C21.2625 18.1436 21.1761 18.3522 21.0222 18.506C20.8684 18.6599 20.6597 18.7463 20.4422 18.7463ZM4.70312 17.1057H19.6219V15.9911H4.70312V17.1057Z" fill="#FFBB38"/>
                  </svg>

                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <p className={`text-sm font-medium ${
              transaction.type === "deposit" ? "text-green-600" : "text-red-600"
            }`}>
              {transaction.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
