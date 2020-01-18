import { useEffect, useState } from 'react';
import tabletop from 'tabletop';

export function useTabletop(key) {
  const [sheetData, updateSheetData] = useState([]);

  useEffect(() => {
    tabletop.init({
      key,
      callback: (data) => {
        updateSheetData(data);
      },
      simpleSheet: true
    });
  }, [key]);
  return sheetData;
}
