import { faA, faAngleDown, faAngleUp, faD, faH, faLeftRight, faS, faUpDown, faW } from "@fortawesome/free-solid-svg-icons";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons/faHandPointer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HelpView = () => {
  return (
    <div className="modal-content content-center justify-items-center items-center my-auto mx-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-400 uppercase">
        <tr>
          <th scope="col" className="px-6 py-3">
            Key
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="">
          <th scope="row" className="px-6 py-2.5 font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Shift</kbd>
              <span className="mx-2">+</span>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Scroll&nbsp;
              <FontAwesomeIcon icon={faAngleUp} />
            </kbd>
          </th>
          <td className="px-6 py-2.5">
            Move left
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="px-6 py-2.5 font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Shift</kbd>
              <span className="mx-2">+</span>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Scroll&nbsp;
              <FontAwesomeIcon icon={faAngleDown} />
            </kbd>
          </th>
          <td className="px-6 py-2.5">
            Move right
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="px-6 py-2.5 font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Scroll&nbsp;
              <FontAwesomeIcon icon={faAngleUp} />
            </kbd>
          </th>
          <td className="px-6 py-2.5">
            Move up
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="px-6 py-2.5 font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Scroll&nbsp;
              <FontAwesomeIcon icon={faAngleDown} />
            </kbd>
          </th>
          <td className="px-6 py-2.5">
            Move down
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="inline-flex items-center px-6 py-2.5 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <kbd className="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                <path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z"/>
              </svg>
              <span className="sr-only">Arrow key up</span>
            </kbd>
            <span className="mx-2">or</span>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              <FontAwesomeIcon icon={faW} />
            </kbd>
          </th>
          <td className="px-6 py-2.5">
            Move up
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="inline-flex items-center px-6 py-2.5 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <kbd className="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
              </svg>
              <span className="sr-only">Arrow key down</span>
            </kbd>
            <span className="mx-2">or</span>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              <FontAwesomeIcon icon={faS} />
            </kbd>
          </th>
          <td className="px-6 py-2.5">
            Move down
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="inline-flex items-center px-6 py-2.5 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <kbd className="rtl:rotate-180 inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"/>
              </svg>
              <span className="sr-only">Arrow key left</span>
            </kbd>
            <span className="mx-2">or</span>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              <FontAwesomeIcon icon={faA} />
            </kbd>
          </th>
          <td className="px-6 py-2.5">
              Move left
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="inline-flex items-center px-6 py-2.5 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <kbd className="rtl:rotate-180 inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
              </svg>
              <span className="sr-only">Arrow key right</span>
            </kbd>
            <span className="mx-2">or</span>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              <FontAwesomeIcon icon={faD} />
            </kbd>
          </th>
          <td className="px-6 py-2.5">
            Move right
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="inline-flex items-center px-6 py-2.5 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <kbd className="inline-flex items-center px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Esc
            </kbd>
          </th>
          <td className="px-6 py-2.5">
            Close dialog
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="px-6 py-2.5 font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Enter</kbd>
            <span className="mx-2">or</span>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Spacebar</kbd>
          </th>
          <td className="px-6 py-2.5">
            Open the selected item
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="px-6 py-2.5 font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
          <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">F1</kbd>
            <span className="mx-2">or</span>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              <FontAwesomeIcon icon={faH} />
            </kbd>
          </th>
          <td className="px-6 py-2.5">
            Open help
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export const MobileHelpView = () => {
  return (
    <div className="modal-content content-center justify-items-center items-top my-auto mx-auto w-[80%]">
    <table className="w-full text-m text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-m text-gray-400 uppercase">
        <tr>
          <th scope="col" className="px-6 py-3">
            Input
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="">
          <th scope="row" className="px-3 py-2.5 font-large text-gray-500 whitespace-nowrap dark:text-gray-400">
            <span className="mr-[-20px]">Swipe</span>
            <FontAwesomeIcon icon={faUpDown} />
          </th>
          <td className="px-3 py-2.5">
            Move up/down
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="px-3 py-2.5 font-large text-gray-500 whitespace-nowrap dark:text-gray-400">
            <span className="mr-[-20px]">Swipe</span>
            <FontAwesomeIcon icon={faLeftRight} />
          </th>
          <td className="px-3 py-2.5">
            Move left/right
          </td>
        </tr>
        <tr className="">
          <th scope="row" className="px-3 py-2.5 font-medium text-gray-500 whitespace-nowrap dark:text-gray-400">
            <span className="mr-[-20px]">&nbsp;&nbsp;&nbsp;&nbsp;Tap</span>
            <FontAwesomeIcon icon={faHandPointer} />
          </th>
          <td className="px-3 py-2.5">
            Open selected item
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}