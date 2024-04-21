interface buttonProps {
  children?: React.ReactNode;
  title?: string;
  path?: string
}

export default function Button({children, title, path}: buttonProps) {
  return (
    <a
      href={path}
      className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-blue-300">
        {title}
      <svg
        className="w-5 h-5 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"></path>
      </svg>
    </a>
  );
}
