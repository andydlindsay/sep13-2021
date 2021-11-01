import {useEffect} from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    console.log('useEffect is running');
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;
