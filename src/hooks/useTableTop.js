import { useEffect, useState } from 'react';
import tabletop from 'tabletop';

export function useTabletop(key) {
  if (!key) {
    throw new Error('`useTableTop` requires a key argument.');
  }

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
