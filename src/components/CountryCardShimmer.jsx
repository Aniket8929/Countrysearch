const CountryCardShimmer = () => {
  return (
    <div className="w-64 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
      
      {/* Flag shimmer */}
      <div className="h-40 w-full bg-gray-200 dark:bg-gray-700 
                      animate-pulse"></div>

      {/* Info shimmer */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-5 w-3/4 rounded bg-gray-200 dark:bg-gray-700 
                        animate-pulse"></div>

        {/* Lines */}
        <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700 
                        animate-pulse"></div>
        <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700 
                        animate-pulse"></div>

        {/* Small line */}
        <div className="h-3 w-1/2 rounded bg-gray-200 dark:bg-gray-700 
                        animate-pulse"></div>
      </div>
    </div>
  );
};

export default CountryCardShimmer;
